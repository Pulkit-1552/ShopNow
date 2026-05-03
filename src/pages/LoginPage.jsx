import React from "react";

const LoginPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Login</h2>

        <input
          style={styles.input} placeholder="Enter Username"/>

        <input
          style={styles.input} placeholder="Enter Password" type="password"/>

        <button style={styles.button}>Login</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "250px",
  },
  input: {
    padding: "8px",
  },
  button: {
    padding: "8px",
    background: "#222",
    color: "#fff",
    border: "none",
  },
};

export default LoginPage;