import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { About, Admin, Home, NotFound, BikesOverview,ScootersOverview} from "./pages";
import {Add} from "./pages";
import {Navigation} from "./components";


function App() {


    return (
        <BrowserRouter>
            <Navigation/>
            <div id="container">
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/bike'} element={<BikesOverview/>}/>
                    <Route path={'/scooter'} element={<ScootersOverview/>}/>
                    <Route path={'/add'} element={<Add/>}/>
                    <Route path={'/Admin'} element={<Admin/>}/>
                    <Route path={'/About'} element={<About/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
