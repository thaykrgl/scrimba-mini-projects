const carWashButton = document.getElementById('wash');
const mowLawnButton = document.getElementById('mow');
const pullWeedsButton = document.getElementById('pull');
const sendInvoiceButton = document.getElementById('invoice')
const taskList = document.getElementById('task');
const totalList = document.getElementById('total');
const totalPrice = document.getElementById('total-price');

let isInclude = false;
let services = [];

function renderServices() {

    let task = document.createElement("li");
    let total = document.createElement("li");
    let totalDollar = document.createElement("span");
    task.textContent = services[services.length - 1].service;
    total.textContent = services[services.length - 1].price;
    totalDollar.textContent = "$";
    taskList.appendChild(task);
    totalList.appendChild(total);
    totalDollar.classList.add("dollar");
    total.insertBefore(totalDollar, total.firstChild);
}

carWashButton.addEventListener("click", function () {
    addService("Wash Car", "10");
    if (!isInclude) {
        totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(10);
    }
})

mowLawnButton.addEventListener("click", function () {
    addService("Mow Lawn", "20");
    if (!isInclude) {
        totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(20);
    }
})

pullWeedsButton.addEventListener("click", function () {
    addService("Pull Weeds", "30");
    if (!isInclude) {
        totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(30);
    }
})

sendInvoiceButton.addEventListener("click", function () {
    reset();
})

function addService(service, price) {
    if (services.length == 0) {
        services.push({ service: `${service}`, price: `${price}` })
        renderServices();
    }
    else {
        for (let j = 0; j < services.length; j++) {
            if (services[j].service === `${service}` && services[j].price === `${price}`) {
                isInclude = true;
                break;
            }
            else {
                isInclude = false;
            }
        }
        if (!isInclude) {
            services.push({ service: `${service}`, price: `${price}` })
            renderServices();
        }
    }
}

function reset() {

    var taskChildren = taskList.children;
    for (let i = 0; i < taskChildren.length; i++) {
        taskChildren[i].style.display = "none";
    }

    var totalChildren = totalList.children;
    for (let i = 0; i < totalChildren.length; i++) {
        totalChildren[i].style.display = "none";
    }

    totalPrice.innerHTML = "0";
    services = [];
    isInclude = false;
}