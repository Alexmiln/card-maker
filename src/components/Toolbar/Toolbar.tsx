import React from 'react';
import styles from './Toolbar.module.css';
import {Button} from "./Button/Button";

export function Toolbar() {
    return (
        <div className={styles.toolbar} >
            <Button title={'Move tool'} icon={'move'} onClick={() => console.log('Move')} />
            <Button title={'Text tool'} icon={'text'} onClick={() => console.log('Text')} />
            <Button title={'Crop tool'} icon={'crop'} onClick={() => console.log('CROP THIS Sugar Honey Ise Tea')} />
            <div className={styles.figure}>
                <Button title={'Rectangle tool'} icon={'rectangle'} onClick={() => console.log('Rect')} />
                <Button title={'Triangle tool'} icon={'triangle'} onClick={() => console.log('Triangle')} />
                <Button title={'Elipse tool'} icon={'elipse'} onClick={() => console.log('Elipse')} />
            </div>
        </div>
    )
}