function szamol() {
    let n = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (n <= 0 || n === "") {
        resultDiv.innerHTML = "Kérlek, adj meg egy 0-nál nagyobb számot!";
        return;
    }

    let sorozat = [n];
    n = parseInt(n);

    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        sorozat.push(n);
    }

    resultDiv.innerHTML = "<strong>Sorozat:</strong> " + sorozat.join(" ➔ ");
}