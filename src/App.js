import React, { useState, useEffect } from 'react';

import MistIcon from './MistIcon';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';

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

  return (
    <Box display="flex" flexDirection="column" p={4}>
      <Box display="flex" flexDirection="column" alignItems="center" width={400} m="auto" mb={5}>
        <Typography variant="h6" gutterBottom>{`Score: ${score}`}</Typography>
        {status === Status.CORRECT && <Alert severity="success">{Status.CORRECT.msg}</Alert>}
        {status === Status.WRONG && <Alert severity="error">{Status.WRONG.msg}</Alert>}
        {status === Status.DEFAULT && <Alert severity="info">{Status.DEFAULT.msg}</Alert>}
      </Box>
      <Grid container style={{ justifyContent: "space-around" }}>
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
      </Grid>
    </Box>
  );
}

export default App;
