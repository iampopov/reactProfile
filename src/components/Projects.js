import React, {useState, useEffect} from "react";
import { Jumbotron } from 'reactstrap';
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
        <>
        {projects.map(item => (
          <ProjectCard
          cardTitle = {item.name} />
        ))} 
        </>
      ) : (<h3>No projects</h3>)}

      
    </Jumbotron>
  </>);
}

export default Projects;