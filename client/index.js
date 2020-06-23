import React from 'react'
import ReactDOM from 'react-dom'

const app = document.querySelector('#app')

const styles = {
    container:{
        backgroundColor:'pink'
    }
}

const Component = () => {
    return (
        <div id= "App" style={styles.container}>
            <h1>Hello, from React!!!</h1>
            <h2>Neat stuff. Oh boy.</h2>
            
            <h3>Needs some style now!</h3>
        </div>
    )
}

ReactDOM.render(
    //Should be able to style this compenent now with a framework.
    <Component></Component>,
    app,
    () => {
        console.log('Rendered!!!')
    }

)