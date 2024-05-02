import axios from "axios";
import React, { useState } from "react";
import styles from "../../Pages/Register/Register.module.css";
const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const sendForm = () => {
    axios
      .post("https://northwind.vercel.app/api/categories", {
        name: name,
        surname: surname,
        email: email,
      })
      .then((res) => {
        console.log(res.data);
      });
    setName("");
    setSurname("");
    setEmail("");
  };

return (
  <div className={styles.sectionForum}>
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Contact Us</h1>
      </div>
      <div className={styles.names}>
        <div className={styles.full}>
          <h2>
            Full name <span className={styles.on}>*</span>
          </h2>
            <input
              type="text"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className={styles.label}>First</span>
        </div>
        <div className={styles.last}>
            <input
              type="text"
              placeholder=""
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <span className={styles.label}>Last</span>
        </div>
      </div>
      <div className={styles.mail}>
        <h2>
          Email <span className={styles.on}>*</span>
        </h2>
        <input
          type="text"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.words}>
        <h2>
          Leave us a few words <span className={styles.on}>*</span>
        </h2>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className={styles.submit}>
        <button onClick={sendForm}>Submit</button>
      </div>
    </div>
  </div>
);
}

export default Register;
