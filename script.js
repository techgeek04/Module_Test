let employees = [];
let nextId = 1;
let serialNumber = 1;

function addEmployee() {
    const name = document.getElementById('name').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const age = document.getElementById('age').value.trim();

    if (name && profession && age) {
        const employee = {
            id: nextId++,
            name: name.toLowerCase(),
            profession: profession.toLowerCase(),
            age: parseInt(age)
        };

        employees.push(employee);
        updateEmployeeList();
        showMessage('Success: Employee Added!', 'success');
        clearForm();
    } else {
        showMessage('Error: Please Make sure all the fields are filled before adding in an employee!', 'error');
    }
}

function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    serialNumber = 1; // Reset serial number
    updateEmployeeList();
}

function updateEmployeeList() {
    const list = document.getElementById('employeeList');
    list.innerHTML = '';
    employees.forEach((emp, index) => {
        const item = document.createElement('div');
        item.className = 'employee-item';
        item.innerHTML = `
            <span class="serial">${serialNumber++}.</span>
            <div class="info">
                <span>Name: ${emp.name.charAt(0).toUpperCase() + emp.name.slice(1)}</span>
                <span>Profession: ${emp.profession.charAt(0).toUpperCase() + emp.profession.slice(1)}</span>
                <span>Age: ${emp.age}</span>
            </div>
            <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete User</button>
        `;
        list.appendChild(item);
    });
}

function showMessage(text, type) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.className = `message ${type}`;
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
}