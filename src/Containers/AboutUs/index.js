import React from "react";
import { Column, Row, Col, Container } from "react-bootstrap";
import Footer from "../../Components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <h1>About Us</h1>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <p className="strong">GLOBAL MACSPEC STOCK</p>
              <p>
                We stock just about every Apple Mac conceivable! Our range is
                extensive, to say the least. If you require the highest spec Mac
                Pro, whilst we fix your mac, we have a mac that will suit your
                needs. No hire is too big or too small, should you wish to hire
                40 Apple Macs or One Apple Mac, our vast range allows us to
                cater for everyone. Global Macspec specialises in the sales,
                repairs, servicing and maintenance of pre-owned Apple Mac
                computers. Our team of knowledgeable technicians are available
                to ensure our customers have an individual experience and to
                assist with your Apple Mac related queries. We pride ourselves
                on our customer service, which is taken very seriously and
                coincides with our key values of the following qualities.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="strong">Terms of Sale</p>
              <p>
                Global Macspec offer a 14 Days Non-Consumable Warranty unless
                otherwise agreed or stated within your invoice. This warranty
                does not include consumable items such as batteries, cd drives,
                hard drives, trackpads, keyboards and mice, due to wear and tear
                and personal usage. Warranty is void if the item(s) are further
                opened or repaired by any other computer company/technician or
                any warranty seals have been tampered with. Items that have been
                subject to any neglect or liquid damage void any warranty, this
                term is non-negotiable with any member of staff. We offer no
                software guarantee or support. We are not liable for technical
                advice given if software systems are not compatible with any
                personal additional hardware/software under any circumstances.
                Warranty does cover internal components such as Motherboards,
                USB/Headphone/Display/Ethernet/Thunderbolt/FireWire Ports,
                Speakers, LCD’s, Graphic Cards, Cameras, Fans, PSU, Wi-Fi
                Cards/Aerials, Ram Memory Slots which develop faults during your
                warranty period. We do not offer Cash or Card refunds under any
                circumstances. We do offer exchanges or a credit note to the
                value of your purchase. Please note online orders can take 5 – 7
                working days to be delivered or collected from store. To ensure
                you are entirely happy with your purchase, we are here to assist
                you find the best suited item (s), please feel free to call us
                if you require assistance.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="strong">Terms of repair</p>
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
                items. Pre-owned parts or motherboard issues repairs, which have
                been agreed to be serviced/repaired rather than replaced with
                brand new parts, to reduce the price of a repair have no
                guarantees. Brand new parts and logic board replacements will
                come with a 90-day guarantee. The 90-day repair guarantee is
                void if the item is opened or repaired by any other computer
                company/ technician or warranty seals have been removed, items
                have been subject to any neglect or liquid damage. This will be
                fully explained prior to any work being undertaken, as well as
                the signature upon this quote being confirmation that these
                terms have been read and understood. These types of repairs
                carry no guarantees. Please note repairs can take 7 – 10 working
                days. We offer a No Fix No Fee Service, if we are unable to
                repair for any reason, once a service repair has been agreed. We
                will then return to the customer in the exact condition
                received.{" "}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="strong">Delivery</p>
              <p>
                All our items are delivered by courier (DPD or DHL Express
                Delivery Services) or by post to the delivery address provided
                when you place your order. Once your order is confirmed, we will
                endeavour to deliver the goods within the delivery period that
                applies to the option you have chosen. UK (domestic) orders
                include free next working day delivery via DPD, a fully
                trackable service. We endeavour to dispatch orders placed on
                weekdays before 1PM on the same day.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
