// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((resonse) => resonse.json())
// .then((json) => console.log(json));


// async & await 

async function getPosts() {
    try{
        const resonse = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resonse.json();
        console.log(data);
    } catch(error) {
        return new Error (error);
    }
}

getPosts();