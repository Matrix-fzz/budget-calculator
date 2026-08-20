
function calculTotal(startAmount, days) {
    let total = 0;
    for (let day = 0; day < days; day++) {
        total += (startAmount + day);
    }
    return total;
}

document.getElementById("calculate").addEventListener("click", function () {
    const start = parseFloat(document.getElementById("startAmount").value);
    const days = parseInt(document.getElementById("days").value);

    if (isNaN(start) || isNaN(days) || start <= 0 || days <= 0) {
        alert("Please enter valid positive numbers!");
        return;
    }

    const totalFinal = calculTotal(start, days);
    const resultDiv = document.getElementById("result");

    resultDiv.textContent = `Final Total: ${totalFinal} DH`;
    resultDiv.style.display = "block";
});

document.getElementById("reset").addEventListener("click", function () {

    document.getElementById("startAmount").value = "1";
    document.getElementById("days").value = "10";
    document.getElementById("result").style.display = "none";
});
