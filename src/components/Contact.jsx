import mail from "../assets/gmail.png";
import call from "../assets/call.png"; 
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Contact = () => (
  <section id="Contact" >
    <div className="row">
      <div className="col-md-6  d-flex justify-content-center align-items-center p-5">
        <div className="">
          <h2>Contact Me</h2>
          
            <a href="mailto:jeevaja0912@gmail.com" className='contact-icons'>
              <img src={mail} alt="" />
            </a>
          
          
            <a href="tel:6379024825" className='contact-icons'>
              <img src={call} alt="" />
            </a>
          
          
            
            <a
              href="https://github.com/jeeva1511"
              target="_blank"
              rel="noopener noreferrer"
              className='contact-icons'
            >
              <img src={github} alt="" />
            </a>
          
          
            
            <a
              href="https://linkedin.com/in/jeevaraja151118"
              target="_blank"
              rel="noopener noreferrer"
              className='contact-icons'
            >
              <img src={linkedin} alt="" />
            </a>
          
        </div>
        
      </div>


      <div className="col-md-6 d-flex justify-content-center align-items-center ">
        <div className="d-flex justify-content-center align-items-center p-4">
          <form action="" method="post">
            <div className="mb-2">
            <label htmlFor="" className="form-label text-dark fw-bold">
              Name
            </label>
            <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
            <label  className="form-label text-dark fw-bold">
              Mail
            </label>
            <input type="email" className="form-control" />
            </div>
            <div>
            <label htmlFor="" className="form-label text-dark fw-bold ">Description</label> <br />
            <textarea  cols={25} rows={5} className="form-description" placeholder="Type Something..."></textarea>
            </div>
           <button className="btn btn-dark ">Send</button>
           </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
