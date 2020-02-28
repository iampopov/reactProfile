import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

const ProjectCard = props => {
      return (
            <Card style={{ width: '16rem' }}>
                <CardBody>
               <CardTitle>{props.cardTitle}</CardTitle>
                <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
                </CardBody>
            </Card>
        
     );
  }


export default ProjectCard;