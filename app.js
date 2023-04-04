// const getUser = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data);
// }


// async function displayUser(){

// }
// getUser() 

document.getElementById('show').addEventListener('click', onScreenJoke);

async function getJoke(){
    try{
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await res.json();
        return data;
        // console.log(data);
    } catch(err){
        console.log(err);
    }
}


async function displayJoke(){
    const joke = await getJoke();
    const jokeDisplayed = document.getElementById('joke_space');
    jokeDisplayed.innerText = joke.value;
    console.log(joke.value);
}


function onScreenJoke(e){
    displayJoke();
    e.preventDefault();
}
