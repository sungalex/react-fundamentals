import { useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState("");

  const onChangeSelect = (event) => {
    setOptions(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        <strong>"Loading..."</strong>
      ) : (
        <select value={options} onChange={onChangeSelect}>
          {coins.map((coin, index) => (
            <option key={index} id={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      {/* 
        <ul>
          {coins.map((coin, index) => (
            <li key={index}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      */}
    </div>
  );
}

export default App;
