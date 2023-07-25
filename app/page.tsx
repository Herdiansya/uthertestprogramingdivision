"use client";
import { useState } from "react";
import "./globals.css";
import Image from "next/image";
import utherLogo from "../public/uther.png";

const LongestWordApp = () => {
  const [sentence, setSentence] = useState("");
  const [longestWord, setLongestWord] = useState("");

  const findLongestWord = () => {
    const words = sentence.split(" ");
    let longest = "";
    words.forEach((word) => {
      if (word.length > longest.length) {
        longest = word;
      }
    });
    setLongestWord(longest);
  };

  return (
    <div>
      <Image src={utherLogo} width={200} height={200} alt="Uther Logo" className=" absolute top-2 left-3" />
      <h1 className=" text-center text-8xl text-white mt-20">Uther Test</h1>
      <div className=" w-auto flex justify-around mt-20 overflow-hidden">
        <input className=" bg-white bg-opacity-20 backdrop-blur-lg w-2/5 rounded-lg p-3 " type="text" value={sentence} onChange={(e) => setSentence(e.target.value)} placeholder="Enter a sentence..." />
        <button className=" bg-white bg-opacity-20 backdrop-blur-lg hover:bg-white w-2/5 rounded-lg" onClick={findLongestWord}>
          Find Longest Word
        </button>
      </div>
      <div className=" bg-white bg-opacity-20 backdrop-blur-lg w-2/4  h-20 ml-80 mt-20">{longestWord && <p className=" pt-7 text-center ">The longest word is : {longestWord}</p>}</div>
      <footer className=" text-center mt-20">
        Create By Herdiansyah With <i className="fa-solid fa-heart text-red-600"></i>
      </footer>
    </div>
  );
};

export default LongestWordApp;
