// Object to store previous quantities
let previousQuantity = {};

// Function to decrement quantity
function decrementQuantity(inputId, priceId, subtotalId, taxId, totalId) {
    let inputElement = document.getElementById(inputId);
    let currentValue = parseInt(inputElement.value);
    if (currentValue > 0) {
        inputElement.value = currentValue - 1;
        updatePrice(inputId, priceId, subtotalId, taxId, totalId);
    }
}

// Function to increment quantity
function incrementQuantity(inputId, priceId, subtotalId, taxId, totalId) {
    let inputElement = document.getElementById(inputId);
    let currentValue = parseInt(inputElement.value);
    inputElement.value = currentValue + 1;
    updatePrice(inputId, priceId, subtotalId, taxId, totalId);
}

// Function to update price
function updatePrice(inputId, priceId, subtotalId, taxId, totalId) {
    let inputElement = document.getElementById(inputId);
    let quantity = parseInt(inputElement.value);
    let priceElement = document.getElementById(priceId);
    let unitPrice = (priceId === 'price1') ? 1200 : 1500; // Adjust this value to the actual unit price
    let totalPrice = quantity * unitPrice;
    priceElement.textContent = "$" + totalPrice;

    updateSubtotal(subtotalId);
    calculateTax(subtotalId, taxId, totalId);
}

// Function to remove product
function removeProduct(productId, subtotalId, taxId, totalId) {
    let inputId = productId.replace("product", "quantity");
    let inputElement = document.getElementById(inputId);
    let previousValue = previousQuantity[inputId];
    if (previousValue !== undefined) {
        inputElement.value = previousValue; // Restore the previous quantity
        updatePrice(inputId, 'price' + productId.substring(7), subtotalId, taxId, totalId);
    }
}

// Function to update subtotal
function updateSubtotal(subtotalId) {
    let subtotal = 0;
    let productContainers = document.querySelectorAll('.product-container');
    productContainers.forEach(function(container) {
        let priceElement = container.querySelector('.productPrice');
        let price = parseFloat(priceElement.textContent.replace('$', ''));
        subtotal += price;
    });
    document.getElementById(subtotalId).textContent = "$" + subtotal;
}

// Function to calculate tax and total
function calculateTax(subtotalId, taxId, totalId) {
    let subtotalElement = document.getElementById(subtotalId);
    let subtotal = parseFloat(subtotalElement.textContent.replace('$', ''));
    let tax = subtotal * 0.1; // Assuming 10% tax rate
    document.getElementById(taxId).textContent = "$" + tax.toFixed(2);
    
    let total = subtotal + tax;
    document.getElementById(totalId).textContent = "$" + total.toFixed(2);
}

// Initialize previous quantities
document.addEventListener('DOMContentLoaded', function() {
    let quantityInputs = document.querySelectorAll('.form-control');
    quantityInputs.forEach(function(input) {
        previousQuantity[input.id] = parseInt(input.value);
    });
});



let checkoutClicked = false; // Flag to track if checkout button is clicked
// Function to calculate total
function calculateTotal() {
    checkoutClicked = true; // Set the flag to true when checkout button is clicked
    let subtotal = calculateSubtotal();
    let tax = calculateTax(subtotal);
    let total = subtotal + tax;

    // Update HTML elements with new subtotal, tax, and total values
    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("tax").textContent = "$" + tax.toFixed(2);
    document.getElementById("total").textContent = "$" + total.toFixed(2);
}

// Function to calculate subtotal
function calculateSubtotal() {
    // Add your logic here to calculate subtotal
}





















