import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const Quote = () => {
  const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_EMAIL_USER_ID;

  const handleSubmit = () => {
    console.log("am i callend");
    let templateParams = {
      name: "Nero - real test",
      email: "nero@nero.com- real test",
      number: "07778788874- real test",
      message: "hello world- real test",
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Form>
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </form>
  );
};

export default Quote;
