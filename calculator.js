document.addEventListener("DOMContentLoaded", () => {
    function getHistory() {
        return document.getElementById("history-value").innerText;
    }

    function printHistory(num) {
        document.getElementById("history-value").innerText = num;
    }

    function getOutput() {
        return document.getElementById("output-value").innerText;
    }

    function printOutput(num) {
        if (num === "") {
            document.getElementById("output-value").innerText = num;
        } else {
            document.getElementById("output-value").innerText = num;
        }
    }

    
    function clearDisplay() {
        printHistory("");
        printOutput("");
    }

    
   

    
    function calculate() {
        try {
            let history = getHistory();
            let output = getOutput();

            if (output !== "" || history !== "") {
                history += output;
                let result = eval(history);
                printOutput(result);
                printHistory(history + " = " + result);
            }
        } catch {
            printOutput("Error");
        }
    }


    document.querySelector(".buttons").addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            let value = event.target.innerText;

            if (value === "C") {
                clearDisplay();
            } else if (value === "←") {
                backspace();
            } else if (value === "=") {
                calculate();
            } else {
                let output = getOutput();
                printOutput(output + value);
            }
        }
    });
});
