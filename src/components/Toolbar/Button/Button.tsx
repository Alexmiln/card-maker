import React from "react";
import styles from './Button.module.css'

interface ButtonProps {
    title: string,
    icon: string,
    onClick: () => void,
}

export function Button(props: ButtonProps) {
    return (
        <div className={styles.tool}
             onClick={props.onClick}
             title={props.title}
        >
            <img className={styles.icon} src={`/images/${props.icon}.svg`} />
        </div>
    )
}