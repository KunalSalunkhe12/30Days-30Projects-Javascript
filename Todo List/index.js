window.onload = () => {


    let inputVal = document.querySelector(".input-task");
    let addButton = document.querySelector(".btn-add");

    addButton.addEventListener('click', () => {

        if (!inputVal.value) {
            alert('Enter your task')
        }
        else {

            let taskList = document.createElement('div');
            taskList.classList.add("task-list");


            let taskListItem = document.createElement('textarea');
            taskListItem.setAttribute('type', "text");
            taskListItem.readOnly = "true";
            taskListItem.rows = "2"
            taskListItem.classList.add("task-list-item");
            taskListItem.value = inputVal.value;
            taskList.appendChild(taskListItem);

            let btnEdit = document.createElement('input');
            btnEdit.setAttribute('type', "button");
            btnEdit.classList.add('btn', 'btn-primary', 'btn-edit');
            btnEdit.value = "Edit";
            taskList.appendChild(btnEdit);

            let btnDel = document.createElement('input');
            btnDel.setAttribute('type', "button");
            btnDel.classList.add('btn', 'btn-primary', 'btn-delete');
            btnDel.value = "Delete";
            taskList.appendChild(btnDel);

            document.querySelector('.task-list-container').appendChild(taskList);

            inputVal.value = "";

            btnEdit.addEventListener('click', () => {

                if (btnEdit.value == "Save") {
                    taskListItem.readOnly = "true";
                    taskListItem.classList.remove("task-list-item-edit")
                    btnEdit.value = "Edit";
                } else {
                    taskListItem.removeAttribute('readonly')
                    taskListItem.classList.add("task-list-item-edit")
                    btnEdit.value = "Save"
                }
            })


            btnDel.addEventListener('click', () => {
                document.querySelector('.task-list-container').removeChild(taskList);
            })

        }




    });



}