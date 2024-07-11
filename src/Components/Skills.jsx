import React from 'react'
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiCss3, DiHtml5, DiGithubBadge,DiDjango
} from "react-icons/di";

import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,

    SiVercel,
    SiFirebase
} from "react-icons/si";
const Skills = () => {
    return (
        <>
            <div>
                <h1 className="project-heading" id='skills' style={{ color: ' #c110ef', paddingLeft: "39px", marginTop: "65px" }}>
                     <strong className="purple">Skills </strong>
                </h1>
                <Row style={{ display: "flex", justifyContent: "center", paddingBottom: "50px", flexWrap: 'wrap' }}>

                    <Col xs={4} md={2} className="tech-icons">
                        <DiHtml5 />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiJavascript1 />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiCss3 />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiNodejs />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiReact />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiMongodb />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiDjango />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <DiGit />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiFirebase />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiGithubBadge />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <img width={"60px"} src={'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png'} alt="" />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <img width={"60px"} src={'https://cdn-images-1.medium.com/v2/resize:fit:480/1*nP2C50GK4_-ly_R_mq3juQ.png'} alt="" />
                    </Col>

                </Row>

                <h1 className="project-heading" style={{ color: ' #c110ef', paddingLeft: "39px" }}>
                    <strong className="purple">Tools</strong> I use
                </h1>

                <Row style={{ display: "flex", justifyContent: "center", paddingBottom: "50px", flexWrap: 'wrap' }}>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiLinux />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiVisualstudiocode />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiPostman />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiVercel />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                       <img src='https://static-00.iconduck.com/assets.00/netlify-icon-512x512-p4tqk3ec.png' width={"60px"} alt='' />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQrNCdtZt8ZYkzZSLp8dn-EMPQYwjKsOxyJBSllye3Ht80Uo34i5LszZ7DkHYXTnDmw8&usqp=CAUhttps://static-00.iconduck.com/assets.00/netlify-icon-512x512-p4tqk3ec.png' width={"59px"} alt='' />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQ5rT6_uK9sbQg806wuIJZccCZBriFs0874CRWdfZFHKUBfpwLsExJLWlZs_6MZ2K6sY&usqp=CAU' width={"59px"} alt='' />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                       <img src='https://authy.com/wp-content/uploads/npm-logo.png' width={"59px"} alt='' />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                       <img style={{borderRadius:"50%"}}  src='https://w1.pngwing.com/pngs/798/531/png-transparent-react-logo-npm-javascript-package-manager-nodejs-github-installation-yarn.png' width={"59px"} alt='' />
                    </Col>

                </Row>
            </div>
        </>
    )
}

export default Skills