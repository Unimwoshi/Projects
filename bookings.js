window.onload = function() {
    //Get the stored value from local storage
    const selectedQueenRooms = localStorage.getItem('selectedQueenRooms');
    const selectedSingleRooms = localStorage.getItem('selectedSingleRooms');
    const selectedPresidentialSuites = localStorage.getItem('selectedPresidentialSuites');
    const selectedKingRooms = localStorage.getItem('selectedKingRooms');
    const selectedSuite = localStorage.getItem('selectedSuite');
    
    //Find the dropdown menu
    const trigger = document.querySelector('.trigger');
    
    //Set the selected options
    if(selectedQueenRooms) {
        const option = document.querySelector(`.option[data-value = "${selectedQueenRooms}"]`);
        if (option) {
            trigger.textContent = option.textContent;
            localStorage.removeItem('selectedQueenRooms');
        }
    }

    if(selectedSingleRooms) {
        const option = document.querySelector(`.option[data-value = "${selectedSingleRooms}"]`);
        if (option) {
            trigger.textContent = option.textContent;
            localStorage.removeItem('selectedSingleRooms');
        }
    }

    if(selectedKingRooms) {
        const option = document.querySelector(`.option[data-value = "${selectedKingRooms}"]`);
        if (option) {
            trigger.textContent = option.textContent;
            localStorage.removeItem('selectedKingRooms');
        }
    }

    if(selectedSuite) {
        const option = document.querySelector(`.option[data-value = "${selectedSuite}"]`);
        if (option) {
            trigger.textContent = option.textContent;
            localStorage.removeItem('selectedSuite');
        }
    }

    if(selectedPresidentialSuites) {
        const option = document.querySelector(`.option[data-value = "${selectedPresidentialSuites}"]`);
        if (option) {
            trigger.textContent = option.textContent;
            localStorage.removeItem('selectedPresidentialSuites');
        }
    }
};

document.querySelector('.trigger').addEventListener('click', function() {
    this.parentNode.classList.toggle('open');
});

document.querySelectorAll('.option').forEach(option=> {
    option.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        this.closest('.select').querySelector('.trigger').textContent = this.textContent;
        this.closest('.select').classList.remove('open');
        localStorage.setItem('selectedOption', value);
    });
});

window.addEventListener('click', function(e) {
    const select = this.document.querySelector('.select');
    if(!select.contains(e.target)) {
        select.classList.remove('open');
    }
});

 function closeMenu () {
    const container = document.querySelector('.container');
    const options = document.querySelector('.options');
    options.style.display = 'none';
    container.style.borderBottomLeftRadius = '20px';
    container.style.borderBottomRightRadius = '20px';
   
};

function openMenu () {
    const container = document.querySelector('.container');
    const options = document.querySelector('.options');
    options.style.display = 'flex';
    container.style.borderBottomLeftRadius = '0px';
    container.style.borderBottomRightRadius = '0px';
};

document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('ID');
    const fileNameDisplay = document.getElementById('fileName');

    fileInput.addEventListener('change', function() {
        if (fileInput.files.length > 0) {
            fileNameDisplay.textContent = fileInput.files[0].name;
        } else {
            fileNameDisplay.textContent = 'No file chosen';
        }
    });
});



function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

