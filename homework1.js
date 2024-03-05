function preventNumbers(event) {
    var key = event.key;
    // Allows backspace, delete, arrow keys, and navigation keys
    if (event.keyCode === 8 || event.keyCode === 46 || event.keyCode === 37 || event.keyCode === 39 || event.keyCode === 9) {
        return true;
    }
    // Allows letters
    if (/^[a-zA-Z]$/.test(key)) {
        return true;
    }
    // Prevents numbers
    event.preventDefault();
}

function preventAlpha(event) {
    var key = event.key;
    // Allows backspace, delete, arrow keys, and navigation keys
    if (event.keyCode === 8 || event.keyCode === 46 || event.keyCode === 37 || event.keyCode === 39 || event.keyCode === 9) {
        return true;
    }
    // Allows numbers only
    if (/^\d$/.test(key)) {
        return true;
    }
    // Prevent input if it's an alphabet
    event.preventDefault();
}

var currentDate = new Date();

// date format
var formattedDate = currentDate.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    weekday: 'long'
});

document.getElementById('currentDate').textContent = formattedDate;


const budgetSlider = document.getElementById('budget');
        const budgetValue = document.getElementById('budgetValue');

        budgetSlider.addEventListener('input', function() {
            budgetValue.textContent = '$' + this.value;
        });

document.getElementById('regForm').addEventListener('reset', function() {
            var inputs = document.querySelectorAll('input, select');
            inputs.forEach(function(input) {
                input.value = '';
            });
        });

        var form = document.getElementById("regForm");
    
        // Submit button
        var submitButton = document.getElementById("submitButton");
    
        // event listener for form submission
        form.addEventListener("submit", function(event) {
            // Prevents the default form submission behavior
            event.preventDefault();
            window.location.href = "thankyou.html";
        });