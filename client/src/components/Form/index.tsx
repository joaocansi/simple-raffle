import React, { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import api from '../../service/api';

import './styles.css';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

  const history = useHistory();

  const [max, setMax] = useState(100);
  const [min, setMin] = useState(1);
  const [amount, setAmount] = useState(2);

  function handleSubmit(e: FormEvent) {

    e.preventDefault();

    api.post('/raffle', {
      max, min, amount
    }).then(response => {
      history.push(`/?id=${response.data.id}`)
    }).catch(err => {
      toast.error(err.response.data.message, {
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    })
  }

  return (
    <div className="form-container">
      <h2>Create raffle</h2>
      <p>Fill the blanks and after, click on the button to randomly generate the raffle result numbers. </p>

      <form>
        <div className="input-block">
          <label htmlFor="amount">Raffle numbers amount: </label>
          <input min="1" value={amount} onChange={e => setAmount(Number(e.target.value))} type="number" name="amount" id="amount" />
        </div>

        <div className="input-block">
          <label htmlFor="min">Minimum number: </label>
          <input min="1" value={min} onChange={e => setMin(Number(e.target.value))} type="number" name="min" id="min" />
        </div>

        <div className="input-block">
          <label htmlFor="max">Maximum number: </label>
          <input min="1" value={max} onChange={e => setMax(Number(e.target.value))} type="number" name="max" id="max" />
        </div>

        <button onClick={handleSubmit} type="submit">
          Create raffle
        </button>
      </form>
    </div>
  )
}

export default Form;