import React, { useEffect } from 'react';
import styles from './Notification.module.css';

const Notification = (props) => {
  
  useEffect(() => {
    
  }, [])
  
  return (
    <div className={styles.notification}>
        <span className="Close">close</span>
        {props.children}
        <button className="Toggle" onClick={props.toggleNotification}>OK</button>
    </div>
  );
}

export default Notification;