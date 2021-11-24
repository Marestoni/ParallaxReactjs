import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import Hello from "./Hello";

//css style
import './App.css'

function App() {


  const image1 =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
  const image2 =
    "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
  const image3 =
    "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
  const image4 =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

  return (
    <div className="container">
      <Hello name="Effect Parallax" />
      <Parallax
        className="effectBackground"
        bgImage={image1} 
        strength={800}>
        <div className="customImg">
          <div className="insideStyles">HTML inside the parallax</div>
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax bgImage={image3} blur={{ min: -3, max: 4 }}>
        <div className="customImg">
          <div className="insideStyles">Dynamic Blur</div>
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax bgImage={image2} strength={-100}>
        <div className="customImg">
          <div className="insideStyles">Reverse direction</div>
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={(percentage) => (
          <div>
            <div className="circleExpand"
              style={{
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                width: percentage * 500,
                height: percentage * 500,
              }}
            />
          </div>
        )}
      >
        <div className="customImg">
          <div className="insideStyles">renderProp</div>
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax strength={500}>
        <Background className="custom-bg">
          <div
            style={{
              height: 2000,
              width: 2000,
              backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')",
            }}
          />
        </Background>
      </Parallax>
   
    </div>
  );
}

export default App;
