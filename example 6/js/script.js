 window.onload = init;

 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             element.innerText = task;

             let listo = document.createElement("button");
             listo.type = "button";
             listo.style.margin = "0 25px";
             listo.innerText = "Realizada";

             let borrar = document.createElement("button");
             borrar.type = "button";
             borrar.style.margin = "0 15px";
             borrar.innerText = "Eliminar";



             element.appendChild(listo);
             element.appendChild(borrar);

             borrar.addEventListener("click", function(){
                let parent = this.parentNode;
                let bigparent = parent.parentNode;
                if(parent){
                    bigparent.removeChild(parent);
                }
             });

             listo.addEventListener("click", function(){
                let parent = this.parentNode;
                parent.className += "tachado";
             });
            // Añadir un boton para marcar de finalizado
            // Elmine de la lista

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }
