/*const app = () => {

    const res = await fetch('https://catfact.ninja/fact')

    const data = await res.json()

    console.log(data)

const promise = fetch("https://ghibliapi.herokuapp.com/people");

let h1 = '';

promise.then(res => {
return res.json()}).then(data => {
const names = data.map(person => person.name).join("\n");
data.forEach(person => { h1 =+ person.name});
console.log(names);



document.getElementById("div").innerHTML += h1

});

}

app()

*/


const app = () => {

    //Catfact

    const promise = fetch("https://catfact.ninja/fact");
    
    promise.then(res => {
    return res.json()}).then(data => {
    console.log(data.fact)

    const x = `<h1 id="x">${data.fact}</h1>` 
    document.getElementById("div").innerHTML = x

});

//Giphy

const key = "z2UhJqPUdq3CtZNlQ4BamWF77KSq5CPI"
const string = "cats"

const promises = fetch(`https://api.giphy.com/v1/gifs/random?q=${string}&api_key=${key}`);
    
promises.then(res => {
return res.json()}).then(data => {
console.log(data.data.images.original.url)
const img = `<img src="${data.data.images.original.url}"></img>`
document.getElementById("di").innerHTML = img

});

}


app()