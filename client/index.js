import React from 'react'
import ReactDOM from 'react-dom'

const app = document.querySelector('#app')

ReactDOM.render(
    <h1> Hello, from React!!!!!!</h1>,
    app,
    () => {
        console.log('Rendered!!!')
    }

)