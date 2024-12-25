import about from '../assets/working-with-laptop.png'
import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import nodejs from '../assets/nodejs.png';
import mongodb from '../assets/mongo.png';

const About = () => (
  <section className="About" id="About">

  <div className="container p-4">
    <div className="row">
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-5">
      <img src={about} alt="Jeeva" />
      </div>

      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-3 flex-column">
      <p className='fs-5 fw-bold'>
      Hi! I'm R. Jeeva, an aspiring fullStack  developer with a background in 
      chemical engineering.<br/>
       I'm passionate about creating interactive web apps 
      using React, Bootstrap, and more!
      </p>
      <p className='fs-5 fw-bold'>
      I'm currently learning Node.js and MongoDB to expand my fullStack skills.
      </p>
     
      <div className='d-flex justify-content-start  mt-3 gap-3 align-items-center mb-3'>
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={react} alt="" />
        <img src={nodejs} alt="" />
        <img src={mongodb} alt="" />
      </div>
      </div>
    </div>
    
  </div>
  </section>
);

export default About;