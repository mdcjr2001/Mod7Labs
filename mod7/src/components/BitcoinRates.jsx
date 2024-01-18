import { useState, useEffect } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

const useBitcoinPrice = (currency) => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
        const data = await response.json();
        setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    };

    fetchBitcoinPrice();

    return () => {
    };
  }, [currency]);

  return bitcoinPrice;
};

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const bitcoinPrice = useBitcoinPrice(currency);

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {bitcoinPrice !== null ? (
        <p>
          Current Bitcoin Price in {currency}: {bitcoinPrice}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BitcoinRates;