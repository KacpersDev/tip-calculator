const count = () => {
    if (document.getElementById('percent').value <= 0) {
        alert('Tip cannot be smaller or equals to 0');
    }
    alert('Tip: ' + (document.getElementById('amount').value / document.getElementById('percent').value) + '$'); 
};