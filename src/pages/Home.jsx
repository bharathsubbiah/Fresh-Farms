import React from 'react'
import './Home.css'
import bannerimage from "../images/home banner 1.png"
import honeyimage from "../images/honey circle.png"
import gheeimage from "../images/ghee circle.png"
import breadimage from "../images/bread circle.png"
import oilimage from "../images/oil circle.png"
import seedsimage from "../images/seeds circle.png"
import shraks1 from "../images/Peyush Bansal.avif"
import shraks2 from "../images/Ghazal Alagh.avif"
import adimage from "../images/ad image.png"
import ourmoto from "../images/Ourmotto.png"
import desigoodness from "../images/desi goodness.png"
import appbg from "../images/app bg.png"
import app1 from "../images/app 1.avif"
import app2 from "../images/app 2.avif"
import app3 from "../images/app 3.avif"
import Navbar from '../component/Navbar'
import Shippingbar from '../component/Shippingbar'
import Footer from '../component/Footer'
import { HomePageProduct } from '../constant/data'

const Home = () => {
  return (
    <>
      <Navbar />
      <Shippingbar />

      {/* slider */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bannerimage} className='herobanner' alt='bannerimage 1' />
          </div>
        </div>
      </div>

      {/* // Shop by category */}

      <div className="category-section">
        <h2>Shop By Category</h2>

        <div className="category-row">

          <div className="category-card">
            <div className="circle">
              <img src={seedsimage} alt="Seeds" />
            </div>
            <p>Seeds</p>
          </div>

          <div className="category-card">
            <div className="circle">
              <img src={oilimage} alt="oil" />
            </div>
            <p>oil</p>
          </div>

          <div className="category-card">
            <div className="circle">
              <img src={honeyimage} alt="honey" />
            </div>
            <p>honey</p>
          </div>

          <div className="category-card">
            <div className="circle">
              <img src={breadimage} alt="bread" />
            </div>
            <p>bread</p>
          </div>

          <div className="category-card">
            <div className="circle">
              <img src={gheeimage} alt="ghee" />
            </div>
            <p>ghee</p>
          </div>
        </div>
      </div>

      {/* product card Top Sellers */}
      <div className="section">
        <h2>Top Sellers</h2>

        <div className="products">
          {HomePageProduct.map((product) => (
            <div className="card" key={product.id}>
              <div className="image-box">
                <img src={product.image} alt={product.name} />
              </div>

              <h3>{product.name}</h3>

              <div className="price">
                ₹ {product.price} <del>₹ {product.oldPrice}</del>
              </div>

              <select>
                {product.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>

              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* sharks section */}

      <div className="sharks-section">
        <h2>Approved By Sharks</h2>
        <p className="subtext">
          Humpy Farms is proud to get partnered with two most prominent Sharks from Shark Tank.
        </p>

        <div className="sharks-container">

          <div className="sharks-left">

            <div className="shark-card">
              <div className="image-wrapper">
                <img src={shraks1} alt="Peyush Bansal" />
              </div>

            </div>

            <div className="shark-card">
              <div className="image-wrapper">
                <img src={shraks2} alt="Ghazal Alagh" />
              </div>

            </div>

          </div>

          <div className="sharks-right">
            <iframe
              src="https://www.youtube.com/embed/Qt8SqUB386k?si=GprHKJT9sWWqJPMU"
              title="Shark Tank Appearance"></iframe>
          </div>

        </div>
      </div>

      {/* product card Trending This Week */}



      <div className="section">
        <h2>Trending This Week !</h2>

        <div className="products">
          {HomePageProduct.map((product) => (
            <div className="card" key={product.id}>
              <div className="image-box">
                <img src={product.image} alt={product.name} />
              </div>

              <h3>{product.name}</h3>

              <div className="price">
                ₹ {product.price} <del>₹ {product.oldPrice}</del>
              </div>

              <select>
                {product.options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>

              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>


      {/* ad image */}

      <div className='adimage'>
        <img src={adimage} className="img-fluid" alt="adimage" />
      </div>

      {/* our moto */}

      <div className='our-moto'>
        <h3>Our Motto</h3>
        <h2>At Humpy, we think authentic</h2>
        <div className='moto-image'>
          <img src={ourmoto} className="img-fluid" alt="ourmoto" />


        </div>
      </div>

      {/* desi goodness */}

      <div className='desi-goodness'>
        <h3>Desi Goodness</h3>
        <h2>The true Indian Milk</h2>
        <div className='desi-image'>
          <img src={desigoodness} className='img-fluid' alt="desigoodness" />

        </div>

      </div>

      {/* youtube video */}

      <div className='embeed-video-title'>
        <h2>Our commitment to organic farming</h2>
        <p>When you respect nature, she gives back in so many healthy ways.</p>
      </div>
      <div>
        <iframe width="100%" height="600" src="https://www.youtube.com/embed/Qt8SqUB386k?si=GprHKJT9sWWqJPMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      {/* app banner */}
      <div className="hero">
        <div className="hero-container">

          <div className="hero-text">
            <h1>
              We’ve got everything to bring you <br />
              convenience, trust and assurance
            </h1>

            <p>
              Fresh farms A2 App is the gateway to all things organic and chemical-free,
              with traceable quality. Here are 3 simple steps to use the app and
              manage your subscriptions with Fresh farms A2. The app is available on
              Android and iOS
            </p>

            <div className="hero-buttons">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
            </div>
          </div>

          <div className="hero-images">
            <img src={app1} alt="app1" />
            <img src={app2} alt="app2" />
            <img src={app3} alt="app3" />
          </div>

        </div>
      </div>

      {/* customer review */}
      <div class="reviews-section">
        <h2>What Our Customers Say</h2>

        <div class="reviews-container">

          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p class="review-text">
              "The milk quality is amazing! It feels fresh and pure. My family loves it."
            </p>
            <h4 class="review-name">- Ravi Kumar</h4>
          </div>

          <div class="review-card">
            <div class="stars">★★★★☆</div>
            <p class="review-text">
              "Best dairy products I’ve used. The ghee aroma is just perfect!"
            </p>
            <h4 class="review-name">- Priya Sharma</h4>
          </div>

          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p class="review-text">
              "Very reliable delivery and top-notch quality. Highly recommended."
            </p>
            <h4 class="review-name">- Arjun Mehta</h4>
          </div>

        </div>
      </div>

      <Footer />

    </>

  );
}

export default Home;
















