
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Login from './login/Login';
import Resister from './resister/Resister';
import About from './about/About';
import SubHome from './Home/SubHome';
import Orders from './orders/Orders';
import PrivetRouts from '../Routes/PrivetRouts';
import Profile from './profile/Profile';

const Root = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        children:[
            {
                path: '/',
                element:<SubHome></SubHome>
            },
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
            },
            {
                path:'/orders',
                element: <PrivetRouts><Orders></Orders></PrivetRouts>
            },
            {
                path:'/profile',
                element: <PrivetRouts><Profile></Profile></PrivetRouts>
            }
        ]
    }
])

export default Root;