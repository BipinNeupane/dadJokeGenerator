const joke = document.getElementById("joke");
const nextBtn = document.getElementById("button");




nextBtn.addEventListener('click',getJoke)


// creating an async function to fetch api

async function getJoke(){
    const fetchJoke = await fetch('https://icanhazdadjoke.com/',{
        headers: {
            'Accept' : 'application/json'
        }
    });
    // converting fetched joke to json
    const convertFetched = await fetchJoke.json();
    console.log(convertFetched);
    joke.innerHTML = convertFetched.joke;
    
};



// async function generateJoke(){
// 	const jokeRes = await fetch('https://icanhazdadjoke.com/', {
// 		headers: {
// 			'Accept': 'application/json'
// 		}
// 	});
// 	const joke = await jokeRes.json();
// 	console.log(joke);  
// 	jokeEl.innerHTML = joke.joke;

// }
