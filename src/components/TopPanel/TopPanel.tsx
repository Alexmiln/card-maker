import React, {useState, useEffect, useRef} from 'react';
import styles from './TopPanel.module.css';
import {Button} from '../frequent/Button/Button';
import {ModalWindow} from "../frequent/ModalWindow/ModalWindow";

export function TopPanel() {
    const modalRef = useRef<any>(null);
    const [modalActive, setModalActive] = useState(false);
    // useEffect(() => {
    //     const onClick = (e: Event) => modalRef.current.contains!(e.target) || console.log('клик вне компонента');
    //     document.addEventListener('click', onClick);
    //     return () => document.removeEventListener('click', onClick);
    // }, [
    // const [modalActive, setModalActive] = useState(false);

    // useEffect(() => {
    //     const pageClickEvent = (e: MouseEvent) => {
    //         console.log('clicked');
    //         if (modalRef.current !== null && !modalRef.current.contains(e.target)) {
    //             setModalActive(!modalActive);
    //         };
    //         if (modalActive) {
    //             window.addEventListener('click', pageClickEvent);
    //         }
    //
    //         return () => {
    //             window.removeEventListener('click', pageClickEvent);
    //         }
    //     };
    // }, [modalActive]);
    return (
      <div className={styles.top_panel} >
          <img className={styles.logo} src="/images/logo.svg" />
          <Button
              Ref={modalRef}
              title={'File'}
              context={'top-panel'}
              content={<ModalWindow active={modalActive} setActive={setModalActive} content={
                  <div>
                      <Button context={"top-panel__dropdown"} title={'New Card      '} onClick={() => console.log('POP-UP New Canvas')}/>
                      <Button context={"top-panel__dropdown"} title={'Upload image..'} onClick={() => console.log('POP-UP Upload')}/>
                      <Button context={"top-panel__dropdown"} title={'Save Card as..'} onClick={() => console.log('POP-UP Save As')}/>
                  </div>}/>}
              onClick={() => setModalActive(!modalActive)}
          />
          {/*<Button*/}
          {/*    title={'Edit'}*/}
          {/*    context={'top-panel'}*/}
          {/*    content={<ModalWindow active={modalActive} setActive={setModalActive} content={*/}
          {/*        <div>*/}
          {/*            <Button title={'Undo'} context={"top-panel__dropdown"} onClick={() => console.log('Undo func')}/>*/}
          {/*            <Button title={'Redo'} context={"top-panel__dropdown"} onClick={() => console.log('Redo func')}/>*/}
          {/*        </div>}/>}*/}
          {/*    onClick={() => setModalActive(!modalActive)}*/}
          {/*/>*/}
      </div>
    )
}