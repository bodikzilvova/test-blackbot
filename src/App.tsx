import React, { useEffect, useState } from "react";
import "./App.css";
import EthInput from "./components/EthInput/EthInput";
import ActionSelect from "./components/ActionSelect/ActionSelect";
import ResultInput from "./components/ResultInput/ResultInput";

function App() {
  const [ethAmount, setEthAmount] = useState("");
  const [action, setAction] = useState("");
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);

  useEffect(() => {
    const binanceWebSocketUrl =
      "wss://stream.binance.com:9443/ws/ethusdt@depth";

    const ws = new WebSocket(binanceWebSocketUrl);

    ws.onopen = () => {
      console.log("Connected to Binance WebSocket API");
    };

    ws.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      const { b, a } = data;

      const buyPrice = parseFloat(b[0][0]);
      setBuyPrice(buyPrice);
      console.log(buyPrice);
      const sellPrice = parseFloat(a[0][0]);
      setSellPrice(sellPrice);
      console.log(sellPrice);
    };

    ws.onclose = () => {
      console.log("Disconnected from Binance WebSocket API");
    };

    ws.onerror = (error: Event) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleEthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEthAmount(event.target.value);
  };

  const handleActionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAction(event.target.value);
  };

  return (
    <div className="App">
      Render something
      <EthInput value={ethAmount} onChange={handleEthChange} />
      <ActionSelect onChange={handleActionChange} />
      <ResultInput
        ethAmount={ethAmount}
        action={action}
        buyPrice={buyPrice}
        sellPrice={sellPrice}
      />
    </div>
  );
}

export default App;
