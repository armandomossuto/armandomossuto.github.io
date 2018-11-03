import  React, { Component } from 'react';

export default class Contact extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      form: false,
      formwindow: false,
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("myform");

  fetch('https://formspree.io/armandomossuto@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.elements.name.value, 
        mail: form.elements.mail.value, 
        message: form.elements.body.value
      })
    }).then(function(response) {
    window.alert("Your message has been received. Thank you. I will get in touch with you as soon as possible")
    }) 
  }

  render() {
    return(
      <div className="projectspage"> 
          <h2> Contact Me </h2>
          <div className="contactinfo"> 
            <div className="flexbox">
              <p> E-mail </p>
              <p> Telephone </p>
            </div>
            <div className="flexbox">
              <p> armandomossuto@gmail.com </p>
              <p> +351915931095 </p>
            </div>
            <a href='https://pt.linkedin.com/in/armando-mossuto-moreno-5787868' title="Linkedin Profile" target="_blank" rel="noopener noreferrer">
              <img src='In-2C-54px-R.png' alt='Linkdn Logo Link' />
            </a>
            <a href='https://github.com/armandomossuto' title="Github Repositories" target="_blank" rel="noopener noreferrer">
              <img src="GitHub_Logo.png" alt="Github Logo Link" /> 
            </a>
          </div>
          <form  id="myform" onSubmit={this.onSubmit}>
           <h3> Contact Form </h3>
            <label>Name</label>
            <input type="text" name="name" />        
            <label>E-mail</label>
            <input type="email" name="mail" />
            <label>Comments</label>
            <textarea   name="body">
            </textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      );
  }
}
  