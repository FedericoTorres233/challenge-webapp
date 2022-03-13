import React, { useState } from "react";
import { getOwnBalance } from "./Web3Client";
import classes from "./App.module.css";

const Home = () => {
  const [pool, setPool] = useState(0);

  const handleRefresh = () => {
    getOwnBalance()
      .then((balance) => {
        setPool(balance);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className={classes.title}>Welcome to ETHPool</h1>
      <div className={classes.pool}>
        <h1>Pool: {pool}</h1>
      </div>
      <button onClick={handleRefresh}>Refresh</button>
    </>
  );
};

export default Home;
