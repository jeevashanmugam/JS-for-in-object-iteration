
let person = {

    name: "jeeva",
    age: 22,
    gender: "male",
    conatct: "12345-06789"

}
document.write("Its returns Key : <br>")
for (let key in person) {

    document.write(key + " <br>");
}

document.write("<br> Its returns Value : <br> ")
for (let key in person) {

    document.write(person[key] + " <br>");
}


document.write("<br> Its returns both Key and Value : <br> ")
for (let key in person) {

    document.write(person[key] + " : " + key + " <br>");
}











