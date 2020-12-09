import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import APIservice from '../utils/service/APIservice';

const GetAll = () => {
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
          <h1 className='x-large'>Get all users</h1>
          <p className='lead'>Catch them all</p>
          <div className='buttons'>
            <Link
              to='GetAll'
              onClick={() => getDataFromBackend()}
              className='btn btn-primary'
            >
              Get them all!
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

export default GetAll;
