import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';

const Form = ({ addItem }) => (
  <div className={styles.wrapper}>
    <h2>Add new twitter account</h2>
    <form className={styles.form} onSubmit={addItem}>
      <Input name='name' label='Name' maxLength={30} />
      <Input name='link' label='Twitter link' />
      <Input name='image' label='Image' />
      <Input name='description' label='Description' tag='textarea' />
      <button className={styles.button}>add new item</button>
    </form>
  </div>
);

export default Form;
