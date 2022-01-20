import React from 'react';
import styles from './ModalWindow.module.css'

interface ModalWindowProps {
    active: boolean,
    setActive: (value:boolean) => void,
    content: JSX.Element
}

export function ModalWindow(props: ModalWindowProps) {
    return (
        <div className={props.active ? styles.modal + styles.active : styles.modal} onClick={() => props.setActive(false)}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                {props.content}
            </div>
        </div>
    )
}