import React, { useState } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./quote.scss";

const Quote = () => {
  let [alert, setAlert] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <div className="button-container terms">
            <Button variant="primary" onClick={handleShow}>
              Terms and Conditions
            </Button>

            <Modal
              size="xl"
              dialogClassName="modal-90w"
              show={show}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>Terms and Conditions</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>Terms of Sale</h3>
                <p>
                  Global Macspec offer a 14 Days Non-Consumable Warranty unless
                  otherwise agreed or stated within your invoice. This warranty
                  does not include consumable items such as batteries, cd
                  drives, hard drives, trackpads, keyboards and mice, due to
                  wear and tear and personal usage. Warranty is void if the
                  item(s) are further opened or repaired by any other computer
                  company/technician or any warranty seals have been tampered
                  with. Items that have been subject to any neglect or liquid
                  damage void any warranty, this term is non-negotiable with any
                  member of staff. We offer no software guarantee or support. We
                  are not liable for technical advice given if software systems
                  are not compatible with any personal additional
                  hardware/software under any circumstances. Warranty does cover
                  internal components such as Motherboards,
                  USB/Headphone/Display/Ethernet/Thunderbolt/FireWire Ports,
                  Speakers, LCD’s, Graphic Cards, Cameras, Fans, PSU, Wi-Fi
                  Cards/Aerials, Ram Memory Slots which develop faults during
                  your warranty period. We do not offer Cash or Card refunds
                  under any circumstances. We do offer exchanges or a credit
                  note to the value of your purchase. Please note online orders
                  can take 5 – 7 working days to be delivered or collected from
                  store. To ensure you are entirely happy with your purchase, we
                  are here to assist you find the best suited item (s), please
                  feel free to call us if you require assistance.
                </p>

                <h3>Terms of repair</h3>
                <p>
                  Please note that all quotes are made an assessment diagnosis
                  based on customer advice. Further technical investigation and
                  diagnostics tests may lead to change in prognosis, this can
                  result in the change of service cost. In such cases, we will
                  contact you to advise prior to any works being carried out. We
                  are not responsible or hold no liability by any means for any
                  lost files or customer data. Please ensure that you have a
                  backup of all your files, a backup of your Hard Drive can be
                  made in store upon request, at an additional cost. Please make
                  ensure your contact details are up to date. Global Macspec
                  offers no guarantee at all on water damaged repairs and has
                  limited liability for any faults that may occur after
                  service/repairs undertaken with vintage (5 years or older)
                  items. Pre-owned parts or motherboard issues repairs, which
                  have been agreed to be serviced/repaired rather than replaced
                  with brand new parts, to reduce the price of a repair have no
                  guarantees. Brand new parts and logic board replacements will
                  come with a 90-day guarantee. The 90-day repair guarantee is
                  void if the item is opened or repaired by any other computer
                  company/ technician or warranty seals have been removed, items
                  have been subject to any neglect or liquid damage. This will
                  be fully explained prior to any work being undertaken, as well
                  as the signature upon this quote being confirmation that these
                  terms have been read and understood. These types of repairs
                  carry no guarantees. Please note repairs can take 7 – 10
                  working days. We offer a No Fix No Fee Service, if we are
                  unable to repair for any reason, once a service repair has
                  been agreed. We will then return to the customer in the exact
                  condition received.{" "}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

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
