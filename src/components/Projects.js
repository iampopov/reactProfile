import React from "react";
import { Jumbotron } from 'reactstrap';
import API from "../utils/API"
import ProjectCard from "./Card"

const cardData = () => {
  API.searchTerms()
    .then(res => console.log(res.data[0].homepage))
    .catch(err => console.log(err))
  
}

const Projects = props => {
    console.log(cardData());
    
    return (
    <>
    <Jumbotron>
      <h3 className="display-3">My Projects</h3>
      <hr className="my-2" />
      <ProjectCard />

      
    </Jumbotron>
  </>);
}

export default Projects;