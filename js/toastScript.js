// Function to create and show a custom confirmation toast
function showConfirmToast(message, onConfirm, onCancel) {
    const toastContainer = document.getElementById('toast-container');

    // Create a new toast element
    const toast = document.createElement('div');
    toast.className = 'toast';

    // Set the message and buttons
    toast.innerHTML = `
        <span>${message}</span>
        <div>
            <button id="confirm-yes">Yes</button>
            <button id="confirm-no">No</button>
        </div>
    `;

    // Append the toast to the container
    toastContainer.appendChild(toast);

    // Handle Yes button click
    document.getElementById('confirm-yes').onclick = () => {
        onConfirm();
        toast.remove();
    };

    // Handle No button click
    document.getElementById('confirm-no').onclick = () => {
        onCancel();
        toast.remove();
    };

    // Automatically remove the toast after 10 seconds if no response
    setTimeout(() => {
        if (toast) {
            toast.remove();
        }
    }, 10000);
}

// Toast function to show simple messages
function showToast(message, type = "success") {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;

    toastContainer.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
