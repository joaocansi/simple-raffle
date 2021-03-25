import React from 'react';
import Form from '../../components/Form';
import RaffleComponent from '../../components/Raffle';

import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './styles.css';

const Landing = () => {

  const queryParams = new URLSearchParams(useLocation().search);
  const id = queryParams.get('id');

  return (
    <div className="container">
      {id ? (
        <RaffleComponent id={id} />
      ) : (
        <Form />
      )}
      <ToastContainer />
    </div>
  );

}

export default Landing;