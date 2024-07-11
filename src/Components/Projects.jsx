import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCard";
import { Label } from 'semantic-ui-react'

function Projects() {
    const myArray = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chakra UI']
    const myArray2 = ['HTML', 'CSS', 'JavaScript']
    return (
        <Container fluid className="project-section" id='projects'>

            <Container>
                <h1 className="project-heading" style={{ color: ' #c110ef', paddingLeft: "39px" }}>
                    My<strong className="purple"> Projects </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <div className="projectsdata">
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={'https://camo.githubusercontent.com/b87006215dc9e036dae18178b702551da7b1181affaad80a334ddfa4616bfa58/68747470733a2f2f692e706f7374696d672e63632f4a305930586d66432f53637265656e73686f742d313934302e706e67'}
                                isBlog={false}
                                title="Lenskart"
                                description="Developed a full-stack web application using React.js, Node.js, Express.js, and MongoDB."
                                ghLink="https://github.com/RutuvikP/ClearDekho-Lenskart-Clone"
                                demoLink="https://cleardekho-rutuvikp.vercel.app/"
                                skills={['HTML', 'CSS', 'JavaScript']}
                                myArrayProp={myArray}

                            />
                        </Col>

                    </Row>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={'https://themeforest.img.customer.envatousercontent.com/files/330747686/Previews/01_Analytics.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=27a9bfe3e41060a005fb9bf5232149fa'}
                                isBlog={false}
                                title="Solution.com"
                                description="Boost your team’s alignment, efficiency, and productivity by customizing any workflow to fit your needs."
                                ghLink="https://github.com/lokeshchoudharyprogrammer/superficial-point-8316"
                                demoLink="https://unrivaled-tulumba-195798.netlify.app/"
                                myArrayProp={myArray2}
                            />
                        </Col>

                    </Row>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={'https://img.freepik.com/free-vector/business-hand-drawn-e-commerce-landing-page_23-2149600513.jpg'}
                                isBlog={false}
                                title="Zimika E-commerce "
                                description="E-commerce is the buying and selling of goods and services online.."
                                ghLink="https://github.com/lokeshchoudharyprogrammer/ecommerce-app"
                                demoLink="https://unrivaled-tulumba-195798.netlify.app/"
                                myArrayProp={myArray}
                            />
                        </Col>

                    </Row>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={'https://img.freepik.com/free-vector/business-hand-drawn-e-commerce-landing-page_23-2149600513.jpg'}
                                isBlog={false}
                                title="Zimika E-commerce "
                                description="AI ERA: Empowering e-commerce with AI tools for data extraction, validation, conversion, manipulation, security, image processing, smart generation, and standard data management."
                                ghLink="https://github.com/lokeshchoudharyprogrammer/ecommerce-app"
                                demoLink="https://unrivaled-tulumba-195798.netlify.app/"
                                myArrayProp={myArray}
                            />
                        </Col>

                    </Row>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={'https://camo.githubusercontent.com/76c562e2c3b1559dd40eb41723210165de31ef9cce213da2fb50d1c7a5a2de3e/68747470733a2f2f692e6962622e636f2f726378565648432f63616c6c6170702e706e67'}
                                isBlog={false}
                                title="Infinity Call"
                                description="Introducing our innovative video call app, seamlessly connecting users through high-quality video and audio communication. Enjoy group calls, screen sharing, and secure conversations, redefining virtual interactions for both personal and professional use."
                                ghLink="https://github.com/lokeshchoudharyprogrammer/zoom-clone-app"
                                demoLink="https://callingapp.vercel.app/"
                                myArrayProp={['React','Node.js', 'Zegocloud','FireBase']}
                            />
                        </Col>

                    </Row>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={'https://lokeshchoudhary.gallerycdn.vsassets.io/extensions/lokeshchoudhary/grammar-correction-open-ai/0.1.7/1694601849434/Microsoft.VisualStudio.Services.Icons.Default'}
                                isBlog={false}
                                title="Grammar correction Open AI"
                                description="Visual Studio Code extension allows you to correct grammar and improve your writing using the OpenAI API."
                                ghLink="https://github.com/lokeshchoudharyprogrammer/Grammar-Correction-VSCode-Extension"
                                demoLink="https://marketplace.visualstudio.com/items?itemName=LokeshChoudhary.grammar-correction-open-ai"
                                myArrayProp={['React','OpenAI','VS Code API']}
                            />
                        </Col>

                    </Row>
                </div>
            </Container>
        </Container>
    );
}

export default Projects;