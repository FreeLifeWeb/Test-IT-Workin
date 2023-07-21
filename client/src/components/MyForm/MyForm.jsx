import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/action/userAction';
import styles from './formStyle.module.css';

export default function MyForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
  });
  const [error, setError] = useState('');

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const { firstName, secondName, email } = formData;

    if (!firstName || !secondName || !email) {
      setError('Необходимо заполнить все поля! ');
    } else if (!validateEmail(email)) {
      setError('Не верный формат email!');
    } else {
      dispatch(getUser(formData));
      setFormData({
        firstName: '',
        secondName: '',
        email: '',
      });
      setError('');
    }
  };

  return (
    <div className={styles.myForm}>
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            placeholder="введите имя..."
          />
          <input
            name="secondName"
            value={formData.secondName}
            onChange={changeHandler}
            placeholder="введите фамилию..."
          />
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="введите email..."
          />
        </div>
        <button type="submit">Добавить</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
