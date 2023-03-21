const returnFirstTwoDrivers = function() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(); 
}

function selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(); 
}


