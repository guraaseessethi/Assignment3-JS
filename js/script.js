document.addEventListener('DOMContentLoaded', function () {
    
    const myInfo = document.getElementById('myInfo');
    myInfo.textContent = 'Guraasees Sethi | Student ID: 200503845';
   
    const orderButton = document.getElementById('orderButton');
    orderButton.addEventListener('click', createPizza);
});

class Pizza {
    constructor(size, toppings) {
        this.size = size;
        this.toppings = toppings;
    }

    getDescription() {
        return `Size: ${this.size}, Toppings: ${this.toppings.join(', ')}`;
    }
}

function createPizza() {
    const size = document.getElementById('size').value;
    const selectedToppings = []; 
    const toppingsCheckboxes = document.querySelectorAll('input[name="toppings"]:checked');
    toppingsCheckboxes.forEach(checkbox => {
        selectedToppings.push(checkbox.value);
    });

    const pizza = new Pizza(size, selectedToppings);
    const pizzaDescription = document.getElementById('pizzaDesc');
    pizzaDescription.textContent = pizza.getDescription();
}
