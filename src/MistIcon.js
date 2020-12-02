import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/styles';
import { ReactComponent as FlowerFull } from './assets/flower_full.svg';
import { ReactComponent as FlowerFullRing } from './assets/flower_full_ring.svg';
import { ReactComponent as FlowerOutline } from './assets/flower_outline.svg';
import { ReactComponent as FlowerOutlineRing } from './assets/flower_outline_ring.svg';

import { ReactComponent as LeafFull } from './assets/leaf_full.svg';
import { ReactComponent as LeafFullRing } from './assets/leaf_full_ring.svg';
import { ReactComponent as LeafOutline } from './assets/leaf_outline.svg';
import { ReactComponent as LeafOutlineRing } from './assets/leaf_outline_ring.svg';

import { ReactComponent as Symbol_000 } from './assets/000.PNG';


const useStyles = makeStyles({
  svg: {
    fontSize: '5em'
  },
});


function MistIcon(props) {
  const { shape, filled, ring } = props;
  const classes = useStyles();


  let icon = <FlowerFull />;
  if (shape === "flower" && filled && !ring) icon = <FlowerFull />;
  else if (shape === "flower" && filled && ring) icon = <FlowerFullRing />;
  else if (shape === "flower" && !filled && !ring) icon = <FlowerOutline />;
  else if (shape === "flower" && !filled && ring) icon = <FlowerOutlineRing />;

  else if (shape === "leaf" && filled && !ring) icon = <LeafFull />;
  else if (shape === "leaf" && filled && ring) icon = <LeafFullRing />;
  else if (shape === "leaf" && !filled && !ring) icon = <LeafOutline />;
  else if (shape === "leaf" && !filled && ring) icon = <LeafOutlineRing />;

  return (
    <SvgIcon viewBox="0 0 800 800" className={classes.svg}>
      {icon}
    </SvgIcon>
  );
}

export default MistIcon;
