import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./quote.scss";

const Quote = () => {
  let [alert, setAlert] = useState(false);

  const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_EMAIL_USER_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let templateParams = {
    //   name: "Nero - real test",
    //   email: "nero@nero.com",
    //   number: "07778788874",
    //   message: "hello world",
    // };

    // let resp = await emailjs.send(
    //   SERVICE_ID,
    //   TEMPLATE_ID,
    //   templateParams,
    //   USER_ID
    // );

    // if (resp.status === 200) {
    //   setAlert(true);
    // }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form className="form-container">
          <h3>Get in touch</h3>
          <Form.Group controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formBasicTelephoneNumber">
            <Form.Label>You telephone number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your telephone number"
              required
            />
          </Form.Group>

          <Form.Group controlId="formTellUsMoreTextarea">
            <Form.Label>Tell us more</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <div className="button-container">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </form>
      {alert && <Alert variant={"primary"}>Email sent!</Alert>}
    </>
  );
};

export default Quote;
