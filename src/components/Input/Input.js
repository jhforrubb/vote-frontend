import styles from "./input.module.css";
import { useState, useEffect } from "react";
import * as hkid from "hkid";

function Input() {
  const [str, setStr] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!hkid.validate(str)) {
      setError(true);
      setStr("");
      setSubmitted(false);
      return;
    }

    setStr(str);
    setSubmitted(true);
    setError(false);
    window.localStorage.setItem("voting_hkid", str);
  };

  useEffect(() => {
    const votingHkid = window.localStorage.getItem("voting_hkid");

    if (votingHkid && hkid.validate(votingHkid)) {
      setStr(votingHkid);
      setSubmitted(true);
    }
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.form_input}
        value={str}
        onChange={(event) => setStr(event.target.value)}
        placeholder="HKID"
        disabled={submitted}
        maxLength={8}
      />
      <button type="submit" disabled={submitted}>
        Submit
      </button>
      <h5 className={styles.form_text}>
        <span>YOUR HKID IS: {str}</span>
        {error && <span style={{ color: "red" }}>invalid hkid</span>}
      </h5>
    </form>
  );
}

export default Input;
