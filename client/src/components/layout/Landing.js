import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import APIservice from '../utils/service/APIservice';

const Landing = () => {
  const [data, setData] = useState([]);
  const getDataFromBackend = async () => {
    try {
      const response = await APIservice.getAllUsers();
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Hungry - Christmas edition</h1>
          <p className='lead'>What do you want to eat today?</p>
          <div className='buttons'>
            <Link to='register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='login' className='btn btn-light'>
              Login
            </Link>
            <Link
              to='Getall'
              onClick={() => getDataFromBackend()}
              className='btn btn-light'
            >
              Get data
            </Link>
            {data.map((x) => (
              <p classname='lead'>{x.username}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
