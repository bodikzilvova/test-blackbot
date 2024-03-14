import React from "react";
import "./App.css";

function App() {
  const binanceWebSocketUrl = "wss://stream.binance.com:9443/ws/ethusdt@depth";

  const ws = new WebSocket(binanceWebSocketUrl);

  ws.onopen = () => {
    console.log("Connected to Binance WebSocket API");
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const { b, a } = data;

    const buyPrice = parseFloat(b[0][0]);
    console.log(buyPrice);
    const sellPrice = parseFloat(a[0][0]);
    console.log(sellPrice);
  };

  ws.onclose = () => {
    console.log("Disconnected from Binance WebSocket API");
  };

  ws.onerror = (error: Event) => {
    console.error("WebSocket error:", error);
  };

  return <>
  Render something
  </>;
}

export default App;
