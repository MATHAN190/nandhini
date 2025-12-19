import coffee from "../components/coffee.png";
import about from "../components/about.jpg";
import hot from "../components/hot beverage.png";
import cold from "../components/cold beverage.png";
import refresh from "../components/refresh.png";
import special from "../components/special.png";
import dessert from "../components/dessert.png";
import burger  from "../components/burger.png";

import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from "react-bootstrap";
import image1  from "../components/image1.jpg";
import image2  from "../components/image2.jpg";
import image3  from "../components/image3.jpg";
import image4  from "../components/image4.jpg";
import image5  from "../components/image5.jpg";

import gallery1  from "../components/g1.jpg";
import gallery2  from "../components/g2.jpg";
import gallery3  from "../components/g3.jpg";
import gallery4  from "../components/g4.jpg";
import gallery5  from "../components/g5.jpg";
import gallery6  from "../components/g6.jpg";

import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";










function Index(){
 
  
    return(
        <>

         {/* Header / Navbar  */}
<header>
    <nav className="navbar section-content">
        <a href="#" className="nav-logo">
            <h2 className="logo-text">☕Coffee</h2>
        </a>
        <ul className="nav-menu">
            <li className="nav-item"> 
            <a href="#" className="nav-link">🏠 Home</a>
            </li>

            <li className="nav-item">
            <a href="#about" className="nav-link">ⓘ About</a>
            </li>

            <li className="nav-item">
            <a href="#menu" className="nav-link">🍽️ Menu</a>
            </li>

            <li className="nav-item">
            <a href="#testmonials" className="nav-link">Testmonials 💬</a>
            </li>

            <li className="nav-item">
            <a href="#gallery" className="nav-link">📁 Gallery</a>
            </li>

            <li className="nav-item">
            <a href="#contact" className="nav-link">📞 Contact</a>
            </li>
        </ul>
    </nav>
</header>

<main>
    {/* Hero section */}
<section className="hero-section">
    <div className="section-content">
        <div className="hero-details">
            <h2 className="title"><i>Best Coffee</i></h2>
            <h3 className="subtitle">Make your day great with our special coffee!</h3>
            <p className="description">Welcome to our coffee paradise,where every bean tells a story and every cup sparks joy.</p>
            <div className="buttons">

                 <a href="#" className="button order-now">Order Now</a>
            <a href="#" className="button contact-us">Contact Us</a>
            </div>
             </div>
             <div className="hero-image-wrapper">
<img src={coffee} alt="coffee"/>

             </div>
    </div>
</section>


{/* About Section */}

<section className="about-section" id="about">
        <div className="section-content">
            <div className="about-image-wrapper">
                <img src={about} alt="about" className="about-image"/>
            </div>
<div className="about-detail s">
    <h2 className="section-title">About us</h2>
    <p className="text">At Coffee House in Berndrof,Germany,we pride
        ourselves on being a go-to destination for coffee lovers and 
        conversation seekers alike.we're dedicated to providing an 
        exceptional coffee experiance in a cozy and inviting atmosphere,
        where guests can relax,unwind,and enjoy their time in comfort.
    </p>
    <div className="social-link-list">
        <a href="https://facebook.com" className="social-link" target="_blank">
    <FaFacebook />
  </a>

  <a href="https://www.instagram.com/" className="social-link" target="_blank">
    <FaInstagram />
  </a>
          
<a href="https://twitter.com" className="social-link" target="_blank">
    <FaXTwitter />
  </a>

    </div>
</div>
        </div>
    </section>
    
{/* Menu Section */}
<section className="menu-section" id="menu">
    <h2 className="section-title">Our Menu</h2>
    <div className="section-content">
        <ul className="menu-list">
            <li className="menu-item">
                <img src={hot} alt="Hot Beverages" className="menu-image"></img>
                <div className="menu-details">
                <h3 className="name">Hot Beverages</h3>
                <p className="text">Wide range of Steaming hot coffee to make you fesh and light.</p>
                </div>
            </li>

             <li className="menu-item">
                <img src={cold} alt="Cold Beverages" className="menu-image"></img>
                                <div className="menu-details">
                <h3 className="name">Cold Beverages</h3>
                <p className="text">Creamy and frothy cold coffee to make you cool.</p>
                </div>
            </li>

             <li className="menu-item">
                <img src={refresh} alt="Refreshment" className="menu-image"></img>
                                <div className="menu-details">
                <h3 className="name">Refreshment</h3>
                <p className="text">Fruit and icy refreshing drink to make feel refresh.</p>
                </div>
            </li>

             <li className="menu-item">
                <img src={special} alt="Special Combos" className="menu-image"></img>
                                <div className="menu-details">
                <h3 className="name">Special Combos</h3>
                <p className="text">Your favourite eating and drinking combations.</p>
                                </div>
            </li>

            <li className="menu-item">
                <img src={dessert} alt="Dessert" className="menu-image"></img>
                <div className="menu-details">
                <h3 className="name">Dessert</h3>
                <p className="text">Satiate your palate and take you on a culinary treat.</p>
                </div>
            </li>

            <li className="menu-item">
                <img src={burger} alt="burger & French" className="menu-image"></img>
                                <div className="menu-details">
                <h3 className="name">Burger & French</h3>
                <p className="text">Quick bites to satisfy your small size hunger.</p>
                </div>
            </li>
        </ul>
    </div>
</section>
  {/* Testimonials Section */}
<section className="testimonials-section" id="testmonials">
  <h2 className="section-title">Testimonials</h2>

  <div className="section-content">
    

        <Carousel className="testimonials-list">

          {/* Slide 1 */}
          <Carousel.Item className="testimonials">
            <img src={image1} alt="user" className="user-image" />
            <Carousel.Caption>
              <h3 className="name">KINGSLIN</h3>
             <p> <i className="feedback">
                "Loved the French roast. Perfectly balanced and rich. Will order again!"
              </i></p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item className="testimonials ">
            <img src={image2} alt="user" className=" user-image" />
            <Carousel.Caption>
              <h3 className="name">JOHN</h3>
             <p> <i className="feedback">
                "Loved the French roast. Perfectly balanced and rich. Will order again!"
              </i></p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item className="testimonials ">
            <img src={image3} alt="user" className=" user-image" />
            <Carousel.Caption>
              <h3 className="name">SHAGIN</h3>
              <p><i className="feedback">
                "Loved the French roast. Perfectly balanced and rich. Will order again!"
              </i></p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 4 */}
          <Carousel.Item className="testimonials ">
            <img src={image4} alt="user" className=" user-image" />
            <Carousel.Caption>
              <h3 className="name">SAMUVAL</h3>
              <p><i className="feedback">
                "Loved the French roast. Perfectly balanced and rich. Will order again!"
              </i></p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 5 */}
          <Carousel.Item className="testimonials">
            <img src={image5} alt="user" className=" user-image"/>
            <Carousel.Caption>
              <h3 className="name">BABU</h3>
              <p><i className="feedback">
                "Loved the French roast. Perfectly balanced and rich. Will order again!"
              </i></p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </div>
    
</section>
{/* Gallery Section */}
<section className="gallery-section" id="gallery">
    <h2 className="section-title">Gallery</h2>
    <div className="section-content">
        <ul className="gallery-list">
            <li className="gallery-item">
                <img src={gallery1} alt="gallery" className="gallery-image"></img>
            </li>
            <li className="gallery-item">
                <img src={gallery2} alt="gallery" className="gallery-image"></img>
            </li>
            <li className="gallery-item">
                <img src={gallery3} alt="gallery" className="gallery-image"></img>
            </li>
            <li className="gallery-item">
                <img src={gallery4} alt="gallery" className="gallery-image"></img>
            </li>
            <li className="gallery-item">
                <img src={gallery5} alt="gallery" className="gallery-image"></img>
            </li>
            <li className="gallery-item">
                <img src={gallery6} alt="gallery" className="gallery-image"></img>
            </li>
        </ul>
    </div>
</section>

{/* contact section */}
<section className="contact-section" id="contact">
  <h2 className="section-title">Contact Us</h2>
  <div className="section-content">
    <ul className="contact-info-list">
<li className="contact-info">
  <i className="fa-solid fa-location-crosshairs"></i>
  <p> 📍 123  arappalayam madurai ,680486</p>
</li>

<li className="contact-info">
  <i className="fa-solid fa-phone"></i>
  <p>🖂 nandhucoffee@gmail.com
  </p>
</li>

<li className="contact-info">
  <i className="fa-solid fa-phone"></i>
  <p> ☎️ (123)456-78989
  </p>
</li>

<li className="contact-info">
  <i className="fa-regular fa-clock"></i>
  <p>🕒 Monday - Saturday: 10:00 AM - 6:00 PM </p>
</li>

<li className="contact-info">
  <i className="fa-regular fa-clock"></i>
  <p>🗓 Sunday: Closed</p>
</li>

<li className="contact-info">
  <i className="fa-solid fa-globe"></i>
  <p>🌐 www.nandhucoffeeweb.com</p>
</li>
    </ul>
<form className="contact-form">
  <input type="text" placeholder="your name" className="form-input" required></input>
  <input type="email" placeholder="your email" className="form-input" required></input>
  <textarea placeholder="your message" className="form-input" required></textarea>
  <button className="submit-button">Submit</button>
</form>
  </div>
</section>

{/* Footer section */}

<footer className="footer-section">
<div className="section-content">
  <p className="copyright-text">@ 2024 coffee shop</p>


 <div className="social-link-list">
  <a href="https://facebook.com" className="social-link" target="_blank">
    <FaFacebook />
  </a>

  <a href="https://www.instagram.com/" className="social-link" target="_blank">
    <FaInstagram />
  </a>
          
<a href="https://twitter.com" className="social-link" target="_blank">
    <FaXTwitter />
  </a>
  
  </div> 

  <p className="policy-text">
    <a href="#" className="policy-link">Privacy Policy</a>
    <span className="separator"></span>
        <a href="#" className="policy-link">Refund Policy</a>

  </p>
  </div> 

</footer>
</main>

        </>
    );
}
export default Index;
