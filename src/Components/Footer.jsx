import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Designed and Developed by 𝓝𝓲𝓴𝓲𝓽𝓱𝓪 𝓖𝓸𝓼𝔀𝓪𝓶𝓲</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>𝘾𝙤𝙥𝙮𝙧𝙞𝙜𝙝𝙩 &copy; {year} 𝓁𝒞</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/nikitha-goswami"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/nikitha-goswami-011ab92ba/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                       
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;