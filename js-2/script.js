loadpost();
function loadpost(){
	document.querySelector('.tasks').innerHTML=localStorage.getItem('task');
}
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("введи задачу")
    }
    else{
    var post = document.querySelector('.tasks').innerHTML += `
            <div class="task">
            	<button class="add">ready</button>
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">del</button>
            </div>
        `;
    localStorage.setItem('task',post );
    var add_tasks = document.querySelectorAll(".add");
        for(var i=0; i<add_tasks.length; i++){
            add_tasks[i].onclick = function(){
               this.parentNode.querySelector('span').classList.toggle('linethrough');
               post = document.querySelector('.tasks').innerHTML;
               localStorage.setItem('task',post );
               }
            }
    var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
            this.parentNode.remove();
            localStorage.setItem('task',post);
          		}
        	}     		
    	} 	
	}
	var add_tasks = document.querySelectorAll(".add");
        for(var i=0; i<add_tasks.length; i++){
            add_tasks[i].onclick = function(){
            this.parentNode.querySelector('span').classList.toggle('linethrough');
            post = document.querySelector('.tasks').innerHTML;
            localStorage.setItem('task',post );
                }
            }
    var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
            this.parentNode.remove();
            localStorage.setItem('task',post);
          		}
        	} 