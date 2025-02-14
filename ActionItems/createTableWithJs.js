// createTableCreateElement.js

function createTableCreateElement() {
    const tableContainer = document.getElementById("table-container");
    
    const table = document.createElement("table");
    table.border = "1";

    const headerRow = document.createElement("tr");
    ["Name", "Age"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    const data = [["John", 25], ["Jane", 30]];
    data.forEach(rowData => {
        const row = document.createElement("tr");
        rowData.forEach(text => {
            const td = document.createElement("td");
            td.textContent = text;
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    tableContainer.appendChild(table);
}

document.addEventListener("DOMContentLoaded", createTableCreateElement);
