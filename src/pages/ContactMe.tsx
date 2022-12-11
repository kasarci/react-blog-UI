import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const ContactMe: React.FC = () => {
  return (
    <>
      <Typography variant='h2' style={{ textAlign: "center", padding:'2rem' }}>Contact Me</Typography>
      <form style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "500px",
        margin: "0 auto"
      }} noValidate autoComplete="off">
        <TextField
          style={{
            margin: "1rem",
            width: "100%",
          }}
          id="name"
          label="Name"
          margin="normal"
        />
        <TextField
          style={{
            margin: "1rem",
            width: "100%",
          }}
          id="email"
          label="Email"
          margin="normal"
        />
        <TextField
          style={{
            margin: "1rem",
            width: "100%",
          }}
          id="message"
          label="Message"
          multiline
          rows="4"
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          style={{
            margin: "1rem",
            width: "50%",
            height: '3.5rem'
          }}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default ContactMe;
