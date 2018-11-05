import  React from 'react';

const Portfolio = () =>
  <div className="projectspage"> 
    <h2>Portfolio</h2>
    <div className="projectsbox">
    <div className="projectrow">
          <div className="projectelement">
            <a href="/Job-Search-App-Source/" target="_blank" rel="noopener noreferrer">
              <img src="job-search-app_photo.png" />
              <div> Stack: Ember.js, SASS, Bootstrap </div>
            </a>
          </div>
        <p>Job Search App</p>
      </div>
      <div className="projectrow">
          <div className="projectelement white-font">
            <a href="/Movie-Recommendation-App/" target="_blank" rel="noopener noreferrer">
              <img src="recommendation-movie-app_photo.png" />
              <div> Stack React.js </div>
            </a>
          </div>
        <p>Movie Recommendation App</p>
      </div>
      <div className="projectrow">
          <div className="projectelement">
            <a href="/Weather-App/" target="_blank" rel="noopener noreferrer">
              <img src="weather-app_photo.png" />
              <div> Stack: React.js </div>
            </a>
          </div>
        <p>Lisbon Weather App</p>
      </div>
    </div>
  </div>

  export default Portfolio;