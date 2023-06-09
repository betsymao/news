import styles from './Form.module.scss';

function Form(props) {
  return (
    <form className={styles.form}>
    <label>Name:</label>
    <input type="text" placeholder="Enter your name"></input>
    <label>Email:</label>
    <input type="email" placeholder="Enter your email"></input>
    <label>Message:</label>
    <textarea placeholder="Enter your message"></textarea>
    <button>Submit</button>
  </form>
  );
}

export default Form;