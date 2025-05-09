function showSideBar () {
    const sideBar = document.querySelector("#sideBar");
    sideBar.style.right = '0';
    
}

function hideSideBar() {
    const sideBar = document.querySelector("#sideBar");
    sideBar.style.right = '-100%';
}

window.onload = function() {
    //Clear the specific localStorage items
    localStorage.removeItem('selectedQueenRooms');
    localStorage.removeItem('selectedSingleRooms');
    localStorage.removeItem('selectedKingRooms');
    localStorage.removeItem('selectedSuite');
    localStorage.removeItem('selectedPresidentialSuites');
}

document.getElementById('queenRoomsBtn').addEventListener(
    'click', function() {
        //store the selcted option in local storage
        localStorage.setItem('selectedQueenRooms', 'queenRoom');
        window.location.href = 'bookings.html';
    }
);

document.getElementById('singleRoomsBtn').addEventListener(
    'click', function() {
        //store the selcted option in local storage
        localStorage.setItem('selectedSingleRooms', 'singleRoom');
        window.location.href = 'bookings.html';
    }
);

document.getElementById('kingRoomsBtn').addEventListener(
    'click', function() {
        //store the selcted option in local storage
        localStorage.setItem('selectedKingRooms', 'kingRoom');
        window.location.href = 'bookings.html';
    }
);

document.getElementById('suitesBtn').addEventListener(
    'click', function() {
        //store the selcted option in local storage
        localStorage.setItem('selectedSuite', 'suite');
        window.location.href = 'bookings.html';
    }
);

document.getElementById('presidentialSuitesBtn').addEventListener(
    'click', function() {
        //store the selcted option in local storage
        localStorage.setItem('selectedPresidentialSuites', 'presidentialSuite');
        window.location.href = 'bookings.html';
    }
);