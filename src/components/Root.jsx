
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Login from './login/Login';
import Resister from './resister/Resister';
import About from './about/About';

const Root = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/resister',
                element:<Resister></Resister>
            },
            {
                path:'/about',
                element:<About></About>
            }
        ]
    }
])

export default Root;