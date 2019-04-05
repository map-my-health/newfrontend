import React from "react";
import styles from './contact.css'

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h1>List of Contacts</h1>
      <h2>Brita Hill</h2>
      <p>brita@mapmyhealth.com</p>
      <img src="brita.jpeg" alt="brita"/>
      <h2>Cindy Barrientos</h2>
      <p>cindy@mapmyhealth.com</p>
      <img src="cindy.png" alt="cindy"/>
      <h2>Dino Nguyen</h2>
      <p>dino@mapmyhealth.com</p>
      <img src="dino.jpeg" alt="dino"/>
      <h2>Dyanna Tolman</h2>
      <p>dyanna@mapmyhealth.com</p>
      <img src="dyanna.jpeg" alt="dyanna"/>
      <h2>Jennifer Hsiao</h2>
      <p>jennifer@mapmyhealth.com</p>
      <img src="jennifer.jpeg" alt="jennifer"/>
    </section>
  );
}