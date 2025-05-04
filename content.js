// Debug log to confirm the script is loaded
console.log('Content script loaded for Naukri Profile Editor.');

// Wait for the DOM to fully load
// Check if we are on the correct page
if (window.location.href.includes('https://www.naukri.com/mnjuser/profile')) {
    // Find the element with the specified class and text
    const targetElement = Array.from(document.querySelectorAll('span.edit.icon')).find(
        element => element.textContent.trim() === 'editOneTheme'
    );

    // Click the element if it exists
    if (targetElement) {
        targetElement.click();
        console.log('Clicked on the target element.');
    } else {
        console.error('Target element not found.');
    }

    // Function to check and update the text in the textarea
    const observer = new MutationObserver(() => {
        const textarea = document.getElementById('resumeHeadlineTxt');

        if (textarea) {
            observer.disconnect(); // Stop observing once the element is found

            let text = textarea.value.trim();

            if (text.endsWith('.')) {
                // Remove the dot if it exists
                textarea.value = text.slice(0, -1);
                textarea.dispatchEvent(new Event('input', { bubbles: true }));
                console.log('Removed the dot from the text area.');
            } else {
                // Add a dot if it doesn't exist
                textarea.value = text + '.';
                textarea.dispatchEvent(new Event('input', { bubbles: true }));
                console.log('Added a dot to the text area.');
            }

            // Simulate a full click event on the Save button
            setTimeout(() => {
                const saveButton = Array.from(document.querySelectorAll('button')).find(
                    button => button.textContent.trim() === 'Save'
                )
                if (saveButton) {
                    saveButton.click();
                    // const eventOptions = { bubbles: true, cancelable: true, view: window };
                    // saveButton.dispatchEvent(new MouseEvent('mousedown', eventOptions));
                    // saveButton.dispatchEvent(new MouseEvent('mouseup', eventOptions));
                    // saveButton.dispatchEvent(new MouseEvent('click', eventOptions));
                    console.log('Simulated a full click event on the Save button.');
                } else {
                    console.error('Save button not found.');
                }
            }, 3000); // Delay to ensure the textarea is updated before clicking Save
        }
    });

    // Start observing the body for changes
    observer.observe(document.body, { childList: true, subtree: true });

}
