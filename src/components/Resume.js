import React from "react";
import { Container } from 'reactstrap';

const Resume = props => {
      return (
<>
<Container>
  <p dir="ltr">Ivan Popov</p>
    <p dir="ltr">
    LinkedIn:{" "}
    <a href="https://www.linkedin.com/in/popdev/">linkedin.com/in/popdev</a> |
    Github: <a href="https://github.com/iampopov">github.com/iampopov</a>
  </p>
  <p dir="ltr">
    Portfolio: <a href="https://iampopov.github.io/">iampopov.github.io/</a>
  </p>
  <br />
  <p dir="ltr">Summary</p>
  <p dir="ltr">
    Full Stack Web Developer with a background in Finance and Accounting and
    dedication to continuous learning and self-improvement. Effective at
    communication and critical thinking while developing logical and scalable
    applications. Known for the ability to work individually and in small teams
    on projects of various sizes.
  </p>
  <br />
  <p dir="ltr">Technical Skills</p>
  <p dir="ltr">Languages: JavaScript, HTML, CSS</p>
  <p dir="ltr">Libraries: React, jQuery, Bootstrap UI, Bulma UI</p>
  <p dir="ltr">Databases: MySQL, MongoDB</p>
  <p dir="ltr">Projects</p>
  <p dir="ltr">
    Front-end: Adventure Weather | Github:
    <a href="https://github.com/iampopov/adventureWearher">
      github.com/iampopov/adventureWearher
    </a>
    | Deployed Project:
    <a href="https://iampopov.github.io/adventureWearher/">
      iampopov.github.io/adventureWearher
    </a>
  </p>
  <ul>
    <li dir="ltr">
      <p dir="ltr">
        The application allows getting a weather forecast for trailheads,
        mountains, ski resorts and other points of interest for an outdoor
        person
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        Implemented location search API and storage in the Firebase
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        Tools used: jQuery, LocationIQ API, DarkSky API, Firebase and Skeleton
        UI
      </p>
    </li>
  </ul>
  <br />
  <p dir="ltr">
    Full-stack: IMS | Github:
    <a href="https://github.com/iampopov/charlesIvanGarrett">
      github.com/iampopov/charlesIvanGarrett
    </a>
    | Deployed Project:
    <a href="https://whispering-badlands-47825.herokuapp.com/">
      whispering-badlands-47825.herokuapp.com
    </a>
  </p>
  <ul>
    <li dir="ltr">
      <p dir="ltr">
        User can store, delete and update quantities of inventory on hand
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        The front end uses Handlebars.js for templating and Validate.js to
        ensure data entries are valid to be handled by Sequelize on the back end
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        Tools used: jQuery, Handlebars.js, Validate.js, Sequelize, and Bulma UI
      </p>
    </li>
  </ul>
  <br />
  <p dir="ltr">Experience</p>
  <p dir="ltr">Accountant 2010 – 2019</p>
  <p dir="ltr">Internal and Public Accounting Boston, MA</p>
  <ul>
      <li dir="ltr">Conducted audits, review and compilation engagements.</li>
      <li dir="ltr">Prepared individual and business tax returns. </li> 
      <li dir="ltr">Performed functions of the senior accountant in the $25M revenue fitness club.</li> 
      <li dir="ltr"> Passed CPA exam.</li>
  </ul>
  <p dir="ltr">Education</p>
  <p dir="ltr">
    Certificate in Full Stack Web Development: University of Denver, Denver, CO
  </p>
  <p dir="ltr">
    A 12-week full-time intensive program focused on gaining technical programming skills
    in HTML5, CSS3, Javascript, JQuery, Bootstrap, React, Node.js, MySQL, MongoDB,
    Express, Handelbars.js &amp; ReactJS.
  </p>
  <br />
  <p>
    Master of Science in Information Technology: University of Massachusetts,
    Boston, MA
  </p>
</Container>
</>
        
     );
  }


export default Resume;