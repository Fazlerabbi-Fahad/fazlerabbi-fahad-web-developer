import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About/About";
import Skill from "../Pages/Skill/Skill/Skill";
import Projects from "../Pages/Projects/Projects/Projects";
import Contact from "../Pages/ContactUs/ContactUs/ContactUs";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/skills',
                element: <Skill></Skill>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }])

export default routes;