import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import "./About.css";
import {Link} from 'react-router-dom'
import img1 from "./assets/about-1.jpg";
import Navbar from '../../navbar/navbar/Navbar';
import Footer from '../footer';

const i300 =
  "data:image/webp;base64,UklGRroJAABXRUJQVlA4IK4JAACQPwCdASosAfoAPm02mEkkIyKiIZbYoIANiWlu4XYBGlnFPqvhZztrnde53c8bf1XtT/tn44ft72p/tb2x9VjJ30pf1Xkn+0/4v2Fftf9u8G/hp/I/k78AXsP/Lb3eAD81/qf+4/Mbzef670F8QD+M/0P/mcdr9Z/4PsBfzX+//97+++vL/o+Xf6N/83uI/zP+u/9X10vZcFBsxN0Hk6kBF1ICLqQECoqmSK4p9NWmupQE9Al+NrqUB6EaOBjqsqtNdSgPQjOkeP1KA9CNHGLN+hf9/pQHoRo4xHc6LsP99T5cBNVNdTywt56NoPW4trT7SB+HpsviXux3jRRJeq5+DkLAAx3JZjuaR17Ux7pGHbDWRPXdBn2tK4tBCi63AFyxs4WKOQtt8Q6rbJqCsN/SCp4J0gieo0xAmo1BpAcKG+AkBO+Zi8CZ7mpNu6DFNUgdIKVWy8l2uVmVVnaTlvPvcrzlCTD2+W7ZdDBRsl3yj9qDsanxBT5rbyXa5Xm2W8eTykdsQMJ5sJQxtZ1JM0SOyB36cDwekGlt8OTU+TedNhjOncdY8PFHFu4cUdrE0cYs72E4BmPFPvPQO9jWakqsHoSOjvY11D2eX+mrXcHoRo4GOqyq02Q1iaOMR3MrkK7ktVFFrzTb0bDsBCteaSW6kTohJ9Qdrm5FkY349qyZ7mV3G1AAAP72Grm/He5nSonVVLI7Vt26tjOzTvg2pAdGVag0lAAAAAkyNrZr1TLzPYmAYOQMWqL3zHoje+GTkbKvhUv5jlsnO2qxLi2Y/+eKyNBp99UANO+MNyaTbxyfSVH+F7x3uyI20CH7YIH8YSVx12KoOtGp1RgbDNKyvbqOi8/l6P8ILQuxE58TqV6ouMniATHOzlV/eNm8tCWmw/r85NsGaAPPaxcl7rDKHqG4gFFgAh95PO6WuzOZ8WVnCxqBbXOFhSmbd5Wls1rKQqWoZhl055N4W/tPny8XqePpS8WFdvec3vIKShC3px443XdAD8VWqD6S5mpsbQ1FtXQuw375klrqEveUg9AGGgWsdzhVZWZD4E3f3jZvQlwpuwJN0l7VIq3gNBcJX1I8mxTJ2JE1jS4twYcvAcufuotO7SgET8Ncd9hi5rzoSp+E1KW+DsVBX/yGFWqOh/RfR2ytCRPnyDZDZ1P+GblnJGwQm3s37wIC+7mCwGuyifHN5Mq4/ofqMRBWf6gATfmno0Lh6KbngK7p4E6CnjYIFA7egmT7JlfdnATebSsNPeUWW04f5Qo32NUtSNf026d/4aFytsNyiHecUTwegDySv+YQJTSCifG3tie1SelMEiZ7WKCzDSCKtScohs1pPng7gmS9/xZFM+Zt0yMqTA9kZ29SEcl9W3w82Z/ohrTgEENNhJm4slK7ZFxTKocHo/UUJW86c5Jyn1Yx16erGf4h0CDKbff2+nzh680ElbY5AZ4wIYDIA5TG47YM8pdb9tc2HrYOQRJSRVWGK3CHUIP5GA8t8EL6io4f0TOcPeiskUax8h5dlzrtU0hEJz5zG8L9Ulavq4XGAmJP4nA+LH/pTv84cPCRuH/Sdakp/XsM7HS83i9LOq/rO0GiMrMZoqzYrnu717Qhf3RUZOh3McRhKMpzvUCmKvfvVlR072Ns3ttoxnPU6aXo7j3pMXQ+0Xk69CRdozX2Q5jP48kNLn7F1hDokggpty3P1v61+qVYpOWLtnLwiHQuW044+UPZ17JZhl1hhm57S/aCeXBE2YGMjUO/I2l3tYK2vo0Uhimi4VPileECDetDGKHiaBO2Up2WDLvEnqe2pDXiee1IZcvXSapyTec0nIZ42nLh8NBKabqcAa1bAI+KFU0oNk6Q6TySbCbY8wWI12jQmjpesEpg0Bm6rrhhupL/HM4B8YE1BApVG3nRwQsILFvcBMRdQJ9WkAtDA3V5HOvq+JvWkNqYM4j/BwNtosfgXmZXd5YdV8WAEForXFdUDKn++OCDYUp64WBff9QLY2zxzWXjMW19aNAhtUGabSzjb0tmZW0lg6dgD790D3+w0Bk5M53WUd2MOYCjfClOkvztFKaTRlKG/snEqowdo6sYNbsS+RNtoOFy6O4vfTPZKtwopSRRF41Ty3aF89FMDAp4CihNkfWuBYnz+FFccMm7GyLd1mncjmlnTIwpjtyz6diJ7nPRIB4NB5oz/LqzIQo59bWWN98DAy1s07IrxjEHGY6Vpi2AqqIgCvdMSZLjlp0KzIieHLZN4vKpkmaOondVrE5WEx9vkAWK24B1V8cTtn1XEsbhFFo8tOD/ZLaLpWLl9icfl6nFaiiDNAyWP0s7/HYVpfvy4f+cS6YXWjFXgC8E5olPh25Xu2yTbNyZ7j/Kj85Ey0hwfBxOyv2cB+k2xT2COCmeTgZsaD+eKjP3PLT6UP6KDP2VI85Oj/M+05RUaH1rIPmIfTBwFXcwX/D1nSIJBh/wzbm3cWQc9cx6VBHKMgV2TED6xGMhb8xRdJUQguqgxtaYVbQkyxfpL3p8aBNXkdMOOjK0HjuXy0I0ivzwx0mOw3pj8KuBRCetMf7IFi0WoAFTzzu/ChZy509nmH85rfNbc6XcA+nGhAcSqvl3NgTmYYk8/QYwv1CbTtV0/9PLjzfouarNHdsz43PX7yzro3iENXTeYdiXkM2DymFzQ4MdFhgAPzMM9spxz5WGk2aCphYYmJONXxUO92zg+zJVB8NRe/3+SWiARUvXPOcKrBQQn/QDWpS2jFs+gwZG9dA2Mc16su7xp1DnRjRe0w79qRgDjiRBf0ns0gGI3Sx0OamoALTYsuLn5EPxdmMA7WKj/MbcSMrNTnbQSpmUxuSiuv0v7McTBvVOWSDG8KDUnlKcPZF8qW3lG7ZmlORdIqD9ns3PgUv2gSxIzxnr3Ia4b/iAdXkZzwHAr+F03uR2A4Av2lfEJGdJWDkQ8GePLxoVb8QWzttjifu4rF2D5ZdY9ZSOjLVIzYk0rOY95d+X1BPSHck4Htk3kpXRUwP3b3mD1jHQ3gZt5JGAG+wjhjZjlyRN3TSP4r5sV+ydbY8dgWfI6xEptnPZTyuseDnZCewtmhVmoh9RE7Lzuy6lxsNc+l7dxTqLfkBKCdRmlqkMvhXob7yXx02mz8qs77OznT/igok27w3N50IcEU//b5uIVmox1EgbrOCCZrHDK/87jt3wG3WVBePpozWdUMFUfcVIFpMYcS6Y5o744O+jgoGRL0jxxZM93foQCib0Bo1XBJob4kIXyH4cSMrME6dkmIJwgDygMPCDACeKAAT3v7tAAAAAAHf18wlp1K+gAJjOXQAAAAA=";

const About = () => {
  return (
    <div className="about">
      <div className='container'>
      <Navbar />
      </div>
      <Row className="container-fluid">
        <Col lg={12}>
          <Row className="index">
            <Col className="section1" sm={12}>
              <Breadcrumb>
                <Breadcrumb.Item> <Link to='/'>Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item active className="breadcrumb">
                  About Us
                </Breadcrumb.Item>
              </Breadcrumb>
              <h4>About Us</h4>
            </Col>{" "}
          </Row>
        </Col>
      </Row>
      <div className="aboutBody">
        <Row>
          <Col md={8} sm={12}>
            <Row>
              <Col className="section2" sm={12}>
                <Row>
                  {" "}
                  <p>
                    Lorem ipsum dolor sit amet, ea eos tibique expetendis,
                    tollit viderer ne nam. No ponderum accommodare eam, purto
                    nominavi cum ea, sit no dolores tractatos. Scripta principes
                    quaerendum ex has, ea mei omnes eruditi. Nec ex nulla
                    mandamus, quot omnesque mel et. Amet habemus ancillae id
                    eum, justo dignissim mei ea, vix ei tantas aliquid. Cu
                    laudem impetus conclusionemque nec, velit erant persius te
                    mel. Ut eum verterem perpetua scribentur.
                  </p>
                </Row>
                <Row>
                  <img id="A-pic1" src={img1} alt="...." />
                </Row>
                <Row>
                  <p>
                    Vix mollis admodum ei, vis legimus voluptatum ut, vis
                    reprimique efficiendi sadipscing ut. Eam ex animal
                    assueverit consectetuer, et nominati maluisset repudiare
                    nec. Rebum aperiam vis ne, ex summo aliquando dissentiunt
                    vim. Quo ut cibo docendi. Suscipit indoctum ne quo, ne solet
                    offendit hendrerit nec. Case malorum evertitur ei vel.
                  </p>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col md={4} sm={12} className="A-sidebar">
            <Row>
              <Col>
                <img src={i300} alt="..." />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Most Read</h4>
              </Col>
            </Row>
            <Row className="mt20">
              <Col xs={4} sm={4}>
                <img
                  src="https://preview.colorlib.com/theme/webmag/img/xwidget-1.jpg.pagespeed.ic.NYJjOYjv_V.webp"
                  alt="...."
                />
              </Col>

              <Col xs={8} sm={8}>
                <p>
                  Tell-A-Tool: Guide To Web Design And Development Tools
                </p>
              </Col>
            </Row>
            <Row className="mt20">
              <Col xs={4} sm={4}>
                <img
                  src="https://preview.colorlib.com/theme/webmag/img/xwidget-2.jpg.pagespeed.ic.cSUEAOhjjU.webp"
                  alt="...."
                />
              </Col>

              <Col xs={8} sm={8}>
                <p>
                  Tell-A-Tool: Guide To Web Design And Development Tools
                </p>
              </Col>
            </Row>
            <Row className="mt20">
              <Col xs={4} sm={4}>
                <img
                  src="https://preview.colorlib.com/theme/webmag/img/xwidget-3.jpg.pagespeed.ic.5z-SP7IbT6.webp"
                  alt="...."
                />
              </Col>

              <Col xs={8} sm={8}>
                <p>
                  Tell-A-Tool: Guide To Web Design And Development Tools
                </p>
              </Col>
            </Row>
            <Row className="mt20">
              <Col xs={4} sm={4}>
                <img
                  src="https://preview.colorlib.com/theme/webmag/img/xwidget-1.jpg.pagespeed.ic.NYJjOYjv_V.webp"
                  alt="...."
                />
              </Col>

              <Col xs={8} sm={8}>
                <p>
                  Tell-A-Tool: Guide To Web Design And Development Tools
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="about-f">
          <Col lg={4} md={6} sm={12}>
            <img
              src="https://preview.colorlib.com/theme/webmag/img/xabout-2.jpg.pagespeed.ic.iSWreSb1j3.webp"
              alt="img1"
            />
          </Col>
          <Col lg={4} md={6} sm={12} className="a-box1">
            <h5>Our Mission</h5>
            <p>
              Vix mollis admodum ei, vis legimus voluptatum ut, vis reprimique
              efficiendi sadipscing ut. Eam ex animal assueverit consectetuer,
              et nominat
            </p>
            <ul>
              <li> Vix mollis admodum ei, vis legimus voluptatum ut. </li>
              <li> Vix mollis admodum ei, vis legimus voluptatum </li>
              <li> Vix mollis admodum ei, vis legimus voluptatum</li>
            </ul>
          </Col>
          <Col lg={4} md={0} sm={0}></Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default About;
