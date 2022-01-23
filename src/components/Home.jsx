import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/profilepic_557x557.jpg)",
              }}
            ></div>
          </div>
          <div className="details">
            <h3 className="name">Jose Cantu</h3>
            <p className="job">
              A Software Engineer based in McAllen Texas.
            </p>
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
