import React, { useState, useEffect } from 'react';

import MistIcon from './MistIcon';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const possible = [
  {
    shape: "flower",
    filled: true,
    ring: true,
  },
  {
    shape: "flower",
    filled: true,
    ring: false,
  },
  {
    shape: "flower",
    filled: false,
    ring: true,
  },
  {
    shape: "flower",
    filled: false,
    ring: false,
  },
  {
    shape: "leaf",
    filled: true,
    ring: true,
  },
  {
    shape: "leaf",
    filled: true,
    ring: false,
  },
  {
    shape: "leaf",
    filled: false,
    ring: true,
  },
  {
    shape: "leaf",
    filled: false,
    ring: false,
  },
];

const generateRandoms = () => {

    let randoms = [];
    let correctIndex = -1;

    while (correctIndex === -1) {
      let numFlowers = 0, numLeaves = 0;
      let numFilled = 0, numOutlined = 0; 
      let numRings = 0, numNoRings = 0;

      randoms = [];
      for (let i = 0; i < 4; i++) {
        const random = possible[Math.floor(Math.random() * possible.length)];
        randoms.push(random);

        if (random.shape === "flower") numFlowers++;
        else if (random.shape === "leaf") numLeaves++;
        
        if (random.filled) numFilled++;
        else numOutlined++;

        if (random.ring) numRings++;
        else numNoRings++;
      }

      if (numFlowers === 1 && numLeaves !== 1 
        && numFilled !== 1 && numOutlined !== 1
        && numRings !== 1 && numNoRings !== 1) 
        correctIndex = randoms.findIndex(random => random.shape === "flower");

      else if (numFlowers !== 1 && numLeaves === 1 
        && numFilled !== 1 && numOutlined !== 1
        && numRings !== 1 && numNoRings !== 1) 
        correctIndex = randoms.findIndex(random => random.shape === "leaf");

      else if (numFlowers !== 1 && numLeaves !== 1 
        && numFilled === 1 && numOutlined !== 1
        && numRings !== 1 && numNoRings !== 1) 
        correctIndex = randoms.findIndex(random => random.filled);

      else if (numFlowers !== 1 && numLeaves !== 1 
        && numFilled !== 1 && numOutlined === 1
        && numRings !== 1 && numNoRings !== 1) 
        correctIndex = randoms.findIndex(random => !random.filled);

      else if (numFlowers !== 1 && numLeaves !== 1 
        && numFilled !== 1 && numOutlined !== 1
        && numRings === 1 && numNoRings !== 1) 
        correctIndex = randoms.findIndex(random => random.ring);

      else if (numFlowers !== 1 && numLeaves !== 1 
        && numFilled !== 1 && numOutlined !== 1
        && numRings !== 1 && numNoRings === 1) 
        correctIndex = randoms.findIndex(random => !random.ring);
    }

    return [randoms, correctIndex]; 
}

function App() {
  const [randoms, setRandoms] = useState([]);
  const [score, setScore] = useState(0);
  const [correctIndex, setCorrectIndex] = useState(-1);

  useEffect(() => {
    const [newRandoms, newCorrectIndex] = generateRandoms();
    setRandoms(newRandoms);
    setCorrectIndex(newCorrectIndex);
  }, [score])

  const handleClick = (index) => {
    if (index === correctIndex) setScore(score + 1);
    else {
      alert("BAD");
      setScore(0);
    }
  }

  return (
    <div>
    <Box p={2}>
      {`Score: ${score}`} 
    </Box>
    <Grid container style={{justifyContent: "space-around"}}>
      {randoms.map((random, index) => (
        <Grid key={index} item style={{textAlign: "center"}}>
          <IconButton onClick={() => handleClick(index)} >
            <MistIcon shape={random.shape} filled={random.filled} ring={random.ring} />
          </IconButton>
        </Grid>
      ))}
    </Grid>
    </div>
  );
}

export default App;
