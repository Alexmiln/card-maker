import React from 'react';
import styles from './Canvas.module.css'

interface CanvasProps {
        width: number,
        height: number
}


export function Canvas(props: CanvasProps) {
    return (
        <div className={styles.canvasWrapper}>
            <canvas className={styles.canvas} width={props.width} height={props.height}></canvas>
        </div>
    )

}