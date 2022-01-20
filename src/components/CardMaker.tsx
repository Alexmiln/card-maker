import styles from './CardMaker.module.css'
import React from 'react';
import {TopPanel} from './TopPanel/TopPanel'
import {Toolbar} from './Toolbar/Toolbar'
import {Canvas} from './Canvas/Canvas'
import {Rightbar} from "./Rightbar/Rightbar";

// interface CardMakerProps {
//     width: string
// }

// function CardMaker(props: CardMakerProps) {
export default function CardMaker() {
  return (
      <div className={styles.cardMaker}>
          <TopPanel />
          <div className={styles.content}>
              <Toolbar />
              <Canvas width={800} height={600} />
              <Rightbar />
          </div>
      </div>
  );
}

