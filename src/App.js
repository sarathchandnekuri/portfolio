import React, { useEffect, useState } from "react";
import { Route, Switch,useLocation } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Resume from "./pages/resume";
import NavBar from "./components/navbar";
import GoToTop from "./components/gototop";
import Project1 from "./pages/project1";
import Project2 from "./pages/project2";
import Project3 from "./pages/project3";
import Contact from "./pages/contact";
import Preloader from "./pages/preloader";
import CursorFollower from "./components/cursorFollower";
import { AnimatePresence } from 'framer-motion';


function App() {
    
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },4000)
    },[])

    return (  

        <div className="container">
            {
                loading ? (<Preloader loading={loading} />)

                :
(
                <div>
                <CursorFollower/>
                <NavBar/>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path = "/" component={Home}/>
                        <Route exact path = "/about" component={About}/>
                        <Route exact path = "/resume" component={Resume}/>
                        <Route exact path = "/contact" component={Contact}/>
                        <Route exact path = "/project1" component={Project1} />
                        <Route exact path = "/project2" component={Project2} />
                        <Route exact path = "/project3" component={Project3} />
                    </Switch>
                </AnimatePresence>   
                <GoToTop/>
                </div>)
            }
            
        </div>

        
    );
}

export default App;