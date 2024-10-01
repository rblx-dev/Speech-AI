document.getElementById('check').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: checkGrammar
        });
    });
});

function checkGrammar() {
    const textAreas = document.querySelectorAll('textarea, input[type="text"]');
    textAreas.forEach(textArea => {
        const text = textArea.value;
        // Simple example of grammar checking using a mock function
        const correctedText = mockGrammarCheck(text);
        textArea.value = correctedText;
    });
}

// Mock function to simulate grammar checking
function mockGrammarCheck(text) {
    return text.replace(/(teh)/g, 'the'); // Example correction
}