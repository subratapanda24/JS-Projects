function generateTable() {
    const num = parseInt(document.getElementById("number").value);
    const limit = parseInt(document.getElementById("limit").value);
    const output = document.getElementById("output");
    const message = document.getElementById("message");

    output.innerHTML = "";
    message.innerHTML = "";

    if (isNaN(num) || isNaN(limit)) {
        message.innerHTML = "Please enter valid numbers.";
        return;
    }
    let table = "<table>";

    for (let i = 1; i <= limit; i++) {
        table += `
            <tr>
                <td>${num}</td>
                <td>×</td>
                <td>${i}</td>
                <td>=</td>
                <td>${num * i}</td>
            </tr>
        `;
    }

    table += "</table>";
    output.innerHTML = table;
}