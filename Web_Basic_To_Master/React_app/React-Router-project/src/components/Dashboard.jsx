import React from 'react';
import './Dashboard.css';
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    function handleclick() {
        navigate('/');
    }

    function courses() {
        navigate('courses');
    }

    function mocktest() {
        navigate('moke-test');
    }

    function reports() {
        navigate('reports');
    }


  return (
    <div>
      <h1>This is a Dashboard.</h1>
      <br />
      <Outlet />
      <br />
      <div class='button'>
      <button onClick={courses} >
        Courses
      </button>
      <button onClick={mocktest} >
        Mock-test
      </button>
      <button onClick={reports} >
        Reports
      </button>
      <button onClick={handleclick} >
        Home
      </button>
      </div>
    </div>
  )
}

export default Dashboard
