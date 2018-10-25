// Object Literal
var person = {
    /* property: value*/
    name: "Alvaro",
    lastname: "Garcia",
    birthday: new Date(1998, 8, 10)
}; // JSON (JavaScript Object Notation)

// Access to propertys
console.log(person.name);
console.log(person.birthday);
person.dui = "000000000" // Assign

// Example
function createPerson(name, lastname, birthday, dui) {
    return {
        name,
        lastname,
        birthday,
        dui
    }
}

let list = [] // To save persons

// To Add 10 fake persons
for (let i = 0; i < 10; i++) {
    list.push(createPerson(`Name ${i}`, `Lastname ${i}`, new Date().setFullYear(1990 + i + Math.floor(Math.random() * 5)), `000000${i}`));
}

//console.table(list);

// Get average age
function getAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    console.log(ageDifMs);
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var miliYear = 1000*60*60*24*365;
    console.log(ageDate/miliYear);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

console.log(getAge(person.birthday))

// console.log("Average age %i", list.reduce((sum, {
//     birthday
// }) => getAge(birthday) + sum, 0) / list.length);
