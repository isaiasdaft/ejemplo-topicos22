import React from "react";
import { Routes, Route } from "react-router-dom";
import First from "./First";
import Example from "./Example"; 
import NavBar from "./NavBar";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";


export default function App() {
    return(
        <div className="App">

        <BrowserRouter>
        <Routes>
            <Route path="/topicos22/public" element={<NavBar/>}>
            <Route index element={<Example/>}/>
            <Route path="example" element={<Example/>}/>
            <Route path="first" element={<First/>}/>
            </Route>
        </Routes>
        
        </BrowserRouter>
        </div>
    );  
}

if (document.getElementById('application')) {
    ReactDOM.render(<App/>, document.getElementById('application'));

}

