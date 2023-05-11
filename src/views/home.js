import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Yellowish Loose Raven</title>
        <meta property="og:title" content="Yellowish Loose Raven" />
      </Helmet>
      <div className="home-container1">
        <input
          type="text"
          id="result"
          disabled
          className="home-textinput input"
        />
        <div className="home-container2">
          <button className="home-button button">
            <span className="home-text button">
              <span>SIN</span>
              <br></br>
              <br></br>
            </span>
          </button>
          <button className="home-button01 button">
            <span className="home-text04 button">
              <span>COS</span>
              <br></br>
              <br></br>
            </span>
          </button>
          <button className="home-button02 button">
            <span className="home-text08 button">
              <span>Tan</span>
              <br></br>
            </span>
          </button>
          <button className="home-button03 button">
            <span className="home-text11">
              <span>sqrt</span>
              <br></br>
            </span>
          </button>
        </div>
        <div className="home-container3">
          <button className="home-button04 button">
            <span className="home-text14">
              <span>c</span>
              <br></br>
            </span>
          </button>
          <button className="home-button05 button">
            <span className="home-text17">
              <span>CE</span>
              <br></br>
            </span>
          </button>
          <button className="home-button06 button">
            <span className="home-text20">
              <span>(</span>
              <br></br>
            </span>
          </button>
          <button className="home-button07 button">
            <span className="home-text23">
              <span>)</span>
              <br></br>
            </span>
          </button>
        </div>
        <div className="home-container4">
          <button className="home-button08 button">
            <span className="home-text26 button">
              <span>7</span>
              <br></br>
            </span>
          </button>
          <button className="home-button09 button">
            <span className="home-text29 button">
              <span>8</span>
              <br></br>
            </span>
          </button>
          <button className="home-button10 button">
            <span className="home-text32 button">
              <span>9</span>
              <br></br>
            </span>
          </button>
          <button className="home-button11 button">
            <span className="home-text35 button">
              <span>/</span>
              <br></br>
            </span>
          </button>
        </div>
        <div className="home-container5">
          <button className="home-button12 button">
            <span className="home-text38 button">
              <span>4</span>
              <br></br>
            </span>
          </button>
          <button className="home-button13 button">
            <span className="home-text41 button">
              <span>5</span>
              <br></br>
            </span>
          </button>
          <button className="home-button14 button">
            <span className="home-text44 button">
              <span>6</span>
              <br></br>
            </span>
          </button>
          <button className="home-button15 button">
            <span className="home-text47 button">
              <span>*</span>
              <br></br>
            </span>
          </button>
        </div>
        <div className="home-container6">
          <button className="home-button16 button">
            <span className="home-text50 button">
              <span>1</span>
              <br></br>
            </span>
          </button>
          <button className="home-button17 button">
            <span className="home-text53 button">
              <span>2</span>
              <br></br>
            </span>
          </button>
          <button className="home-button18 button">
            <span className="home-text56 button">
              <span>3</span>
              <br></br>
            </span>
          </button>
          <button className="home-button19 button">
            <span className="home-text59 button">
              <span>-</span>
              <br></br>
            </span>
          </button>
        </div>
        <div className="home-container7">
          <button className="home-button20 button">
            <span className="home-text62 button">
              <span>.</span>
              <br></br>
            </span>
          </button>
          <button className="home-button21 button">
            <span className="home-text65 button">
              <span>0</span>
              <br></br>
            </span>
          </button>
          <button className="home-button22 button">
            <span className="home-text68">
              <span>=</span>
              <br></br>
            </span>
          </button>
          <button className="home-button23 button">
            <span className="home-text71 button">
              <span>+</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
