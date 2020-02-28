import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

const ProjectCard = props => {
      return (
          <div> 
            <Card style={{ width: '16rem' }}>
                <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
                </CardBody>
            </Card>
          </div>
        
     );
  }


export default ProjectCard;