import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/action/userAction';
import styles from './tableStyle.module.css';

export default function TableUser() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  // console.log('Table:', users);

  const handleDeleteUser = (userId) => {
    dispatch(removeUser(userId));
  };

  return (
    <div className={styles.tableUser}>
      <table>
        <thead>
          <tr>
            <th colSpan="4">Таблица с пользователями</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th colSpan="2">Email</th>
          </tr>
        </thead>
        <tbody className={styles.scroll}>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.secondName}</td>
              <td>{user.email}</td>
              <td>
                <button type="button" onClick={() => handleDeleteUser(user.id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
