function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="markAsDone(this)">Mark as Done</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function markAsDone(button) {
    const listItem = button.parentNode;
    const taskText = listItem.querySelector('span');
    taskText.classList.toggle('done');

    const markButton = listItem.querySelector('button');
    markButton.textContent = taskText.classList.contains('done') ? 'Done' : 'Mark as Done';
}
