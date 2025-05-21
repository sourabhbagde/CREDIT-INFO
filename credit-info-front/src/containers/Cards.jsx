import React from 'react';
import '../assets/styles/Cards.css';
import { MYCARDS } from '../utils/constants.js';
const AddCard = () => {
  return (
    <>
      <div className="container">
        <div className="add-card">
          <h1>Add Card</h1>
          <form>
            <label>
              <input
                type="text"
                placeholder="Card Name"
                name="cardname"
              ></input>
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="my-card">
          <h1>{MYCARDS}</h1>
        </div>
      </div>
    </>
  );
};

export default AddCard;
