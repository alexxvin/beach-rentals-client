import ReactPlayer from "react-player";

function HomePage() {
  return (
    <body>
      <div>
        <div className="Homepage-banner-content">
          <div className="banner-content">
            {/* <img
              className="background-image"
              src="https://e0.pxfuel.com/wallpapers/580/162/desktop-wallpaper-hotels-in-south-florida-hollywood-beach-marriott-resort-in-fla-for-your-mobile-tablet-explore-hollywood-beach-hollywood-beach-hollywood-hollywood.jpg"
              alt="beach"
            ></img> */}
            <h2 className="banner-title">
              Life takes you down many paths but my favorite ones lead to the
              beach
            </h2>
          </div>
        </div>
        <div className="about-service">
          <div className="container">
            <div className="section-heading">
              <div className="row-align-items">
                <div className="section-content">
                  <h2>
                    Beach Rentals <br /> Hollywood Beach
                  </h2>
                </div>
                <div className="section-content">
                  <div className="section-text">
                    <p>
                      We offer a wide selection of items to serve all of your
                      beach rental and vacation needs.
                    </p>
                    <p>
                      Our mission is to provide exceptional customer service and
                      help our customers create the most memorable South Florida
                      vacations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ReactPlayer url="https://www.youtube.com/watch?v=yXOe5mvalRw" playing /> */}
      </div>
    </body>
  );
}
export default HomePage;
