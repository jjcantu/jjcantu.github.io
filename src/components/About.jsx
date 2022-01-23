import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";
import resume from './Resume.pdf'


Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image ">
          <img src="assets/img/slider/pool_1920x1114.jpg" alt="about" />
        </div>
        <div className="description">
          <h3 className="name">Jose Cantu &amp; Software Engineer</h3>
          <div className="description_inner">
            <div className="left">
              <p>
              I have never been one to step down from something that I was unaware as to how it works. 
              I take matters into my own hands and dive into a realm that is unknown. 
              Consequently, I discovered the world of programming and its seemingly never-ending self. 
              This led me to where I am today. 
              A determined full-stack engineer who won't steer from unfamiliar technologies and will quench my 
              compulsive desire to explore the vast world of programming! 
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
                <a target='_blank' href={resume} className="a-button">Resume</a>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>02/12/2002
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>19
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address:</span>3427 May St, Mission TX. 
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:mail@gmail.com">josecantu_20@yahoo.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+9567778054">(956)777-8054</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Technical Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <i class="dev devicon-javascript-plain"></i>
                        <i class="dev devicon-python-plain"></i>
                        <i class="dev devicon-flask-original"></i>
                        <i class="dev devicon-sequelize-plain"></i>
                      </span>
                    </div>
                    <div className="progress_inner" data-value="80">
                      <span>
                        <i class="dev devicon-html5-plain-wordmark"></i>
                        <i class="dev devicon-css3-plain-wordmark"></i>
                        <i class="dev devicon-react-original-wordmark"></i>
                        <i class="dev devicon-redux-original"></i>
                      </span>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                       <i class="dev devicon-postgresql-plain"></i>
                       <i class="dev devicon-nodejs-plain-wordmark"></i>
                       <i class="dev devicon-git-plain-wordmark"></i>
                       <i class="dev devicon-ubuntu-plain-wordmark"></i>
                      </span>
                    </div>
                    <div className="progress_inner" data-value="90">
                      <span>
                       <i class="dev devicon-socketio-original-wordmark"></i>
                       <i class="dev devicon-amazonwebservices-plain-wordmark"></i>
                       <i class="dev devicon-sqlalchemy-plain"></i>
                       <i class="dev devicon-mocha-plain"></i>
                      </span>
                    </div>
                    <div className="progress_inner" data-value="90">
                      <span>
                       <i class="dev devicon-express-original"></i>
                       <i class="dev devicon-docker-plain-wordmark"></i>
                       <i class="dev devicon-github-original-wordmark"></i>
                       <i class="dev devicon-java-plain-wordmark"></i>
                      </span>
                    </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Intangibles</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <div className="intan-top label">Determined</div>
                      </span>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <div className="intan label">Adaptable</div>
                      </span>
                    </div>
                    <div className="progress_inner" data-value="85">
                      <span>
                        <div className=" intan label">Collaborative</div>
                      </span>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>8+</h3>
                      <span>Years Swimming</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>1.5K</h3>
                      <span>Hours Coded</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>20K+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
