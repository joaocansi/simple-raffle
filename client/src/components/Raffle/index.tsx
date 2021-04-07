import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdWarning } from 'react-icons/md';

import copy from 'copy-to-clipboard';
import api from '../../service/api';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import { useHistory } from 'react-router-dom';

export interface Raffle {
  id: string;
  title: string;
  description: string;
  created_At: string;
  max: number;
  min: number;
  result: number[];
}

interface RaffleItem {
  id: string;
}

const RaffleComponent: React.FC<RaffleItem> = ({ id }) => {

  const [raffle, setRaffle] = useState<Raffle>();
  const history = useHistory();

  const [loading, setLoading] = useState(true);
 
  function findRaffleById() {
    api.get(`/raffle/${id}`).then(response => {
      setRaffle(response.data);
      setLoading(false);
    }).catch(err => {
      setLoading(false);
    })
  }

  useEffect(() => {
    findRaffleById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function copyToClipboard() {
    try {
      copy(`${document.URL}`);
      toast.success('Copied to clipboard!', {
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });
    } catch (error) {
      toast.error('The copy to clipboard function is not working. Try again later!', {
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });
    }
  }

  function goBack() {
    history.push('/');
  }

  if (loading) {
    return (
      <></>
    )
  }
  return (
    <>
      {raffle ? (
      
        <div className="raffle-container">
          <div className="raffle-content">
            <h2>Raffle result</h2>
            <p>Raffle Id: <span>{raffle.id}</span></p>
            <p>Created In: <span>{raffle.created_At}</span></p>
            <p className="raffle-text">{raffle.result.length} number(s) raffled between {raffle.min} and {raffle.max}:</p>
            <div className="raffle-results">
              {raffle.result.map(item => {
                return <span key={item} className="raffle-result">{item}</span>
              })}
            </div>
          </div>
          <hr />
          <div className="raffle-footer">
            <h3>Share now</h3>
            <div className="raffle-share-link">
              <input value={`${document.URL}`} type="text" disabled />
              <button onClick={copyToClipboard} className="raffle-copy-link">Copy</button>
            </div>
            <button onClick={goBack} className="raffle-new-raffle">
              Create new Riffle
            </button>
          </div>
        </div>

      ) : (

        <div className="title">
          <MdWarning className="title-icon" />
          <h2>Raffle not found</h2>
          <button onClick={goBack}>Back to Principal</button>
        </div>

      )}
    </>
  )

}

export default RaffleComponent;