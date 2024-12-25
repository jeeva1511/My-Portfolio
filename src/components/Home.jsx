// Desc: Home component
import pdf from '../assets/fullstack Resume.pdf';
import download from '../assets/download.png';
import hero from '../assets/vecteezy_modern-male-avatar-with-black-hair-and-hoodie-illustration_48216761.png'

const Home = () => {
 const config = {
  role : 'Full Stack Developer',
 }
  return (
    <section className="Hero"id="Hero">
    <div className="container p-4">
     <div className="row">
      <div className="col-12 col-md-6 d-flex justify-content-center flex-column text-center mt-3">
        <h1 >Hello, I'm <strong className='text-dark'>Jeeva</strong></h1>
        <span>I'm a {config.role}</span>
        <div className='mt-2'>
        <a href={pdf} className="btn btn-light w-50 text-center shadow" download><img src={download} alt="" /></a>

        </div>
      </div>
      <div className="col-12 col-md-6">
        <img src={hero} alt="John Doe" className="img-fluid " />
     </div>
    </div>
    </div>
  </section>
)};

export default Home;
