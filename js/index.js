import {h , render } from 'preact'

const App = ( props ) => { 

    return (
        <div class='text-2xl'>
            Hello World
        </div>
    )
}

const root = document.getElementById('app')
render(<App></App>,root)