import React, { useState, useEffect } from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import MistSymbol from './MistSymbol';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';

import LeafEmpty from './assets/LeafEmpty.png';
import LeafFull from './assets/LeafFull.png';
import CircledLeafEmpty from './assets/CircledLeafEmpty.png';
import CircledLeafFull from './assets/CircledLeafFull.png';
import FlowerEmpty from './assets/FlowerEmpty.png';
import FlowerFull from './assets/FlowerFull.png';
import CircledFlowerEmpty from './assets/CircledFlowerEmpty.png';
import CircledFlowerFull from './assets/CircledFlowerFull.png';

const symbolMap = {
  // [flower?, full?, ring?]
  "0,0,0": LeafEmpty,
  "0,1,0": LeafFull,
  "0,0,1": CircledLeafEmpty,
  "0,1,1": CircledLeafFull,
  "1,0,0": FlowerEmpty,
  "1,1,0": FlowerFull,
  "1,0,1": CircledFlowerEmpty,
  "1,1,1": CircledFlowerFull,
};

function k_combinations(set, k) {
  let i, j, combs, head, tailcombs;

  if (k > set.length || k <= 0) {
    return [];
  }

  // K-sized set has only one K-sized subset.
  if (k === set.length) {
    return [set];
  }

  // There is N 1-sized subsets in a N-sized set.
  if (k === 1) {
    combs = [];
    for (let i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }

  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    head = set.slice(i, i + 1);
    tailcombs = k_combinations(set.slice(i + 1), k - 1);
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

let validCombinations = [];
k_combinations(Object.keys(symbolMap), 4).forEach(combGroup => {
  const combSet = combGroup.map(comb => comb.split(",").map(attrStr => Number(attrStr)));
  let candidateIndex = -1;
  let candidates = 0;
  for (let attrIndex = 0; attrIndex < combSet[0].length; attrIndex++) {
    const attrCol = combSet.map(comb => comb[attrIndex]);
    const attrSum = attrCol.reduce((sum, attrVal) => sum + attrVal, 0);
    if (attrSum === 1) {
      // find the index that has 1 as attrVal
      candidateIndex = attrCol.findIndex(attrVal => attrVal === 1);
      candidates++;
    } else if (attrSum === attrCol.length - 1) {
      // find the index that has 0 as attrVal
      candidateIndex = attrCol.findIndex(attrVal => attrVal === 0);
      candidates++;
    }
  }

  if (candidates === 1 && candidateIndex !== -1) {
    validCombinations.push({
      combination: combSet.map(comb => ({ data: comb, img: symbolMap[comb] })),
      uniqueIndex: candidateIndex,
    });
  }
});

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

const useStyles = makeStyles((theme) => ({
  img: {
    margin: "auto",
    maxWidth: "100%",
  },
  symbolContainer: {
    display: "flex",
    width: 300,
    height: 300,
    minWidth: 300,
    minHeight: 300,
    borderRadius: "50%",
    cursor: "pointer",
  },
  score: {
    color: "#dedede",
  }
}));

function App() {
  const classes = useStyles();
  const [randomCombinationSet, setRandomCombinationSet] = useState();
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(-1);
  const [status, setStatus] = useState(Status.DEFAULT);

  useEffect(() => {
    setRandomCombinationSet(validCombinations[Math.floor(Math.random() * validCombinations.length)]);
  }, [score]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus(Status.DEFAULT);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [status]);

  const handleClick = (index) => {
    if (index === randomCombinationSet.uniqueIndex) {
      setScore(score + 1);
      setStatus(Status.CORRECT);
    } else {
      setScore(0);
      setStatus(Status.WRONG);
    }
  }

  return (
    <Box display="flex" flexDirection="column" p={4} style={{ backgroundColor: "#1e1e1e" }}>
      <Grid container spacing={3} justify="center">
        {randomCombinationSet && randomCombinationSet.combination.map((symbol, index) => (
          <Grid item key={index}>
            <Box className={classes.symbolContainer}
              bgcolor={show !== index ? "#bbdefb" : "inherit"}
              onClick={() => handleClick(index)}
              onMouseEnter={() => setShow(index)}
              onMouseLeave={() => setShow(-1)}
            >
              <MistSymbol src={symbol.img} className={classes.img} hidden={show !== index} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" flexDirection="column" alignItems="center" width={400} m="auto" mb={5}>
        <Typography variant="h6" gutterBottom>{`Score: ${score}`}</Typography>
        {status === Status.CORRECT && <Alert severity="success">{Status.CORRECT.msg}</Alert>}
        {status === Status.WRONG && <Alert severity="error">{Status.WRONG.msg}</Alert>}
        {status === Status.DEFAULT && <Alert severity="info">{Status.DEFAULT.msg}</Alert>}
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" color="#f2f2f2">
        <Typography className={classes.score} variant="h4">{`Score: ${score}`}</Typography>
      </Box>
    </Box>
  );
}

export default App;
