var posts = []
loadpost();


function loadpost(){
	var listpost = JSON.parse(localStorage.getItem('posts'));
	document.querySelector('#firstinput').value = localStorage.getItem('username');
	const contentpost=document.querySelector('.content');
	if(listpost != null){
		posts = listpost;
		for (var i = 0; i < listpost.length; i++) {
			contentpost.insertAdjacentHTML('beforeEnd',listpost[i]);
		}
	}
}
function addthepost() {
	const name = document.querySelector('#firstinput').value;
	const text = document.querySelector('#secondinput').value;
	document.querySelector('#secondinput').value = '';
	const contentpost=document.querySelector('.content');
	var today = new Date();
	const now = today.toLocaleString();
	const post = `<div class = "content-item">
			<div class="content__header">
				<p class="content__username">Имя пользователя: ${name}</p>
			</div>
			<div class="content__post">
				<p class="content__text">${text}</p>
			</div>
			<div class="content__data">
				<p class="content__text">${now}</p>
			</div>
		</div>
		`
	posts.push(post);
	contentpost.insertAdjacentHTML('beforeEnd',post);
	let json = JSON.stringify(posts);
	localStorage.setItem('posts', json);
	localStorage.setItem('username', name);
}


