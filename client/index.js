import React from 'react'
import ReactDOM from 'react-dom'
//import axios functions and add them to buttons on click 

const app = document.querySelector('#app')

const styles = {
    container:{
        backgroundColor:'pink'
      
    }
}
    //take a state variable for the links?

    //make a function with the axios calls

    //use that function in the button that you render...


const SearchTagsForm = () => {
 
    function fetchTags(){
        const tags = input.val
        return fetch(tags)
            .then(function(response){
                return response.json()
            })
    }
    return (
        <div style={styles.container}>
        
            <input type="text" label="search"/> 
            <button >Search Tags</button>
             </div>
    )
}





const SearchLinksForm = () => {
    return (
        <div style={styles.container}>
            <input type="text" label="search"/> 
            <button >Search Links</button>
             </div>
    )
}




const SearchLinksResults = () => {
    return (
        <div id="App" style={styles.container}>
{/* THIS NEEDS TO RE RENDER BASED ON STATE CHANGING, WITH THE DATA FROM THE BUTTON CLICK */}
        </div>
    )
}

const SearchTagsResults = () => {
    return (
        <div id="App" style={styles.container}>
            {/* SAME HERE */}
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}




const App = () => {
    
    return (
        <div id= "App" style={styles.container}>
            <h1>Linkerator!</h1>
            <h2>Neat stuff. Oh boy.</h2>
            <SearchLinksForm></SearchLinksForm>
            <SearchLinksResults></SearchLinksResults>
            <SearchTagsForm></SearchTagsForm>
            <SearchTagsResults></SearchTagsResults>
            

            <h3>Needs some style now!</h3>
        </div>
    )
}



ReactDOM.render(
    <App></App>,
    app,
    () => {
        console.log('Rendered!!!')
    }

)


