import React, { useState, useEffect } from 'react';

import MistIcon from './MistIcon';
import MistSymbol from './MistSymbol';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';

import Symbol000 from './assets/000.PNG';
import Symbol001 from './assets/001.PNG';
import Symbol010 from './assets/010.PNG';
import Symbol011 from './assets/011.PNG';
import Symbol100 from './assets/100.PNG';
import Symbol101 from './assets/101.PNG';
import Symbol110 from './assets/110.PNG';
import Symbol111 from './assets/111.PNG';

import LeafEmpty from './assets/LeafEmpty.png';
import LeafFull from './assets/LeafFull.png';
import CircledLeafEmpty from './assets/CircledLeafEmpty.png';
import CircledLeafFull from './assets/CircledLeafFull.png';
import FlowerEmpty from './assets/FlowerEmpty.png';
import FlowerFull from './assets/FlowerFull.png';
import CircledFlowerEmpty from './assets/CircledFlowerEmpty.png';
import CircledFlowerFull from './assets/CircledFlowerFull.png';

// const symbols = [Symbol000, Symbol001, Symbol010, Symbol011, Symbol100, Symbol101, Symbol110, Symbol111];
const symbols = [LeafEmpty, LeafFull, CircledLeafEmpty, CircledLeafFull, FlowerEmpty, FlowerFull, CircledFlowerEmpty, CircledFlowerFull];

const combinations = [
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
      const random = combinations[Math.floor(Math.random() * combinations.length)];
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

const Status = {
  CORRECT: {
    msg: "Correct guess",
  },
  WRONG: {
    msg: "Wrong guess",
  },
  DEFAULT: {
    msg: "Find the odd one out!",
  },
}

function App() {
  const [randoms, setRandoms] = useState([]);
  const [score, setScore] = useState(0);
  const [correctIndex, setCorrectIndex] = useState(-1);
  const [show, setShow] = useState(-1);
  const [status, setStatus] = useState(Status.DEFAULT);

  useEffect(() => {
    const [newRandoms, newCorrectIndex] = generateRandoms();
    setRandoms(newRandoms);
    setCorrectIndex(newCorrectIndex);
  }, [score]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus(Status.DEFAULT);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [status]);

  const handleClick = (index) => {
    if (index === correctIndex) {
      setScore(score + 1);
      setStatus(Status.CORRECT);
    } else {
      setScore(0);
      setStatus(Status.WRONG);
    }
  }

  const padding = 4;
  return (
    <Box display="flex" flexDirection="column" p={padding} style={{ backgroundColor: "#1e1e1e" }}>
      <Box display="flex" flexDirection="row">
        {randoms.map((random, index) => (
          <Box
            key={index}
            display="flex"
            m="auto"
            width={1}
            height={1}
            minWidth={300}
            minHeight={300}
            borderRadius={"50%"}
            bgcolor={show !== index ? "#bbdefb" : "inherit"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setShow(index)}
            onMouseLeave={() => setShow(-1)}
            style={{ cursor: "pointer" }}
          >
            {/* <MistSymbol shape={random.shape} filled={random.filled} ring={random.ring}
              styles={{ margin: "auto", visibility: show === index ? "visible" : "hidden" }} /> */}

            {random.shape === "flower" && random.filled && !random.ring
              && <img src={FlowerFull} alt="FlowerFull" style={{ margin: "auto", visibility: show === index ? "visible" : "hidden" }} />}
            {random.shape === "flower" && random.filled && random.ring
              && <img src={CircledFlowerFull} alt="CircledFlowerFull" style={{ margin: "auto", visibility: show === index ? "visible" : "hidden" }} />}
            {random.shape === "flower" && !random.filled && random.ring
              && <img src={CircledFlowerEmpty} alt="CircledFlowerEmpty" style={{ margin: "auto", visibility: show === index ? "visible" : "hidden" }} />}
            {random.shape === "flower" && !random.filled && !random.ring
              && <img src={FlowerEmpty} alt="FlowerEmpty" style={{ margin: "auto", visibility: show === index ? "visible" : "hidden" }} />}

            {random.shape === "leaf" && random.filled && !random.ring
              && <img src={LeafFull} alt="LeafFull" style={{ margin: "auto", visibility: show === index ? "visible" : "hidden" }} />}
            {random.shape === "leaf" && random.filled && random.ring
              && <img src={CircledLeafFull} alt="CircledLeafFull" style={{ margin: "auto", visibility: show === index ? "visible" : "hidden" }} />}
            {random.shape === "leaf" && !random.filled && random.ring
              && <img src={CircledLeafEmpty} alt="CircledLeafEmpty" style={{ margin: "auto", visibility: show === index ? "visible" : "hidden" }} />}
            {random.shape === "leaf" && !random.filled && !random.ring
              && <img src={LeafEmpty} alt="LeafEmpty" style={{ margin: "auto", visibility: show === index ? "visible" : "hidden" }} />}

          </Box>
        ))}
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" width={400} m="auto" mb={5}>
        <Typography variant="h6" gutterBottom>{`Score: ${score}`}</Typography>
        {status === Status.CORRECT && <Alert severity="success">{Status.CORRECT.msg}</Alert>}
        {status === Status.WRONG && <Alert severity="error">{Status.WRONG.msg}</Alert>}
        {status === Status.DEFAULT && <Alert severity="info">{Status.DEFAULT.msg}</Alert>}
      </Box>
      {/* <Grid container style={{ justifyContent: "space-around" }}>
        {randoms.map((random, index) => (
          <Grid item key={index} style={{ textAlign: "center" }} >
            {show === index ? (
              <IconButton
                onClick={() => handleClick(index)}
                onMouseLeave={() => setShow(-1)}
              >
                <MistIcon shape={random.shape} filled={random.filled} ring={random.ring} />
              </IconButton>
            ) : (
                <IconButton
                  onMouseEnter={() => setShow(index)}
                >
                  <Box style={{ width: 120, height: 120, background: "#bbdefb", borderRadius: "50%" }}></Box>
                </IconButton>
              )
            }
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
}

export default App;
