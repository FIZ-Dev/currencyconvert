const convertButton = document.getElementById('convert');
const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const resultParagraph = document.getElementById('result');

convertButton.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = amountInput.value;
    const from = fromSelect.value;
    const to = toSelect.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[to];
            const result = amount * rate;
            resultParagraph.innerText = `${amount} ${from} is equal to ${result.toFixed(2)} ${to}`;
        })
        .catch(error => console.error(error));
});