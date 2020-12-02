import React from 'react';

import LeafEmpty from './assets/LeafEmpty.png';
import LeafFull from './assets/LeafFull.png';
import CircledLeafEmpty from './assets/CircledLeafEmpty.png';
import CircledLeafFull from './assets/CircledLeafFull.png';
import FlowerEmpty from './assets/FlowerEmpty.png';
import FlowerFull from './assets/FlowerFull.png';
import CircledFlowerEmpty from './assets/CircledFlowerEmpty.png';
import CircledFlowerFull from './assets/CircledFlowerFull.png';



function MistSymbol(props) {
  const { shape, filled, ring, ...styles } = props;
  let symbol = LeafEmpty;
  if (shape === "flower" && filled && !ring) symbol = FlowerFull
  else if (shape === "flower" && filled && ring) symbol = CircledFlowerFull;
  else if (shape === "flower" && !filled && !ring) symbol = FlowerEmpty;
  else if (shape === "flower" && !filled && ring) symbol = CircledFlowerEmpty;

  else if (shape === "leaf" && filled && !ring) symbol = LeafFull;
  else if (shape === "leaf" && filled && ring) symbol = CircledLeafFull;
  else if (shape === "leaf" && !filled && !ring) symbol = LeafEmpty;
  else if (shape === "leaf" && !filled && ring) symbol = CircledLeafEmpty;

  return (
    <img src={symbol} alt="mists_symbol" style={{ ...styles }} />
  );
}

export default MistSymbol;
