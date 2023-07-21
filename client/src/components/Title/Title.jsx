import React from 'react';
import styles from './titleStyle.module.css';

export default function Title({ children }) {
  return (
    <div>
      <h1 className={styles.title}>
        {children}
      </h1>
    </div>
  );
}
