function convertCurrency() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    // Replace these fixed rates with real-time rates
    var exchangeRates = {
        'USD': 1.0,
        'EUR': 0.85,
        'GBP': 0.73,
        'JPY': 110.0,
        'PKR': 2.5,
        
    };

    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    if (!(fromCurrency in exchangeRates) || !(toCurrency in exchangeRates)) {
        alert('Invalid currency code.');
        return;
    }

    var rate = exchangeRates[fromCurrency] / exchangeRates[toCurrency];
    var convertedAmount = amount * rate;

    document.getElementById('result').innerText = amount.toFixed(2) + ' ' + fromCurrency +
        ' is equal to ' + convertedAmount.toFixed(2) + ' ' + toCurrency;
}