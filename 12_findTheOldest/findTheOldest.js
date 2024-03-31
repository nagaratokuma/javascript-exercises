const findTheOldest = function (array) {
    oldest = array.reduce((oldestPerson, currentPerson) => {
        oldestPersonAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestPersonAge > currentPersonAge ? oldestPerson : currentPerson;
    });
    return oldest;
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

module.exports = findTheOldest;