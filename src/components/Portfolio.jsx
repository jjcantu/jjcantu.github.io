import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import Modal from "react-modal";

const Portfolio = () => {
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }


  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="portfolio_filter">
            <Tabs>
              <div className="list_wrapper">
                <TabPanel>
                  <ul className="portfolio_list">
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/seedstartss.png"
                            alt="Details"
                            onClick={toggleModalThree}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Seed Starter</h3>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/welcometobabble.PNG"
                            alt="Details"
                            onClick={toggleModalFour}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Babble</h3>
                        </div>
                      </div>
                    </li>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/roadtripss.PNG"
                            alt="Details"
                            onClick={toggleModalFive}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Road Trip</h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </TabPanel>
                {/* <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/6.jpg"
                            alt="Details"
                            onClick={toggleModalThree}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Seed Starter</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    {/* <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/7.jpg"
                            alt="Details"
                            onClick={toggleModalFour}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Babble</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </TabPanel> */}
              </div>
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/portfolio/seedstartss.png" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/seedstartss.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Seed Starter</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  SeedStarter started with an idea: aim to be a platform that provides seed funding to community-driven and 
                  environmental-focused projects. 
                  From our community to yours, we believe that those closest to 
                  the problem know how to solve it best.                  
                  </p>
                </div>
                <div className="button-box">
                  <div className="button-holder">
                    <a href='https://github.com/a-sugawara/seedStart' target='_blank' className="repo-link">
                      Repo Link
                    </a>
                  </div>
                  <div className="button-holder">
                    <a href='https://seedstart.herokuapp.com' target='_blank' className="repo-link">
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/welcometobabble.PNG)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Babble</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Babble is a real time chat application made with web sockets.                  
                  </p>
                </div>
                <div className="button-box">
                  <div className="button-holder">
                    <a href='https://github.com/Vour123/Babble' target='_blank' className="repo-link">
                      Repo Link
                    </a>
                  </div>
                  <div className="button-holder">
                    <a href='https://babble-jc.herokuapp.com' target='_blank' className="repo-link">
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFive}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/roadtripss.PNG)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Road Trip</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Road Trip is a AirBnB clone based on cars! Created using Express on the backend and React/Redux in the front end.                
                  </p>
                </div>
                <div className="button-box">
                  <div className="button-holder">
                    <a href='https://github.com/Vour123/RoadTrip' target='_blank' className="repo-link">
                      Repo Link
                    </a>
                  </div>
                  <div className="button-holder">
                    <a href='https://road-trip-aa.herokuapp.com' target='_blank' className="repo-link">
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
