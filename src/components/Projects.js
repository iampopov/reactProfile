import React, {useState, useEffect} from "react";
import { Jumbotron, Row } from 'reactstrap';
import API from "../utils/API"
import ProjectCard from "./Card"

const Projects = props => {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    API.searchTerms()
      .then(res => {
        const renderingProjects = res.data.filter(item => item.homepage);
        setProjects(renderingProjects)
      })
      .catch(err => console.log(err))
  
  }, [])
  
    return (
    <>
    <Jumbotron>
      <h3 className="display-3">My Projects</h3>
      <hr className="my-2" />
      {projects.length ? (
        <Row>
        {projects.map(item => (
          <ProjectCard
          key = {item.node_id}
          cardTitle = {item.name}
          homepage = {item.homepage}
          gitHubLink = {item.html_url}
          description = {item.description} />
        ))} 
        </Row>
      ) : (<h3>No projects</h3>)}

      
    </Jumbotron>
  </>);
}

export default Projects;