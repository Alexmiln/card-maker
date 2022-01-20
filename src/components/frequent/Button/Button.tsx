import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    title: string,
    content?: JSX.Element,
    onClick: () => void,
    context: 'top-panel' | 'toolbar' | 'top-panel__dropdown' | 'popup',
    Ref?: React.LegacyRef<HTMLDivElement> | undefined
}
export function Button(props: ButtonProps) {
    return (
        <div
            className={styles.button + ' ' + styles[props.context]}
            onClick={props.onClick}
            ref={props.Ref}
            unselectable={'on'}
        >
            <span className={styles.button__title + ' ' + styles[props.context]} unselectable={'on'}>{props.title}</span>
            {props.content}
        </div>)
}