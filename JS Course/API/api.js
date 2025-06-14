//****************** Fetch API ******************//


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => {
//     console.log(response);
    
//     return response.json();
// })
// .then((json) => console.log(json));




//********* */ How to performj simple GET request **************//

/*

( async () => {
    const fetchPostById = async (id) => {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
        
    }
};

console.log(await fetchPostById(1));
})();

*/



//************ For Creating New Post -> POST *************//

( async () => {
    
const newPost = {
    userId : 555,
    // id:555,
    title: "Hello , I am Abhi"
};


    const createPost = async (post) => {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts` ,
            {
                method: "POST",
                body : JSON.stringify(post),
                headers : {
                    "content-type": "application/json",
                },
            }
        );
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
        
    }
};

const createdPost = await createPost(newPost)

console.log(createdPost);




//************ PUT Request for update ************//


 const update1Post = async (id ,post) => {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}` ,
            {
                method: "PUT",
                body : JSON.stringify(post),
                headers : {
                    "content-type": "application/json",
                },
            }
        );
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
        
    }
};

const updatedPost = await update1Post(1 ,{
    userId:555,
    title:"Hello ,I am Abhi",
    body:"this is updated post "
});

console.log(updatedPost);


// difference between PUT & PATCH :- in PATCH it only changed the data which you want to change but in PUT it can change the data from the backend with the new data.





//************* delete *****************//


 const deletePost = async (id ) => {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}` ,
            {
                method: "DELETE",
            
            }
        );
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
        
    }
};

const deletedPost = await deletePost(1) 

console.log(deletedPost);

})();


