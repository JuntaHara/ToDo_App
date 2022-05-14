import React from 'react';
import styles from '../styles/colorTile.module.scss'

function ColorTile(props) {
  return <div className={styles.wrap} style={{ backgroundColor: `${props.color}`}} />;
};

export default ColorTile;
