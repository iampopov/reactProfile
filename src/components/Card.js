import React from "react";
import { Card, CardBody, CardTitle, CardText, CardLink } from 'reactstrap';
import { CardWrapper } from "../styles"

const ProjectCard = props => {
      return (

              <Card className="ml-1 mb-1" style={{ width: '16rem' }}>
                <CardBody>
               <CardTitle>{props.cardTitle}</CardTitle>
                
                <CardText>
                    {props.description}
                </CardText>
                <CardLink href={props.gitHubLink}>GitHub Link</CardLink>
                <CardLink href={props.homepage}>Deployed Project</CardLink>
                </CardBody>
            </Card>

     );
  }


export default ProjectCard;