import React from 'react';
import MyForm from '../MyForm/MyForm';
import TableUser from '../TableUser/TableUser';
import Title from '../Title/Title';
import styles from './mainStyle.module.css';

export default function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperItem}>
          <Title>
            User Management
          </Title>
        </div>
        <div className={styles.wrapperItem}>
          <MyForm />
        </div>
        <div className={styles.wrapperItem}>
          <TableUser />
        </div>
      </div>
    </div>

  );
}
