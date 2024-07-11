import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Label } from 'semantic-ui-react'

function ProjectCards(props) {
    // console.log(props.skills)
    const myArray = props.myArrayProp;

    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title className='project-title' >{props.title}</Card.Title>
                <Card.Text className='project-description' style={{ textAlign: "justify", color: "black" }}>
                    {props.description}
                </Card.Text>
                <div class='btns-project'>

                    <Button class="githubbtn" variant="primary" href={props.ghLink} target="_blank">
                        <BsGithub /> &nbsp;
                        {props.isBlog ? "Blog" : "GitHub"}
                    </Button>
                    {"\n"}
                    {"\n"}


                    {!props.isBlog && props.demoLink && (
                        <Button
                            variant="primary"
                            href={props.demoLink}
                            target="_blank"
                            style={{ marginLeft: "10px" }}
                        >
                            <CgWebsite /> &nbsp;
                            {"Demo"}
                        </Button>
                    )}

                </div>
                <div>

                    <p style={{ color: "black", display: "flex", gap: "12px", flexFlow: "warp" }} className='skills-card'>{

                        myArray && myArray.map((item, index) => (
                            <Label as='a' color='blue'>

                                {item}
                            </Label>
                        ))
                    }</p>
                </div>
            </Card.Body>
        </Card>
    );
}
export default ProjectCards;