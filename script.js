const options = document.querySelectorAll('.option');
const totalPrice = document.getElementById('total-price');

const prices = {
  "1": "$10.00 USD",
  "2": "$18.00 USD",
  "3": "$24.00 USD"
};

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');

    const selectedValue = option.getAttribute('data-units');
    document.querySelector(`input[value="${selectedValue}"]`).checked = true;
    totalPrice.textContent = prices[selectedValue];
  });
});

// Initialize first option as active
options[0].classList.add('active');
