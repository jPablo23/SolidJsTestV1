/*import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

render(App, document.getElementById("root"));
*/

import {render} from 'solid-js/web'
import { createSignal } from 'solid-js'
import './index.css'

const App = () => {
const [getCounter, setCounter] = createSignal(5)
return (
        <>
            <h1>Nuestro contador</h1>
            <p>{getCounter ()}</p>
            <p>{getCounter() % 2 == 0 ? 'es par' : 'es impar'}</p>
            <button onClick={() => {
            setCounter(getCounter() + 1)}}>increment 
            </button>
        </>
        
        )

}

render(
    App,
    document.getElementById("app")
);