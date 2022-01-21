import './App.css';
import { useState } from 'react'
import {getApplePrices, getOrangePrices} from './utils'

function App() {

  const [scannedItems, setScannedItems] = useState([]);
  const [appleOffer, setAppleOffer] = useState(false);
  const [orangeOffer, setOrangeOffer] = useState(false);

  const pricesInCents = {
    Apple: 60,
    Orange: 25,
  }

  const handleCheckout = () => {
    let total = 0;
    let apples = 0, oranges = 0;
    scannedItems.split(',').forEach(item => {
      if (item === 'Apple') apples++;
      if (item === 'Orange') oranges++;
    });

    total = (getApplePrices(apples, appleOffer) + getOrangePrices(oranges, orangeOffer)) / 100;


    alert('total : ' + total + '$');
  }


  return (
    <div className="">

      <label>"Buy one, get one free on Apple"</label>
      <input
        type="checkbox"
        checked={appleOffer}
        onChange={() => setAppleOffer(!appleOffer)}
      /> <br /> <br />
      <label>"3 for the price of 2 on Orange"</label>
      <input
        type="checkbox"
        checked={orangeOffer}
        onChange={() => setOrangeOffer(!orangeOffer)}
      />
      <br /> <br />
      <input value={scannedItems} onChange={(e) => { setScannedItems(e.target.value) }} ></input> &nbsp;

      <button onClick={handleCheckout}>Checkout</button>

    </div>
  );
}

export default App;
