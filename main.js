document.getElementById("billForm").addEventListener("submit", function(event) {
            event.preventDefault();

            // Get the values from the form
            let billAmount = parseFloat(document.getElementById("amount").value);
            let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

            // Calculate the tip and total amount
            let tipAmount = (billAmount * tipPercentage) / 100;
            let totalAmount = billAmount + tipAmount;

            // Display the result
            let resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `
                <p>Bill Amount: RS ${billAmount.toFixed(2)}</p>
                <p>Tip Percentage: ${tipPercentage}%</p>
                <p>Tip Amount: RS ${tipAmount.toFixed(2)}</p>
                <p>Total Amount: RS ${totalAmount.toFixed(2)}</p>
            `;
        });