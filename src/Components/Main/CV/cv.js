import  React, { Component } from 'react';

 export default class CV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: false, 
      experience: { status: false , parts: [true,true,true] },
      languages: false,
    }
    this.onClick = this.onClick.bind(this);

  }

  onClick(parameter) {
    let newstate = this.state;
    switch(parameter){
      case "education":
        newstate.education = !(this.state.education);
        this.setState({education: newstate.education});
        break;

      case "experience":
        newstate.experience.status = !(this.state.experience.status);
        this.setState({experience: newstate.experience});
        break;  

      case "languages":
        newstate.languages = !(this.state.languages);
        this.setState({languages: newstate.languages});
        break; 

      case "Accenture":
        newstate.experience.parts[0] = !(this.state.experience.parts[0]);
        this.setState({experience: newstate.experience}); 
        break;

      case "Etelix":
        newstate.experience.parts[1] = !(this.state.experience.parts[1]);
        this.setState({experience: newstate.experience});
        break;

      case "Smartmatic":
        newstate.experience.parts[2] = !(this.state.experience.parts[2]);
        this.setState({experience: newstate.experience});           
    }
  }
  
  render() {
    const { education, experience, languages } = this.state;
    return(
      <div className="cvpage"> 

        <div className="cvpart">
          <div className="cvbox">
            <h3>Education</h3>
            <button onClick={()=>this.onClick("education")}>{education ? "-" : "+" }</button>
          </div>
          {
            education 
            ? (
                <div className="cvbox" id="education">
                  <div className="lefteducation">
                    <p>2004-2009</p>
                  </div>
                  <div className="righteducation">
                    <p> Universidad Simón Bolívar, Caracas – Venezuela</p>
                    <p>Electronics Engineer (5 years of studies, pre-Bologna)</p> 
                  </div>
                </div>
              )
            : null
          }
        </div>
     

        <div className="cvpart">
          
          <div className="cvbox">
            <h3>Professional Experience</h3>
            <button onClick={()=>this.onClick("experience")}>{experience.status ? "-" : "+" }</button>
          </div>
           {
            experience.status 
            ? (
               <div>
                <div className="profexperience"> 
                  <div className="cvbox">
                    <p className="companyname">Accenture</p>
                    <button onClick={()=>this.onClick("Accenture")}>{experience.parts[0] ? "-" : "+" }</button>
                  </div>
                  {
                    experience.parts[0]
                    ? (
                      <div>
                        <p className="location">Warsaw/Lisbon</p>
                        <div className="cvbox">
                          <p className="lefteducation">January 2017 - Present</p>     
                          <p className="righteducation"> Service Delivery Operations Team Leader</p>     
                        </div>
                        <ul>
                          <li> Overseeing and managing a team of 14 Data Analysts, monitoring their quality performance and output.</li>
                          <li> Actively used coaching, huddles and data analysis in order to reach the project targets. 
                          Provided constant feedback on personal and team performance to engage and motivate them to go beyond the expected performance, 
                          developing their skills and preparing them for professional grow.</li>
                          <li>Identified improvement opportunities in work-flow, and/or team structure.</li>
                          <li>Managed ad-hoc process improvements and initiatives from the client.</li>
                          <li>Cooperation with other team leads in order to manage the project, develop improvements to the process and drive engagement to reach the targets.</li>
                        </ul>
                         <div className="cvbox">
                          <p className="lefteducation">June 2015 – January 2017</p>     
                          <p className="righteducation"> Quality Auditor Analyst</p>     
                         </div>
                        <p>Executed quality audits to ensure that client requirements were being executed correctly. Provided support and training to key process, 
                        working as point of contact with the client.</p>
                      </div>
                      )
                    : null
                  }
                </div>

                <div className="profexperience">
                  <div className="cvbox">
                    <p className="companyname">ETELIX </p>
                    <button onClick={()=>this.onClick("Etelix")}>{experience.parts[1] ? "-" : "+" }</button>
                  </div>
                  {
                    experience.parts[1]
                    ? (
                        <div>
                          <p className="location">Caracas, Venezuela</p>
                          <div className="cvbox">
                            <p className="lefteducation">February 2014 - June 2015</p>     
                            <p className="righteducation"> Network Engineer</p>     
                          </div>
                          <p>Quality control of a complex network environment, handling resolution of alerts problems.</p>
                          <ul>
                            <li> Control the status of Network Elements using management systems.</li>
                            <li> Performed end to end tests.</li>
                            <li> Solved a variety of network problems.</li>
                            <li> Gathered diagnostic information for incident escalation. </li>
                            <li> Technical support to commercial department and retail customers.</li>
                          </ul>
                        </div>
                      )
                    : null
                }
                </div>

                <div className="profexperience">
                  <div className="cvbox">
                    <p className="companyname">SMARTMATIC</p>
                    <button onClick={()=>this.onClick("Smartmatic")}>{experience.parts[2] ? "-" : "+" }</button>
                  </div>
                  {
                    experience.parts[2]
                    ? (
                        <div>
                          <p className="location">Caracas, Venezuela</p>
                          <div className="cvbox">
                            <p className="lefteducation">2012 – 2013</p>     
                            <p className="righteducation"> QA Functional Engineer</p>     
                          </div>
                          <p>Designed and executed the systematic activities needed to fulfill the quality requirements
                           of the firmware and software of diverse products.</p>
                          <ul>
                            <li> Designing and conducting of test cycles. </li>
                            <li> Involved in performance and integration testing. </li>
                            <li> Documentation creation of product functionalities.</li>
                            <li> In charge of testers in the execution of tests. </li>
                            <li> Reported any issues or potential improvements of the products.</li>
                            <li> Testing within SCRUM development methodology.</li>
                          </ul>
                        </div>
                      )
                    : null
                  } 

                </div> 
               </div>
              )
            : null
           }
        </div>

        <div className="cvpart">
          <div className="cvbox">
            <h3>Languages</h3>
            <button onClick={()=>this.onClick("languages")}>{languages ? "-" : "+" }</button>
          </div>
         {
          languages
          ? (
             <div className="skillsbox">
                    <div className="leftskills">
                      <p>Spanish</p>
                      <div className="skillshow">
                        <div id="spanish"></div>
                      </div>
                      <p>English</p>
                      <div className="skillshow">
                        <div id="english"></div>
                      </div>
                    </div>
                    <div className="rightskills">
                      <p>French</p>
                      <div className="skillshow">
                        <div id="french"></div>
                      </div>
                      <p>Portuguese</p>
                      <div className="skillshow">
                        <div id="portuguese"></div>
                      </div>
                    </div>
              </div>
            )
          : null
        }
      </div>  
    </div>
    )}
}