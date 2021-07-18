import React, { useContext, useEffect, useState } from "react";
import { BasicContractContext } from "./../hardhat/SymfoniContext";

interface Props {}

export const Basic: React.FC<Props> = () => {
  const basicContract = useContext(BasicContractContext);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputNumber, setInputNumber] = useState("");
  useEffect(() => {
    console.log("Using Effect");
    const doAsync = async () => {
      console.log("Doing async");
      if (!basicContract.instance) return;
      console.log("BasicContract is deployed at ", basicContract.instance.address);
      setMessage(String(await basicContract.instance.getNumber()));
      console.log("Displayed number");
      setLoading(false);
    };
    doAsync();
  }, [basicContract]);

  const handleSetNumber = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!basicContract.instance) throw Error("BasicContract instance not ready");
    if (basicContract.instance) {
      setLoading(true);
      const tx = await basicContract.instance.setNumber(inputNumber);
      console.log("setNumber tx", tx);
      await tx.wait();
      console.log("Number now set. Getting number.");
      setMessage(String(await basicContract.instance.getNumber()));
      setLoading(false);
    }
  };


  return (
    <div>
      <p>{message}</p>
      <input onChange={(e) => setInputNumber(e.target.value)}></input>
      <button onClick={(e) => handleSetNumber(e)}>Set Number</button>
      {loading? <h2>loading...</h2>:null}

    </div>
  );
};
