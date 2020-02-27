import React from "react";
import { Jumbotron, Button } from 'reactstrap';

const About = props => {
    return (
    <div>
    <Jumbotron>
      <h3 className="display-3">About Me</h3>
      <hr className="my-2" />
      <p className="lead">Full Stack Web Developer holding a Master of Science in Information Technology from the University of Massachusetts - Boston, and a certificate from the Denver University Coding Bootcamp focusing on web development using the MERN stack.
        </p>
      <p className="lead">I enjoy both front end and back end development, especially when it comes to bringing pages to life using JavaScript, React.js or jQuery. I am also experienced in MongoDB, Node.js, MySQL, and Sequelize.
      </p>
      <p className="lead">As an effective communicator and critical thinker, I bring nine years of experience working in teams and individually on projects of various sizes. I leveraged these skills effectively to improve accounting and auditing practices. I am looking forward to transferring these skills into the development environment.
      </p>
      <p className="lead">I am an avid outdoorsman and I practices Leave No Trace whenever I hike, backpack or mountain bike. I am a member of the Burning Man Project as part of the Earth Guardians (the Leave No Trace volunteering team) who promotes sustainable practices and ensures the land the project occupies is in the same or a better state than how it was before.
      </p>
    </Jumbotron>
  </div>);
}

export default About;