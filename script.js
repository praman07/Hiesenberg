document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero-section');
    const mainQuote = document.getElementById('main-quote');
    const morphBtn = document.getElementById('morph-btn');
    const labTesting = document.getElementById('lab-testing');

    // Click to Transform with 5s timeout
    morphBtn.addEventListener('click', function () {
        // Apply transformation
        heroSection.classList.add('transformed');
        mainQuote.innerText = 'I AM THE DANGER';
        morphBtn.innerText = 'PRODUCT COOKING...';
        morphBtn.style.pointerEvents = 'none'; // Prevent double clicks

        // After 5000ms: Revert and Scroll
        setTimeout(function () {
            heroSection.classList.remove('transformed');
            mainQuote.innerText = 'I am not in danger';
            morphBtn.innerText = 'COOK THE PRODUCT';
            morphBtn.style.pointerEvents = 'all';

            // Reveal and scroll to lab section
            labTesting.classList.remove('hidden');
            labTesting.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Log interaction
            console.log('Product finished. Testing phase initiated.');
        }, 5000);
    });

    const finalReveal = document.querySelector('.final-section');
    finalReveal.addEventListener('mouseenter', function () {
        console.log('Interaction detected in final zone.');
    });
});

// Global scope for HTML button access
function checkPurity(userChoice) {
    const checker = document.getElementById('purity-checker');
    const resultDisplay = document.getElementById('test-result');
    const resultText = document.getElementById('result-text');
    const resultSubtext = document.getElementById('result-subtext');
    const status = document.getElementById('test-status');

    // Randomly decide who cooked it
    const isHeisenberg = Math.random() > 0.5; // 50/50 chance

    checker.classList.add('hidden');
    resultDisplay.classList.remove('hidden');

    if (isHeisenberg) {
        // Heisenberg's Pure Stuff
        resultText.innerText = '99.1%';
        resultText.className = 'pure-result';
        status.innerText = 'PRODUCED BY: WALTER WHITE';

        if (userChoice === true) {
            resultSubtext.innerText = 'CORRECT. HEISENBERG PRODUCED THE BLUE.';
        } else {
            resultSubtext.innerText = 'WRONG. YOU DOUBTED THE MASTER.';
        }
    } else {
        // Jesse's Contaminated Batch
        resultText.innerText = 'CONTAMINATED';
        resultText.className = 'bad-result';
        status.innerText = 'PRODUCED BY: JESSE PINKMAN';

        if (userChoice === true) {
            resultSubtext.innerText = "WRONG. JESSE COOKED THIS. IT'S GARBAGE.";
        } else {
            resultSubtext.innerText = "CORRECT. YOU KNEW JESSE'S BATCH WAS INFERIOR.";
        }
    }

    console.log('Purity Test result: ' + (isHeisenberg ? 'Heisenberg' : 'Jesse'));
}

function resetTest() {
    const checker = document.getElementById('purity-checker');
    const resultDisplay = document.getElementById('test-result');
    const status = document.getElementById('test-status');

    checker.classList.remove('hidden');
    resultDisplay.classList.add('hidden');
    status.innerText = 'BATCH #' + Math.floor(Math.random() * 1000) + ' READY FOR ANALYSIS.';
}