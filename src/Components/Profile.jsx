
import { Container, Box, SimpleGrid } from "@chakra-ui/react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import React from "react";
import pdf from "../resume/lokesh-choudhary-resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { saveAs } from 'file-saver';
const Profile = () => {
    const handleDownloadPDF = () => {
        console.log("Yes")
        saveAs(pdf, 'lokesh-choudhary-resume.pdf');
        const newWindow = window.open();
        newWindow.location.href = pdf;
    };
    return (
        <>
            <Container maxW="container.lg" id='about'>
                <h1 className="project-heading" style={{ color: ' #c110ef', paddingLeft: "39px", marginTop: "73px" }}>
                    <strong className="purple">About </strong>
                </h1>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 2 }} spacing={7} justifyContent="space-around" alignItems={'center'}>
                    <Col md={10} className="home-header" >
                        <h1 style={{ paddingBottom: 15, color: "black" }} className="heading" >
                            Hi There!{" "}
                            <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>

                        <h1 className="heading-name" style={{ color: "black" }}>
                            I'M
                            <strong className="main-name"> 𝐿𝑜𝓀𝑒𝓈𝒽 𝒞𝒽𝑜𝓊𝒹𝒽𝒶𝓇𝓎</strong>
                        </h1>
                        <h1 id ='user-detail-intro' style={{ color: "black", paddingLeft: "30px", paddingTop: '15px', fontWeight: '600' }}>
                        Experienced MERN developer and AI enthusiast with 1200+ coding hours, dedicated to pushing technological boundaries, building dynamic web applications, and delivering exceptional results in web development and AI integration.
                        </h1>

                        <Row style={{ justifyContent: "center", position: "relative", display: "flex", marginTop: "20px" }}>
                            <a id='resume-link-2' href={pdf} target="_blank" rel="noopener noreferrer" download>

                                <button variant="primary"
                                    href={pdf}
                                    target="_blank"
                                    style={{ maxWidth: "250px" }}
                                    class='resume-btn'
                                    id='resume-button-2'
                                    onClick={handleDownloadPDF}>
                                    <span style={{ display: "flex", alignItems: "center" }}> <AiOutlineDownload />

                                        &nbsp;Resume</span>
                                </button>



                            </a>
                        </Row>



                    </Col>
                    <Box p={4} className="splash-image pulse-ring" >
                        <img class="home-img" src="https://avatars.githubusercontent.com/u/112642820?v=4" alt="Lokesh Choudhary's Avatar" style={{ borderRadius: "23px" }} />
                    </Box>


                </SimpleGrid>

            </Container>
        </>
    )
}

export default Profile