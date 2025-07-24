import React from "react";


export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                
                <a
                  href="https://play.google.com/store"
                  className="btn btn-custom btn-lg page-scroll"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                            background: "transparent",
                            padding: 0,
                            border: "none",
                            boxShadow: "none",
                            outline: "none",
                            borderRadius: 0,
                            display: "inline-block"
                       }}
                >
                  <img
                    src="/img/GetItOnGooglePlay.png"
                    alt="Get it on Google Play"
                    style={{
                            width: "260px",
                            height: "auto",
                            display: "block"
                          }}
                  />
                
                  
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
