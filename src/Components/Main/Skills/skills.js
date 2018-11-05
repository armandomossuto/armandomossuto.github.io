import  React from 'react';

const Skills = () =>
  <div className="skillspage">
    <h2> Skillset </h2>
    
    <div className="skillsbox">
        <div className="leftskills">
          <p>JavaScript</p>
          <div className="skillshow">
            <div id="js"></div>
          </div>
          <p>React.js</p>
          <div className="skillshow">
            <div id="react"></div>
          </div>
          <p>Ember.js</p>
          <div className="skillshow">
            <div id="ember"></div>
          </div>
        </div>
        <div className="rightskills">
          <p>CSS</p>
          <div className="skillshow">
            <div id="css"></div>
          </div>
          <p>HTML</p>
          <div className="skillshow">
            <div id="html"></div>
          </div>
        </div>
    </div>

    <h3> Other Skills and Tools</h3>
    <div className="skillsbox">
      <ul className="tools">
        <li>jQuery</li>
        <li>Git</li>
      </ul>
      <ul className="tools">
        <li>NPM</li>
        <li>Assembly</li>
      </ul>
      <ul className="tools">
        <li>LabView</li>
        <li>Excel</li>
      </ul>
    </div>

  </div>

  export default Skills;