const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', (event) =>{
  if (event.code.toLowerCase() === 'space') {
    RandomColors()
  }
})

document.addEventListener('click',event =>{
  const type = event.target.dataset.type
  if(type === 'lock'){
    const node = event.target.tagName.toLowerCase()==='i'
      ? event.target
      : event.target.children()

    node.classList.toggle('fa-lock-open')
    node.classList.toggle('fa-lock')
  }else if (type === 'copy'){
    CopyColor(event.target.textContent)
  }
})

function GenerRandomColor() {
  const temp = '0123456789ABCDEF';
  let color = ''
  for (let i = 0; i < 6; i++) {
    color += temp[Math.floor(Math.random() * temp.length)];
  }
  return '#' + color;
}

function CopyColor(text){
  return navigator.clipboard.writeText(text)
}

function RandomColors() {
  cols.forEach((col) => {
    const locked = col.querySelector('i').classList.contains('fa-lock')
    const text = col.querySelector('h2')
    const button = col.querySelector('button')
    const color = chroma.random()

    if(locked){
      return 
    }
    text.textContent = color
    col.style.background = color

    ottenok(text,color)
    ottenok(button,color)
  });
}

function ottenok(text, color){
  const luminance = chroma(color).luminance()
  text.style.color = luminance > 0.5 ? 'black' : 'white'
}

RandomColors();