const after = document.querySelectorAll('.tab-content::after');
function openTab(event, tabName) {
    // Get all elements with class "tab-content" and hide them
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Get all elements with class "tab-button" and remove "active" class
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    
    // Show the current tab and add "active" class to the clicked tab
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');

    if (tabName.classList.contains('active')){
        const after = document.querySelector('.tab-button::after');
        after.style.opacity ='1';
    } else{
        after.style.opacity ='0';
    }
}

// Set default tab
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-button').click(); // Simulate a click on the first tab
});

