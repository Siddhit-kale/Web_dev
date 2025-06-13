import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Dashboard from './components/dashboard';
import Navbar from './components/Navbar';
import Param from './components/Param';
import Courses from './components/Courses';
import Moketest from './components/Moketest';
import Report from './components/Report';
import Notfound from './components/Notfound';

const router =  createBrowserRouter(
  [
    {
      path:"/",
      element:<div>
        <Navbar></Navbar>
        < Home />
      </div>
    },
    {
      path:"/about",
      element:<div>
        <Navbar />
        <About />
      </div>
    },
    {
      path:"/dashboard",
      element: <div>
        <Navbar />
        <Dashboard />
      </div>,
      children:[
        {
          path:"courses",
          element: <Courses />
        },
        {
          path:"moke-test",
          element: <Moketest />
        },
        {
          path:"reports",
          element: <Report />
        },
      ]
    },
    {
      path:"/studnet/:id",
      element: <div>
        <Navbar />
        <Param />
      </div>
    },

    {
      path:"*",
      element: <Notfound/>
    }

  ]
);

function App() {

  return (  <RouterProvider router={router} />  )
}

export default App
