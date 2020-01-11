import React from "react";
import ReactDOM from "react-dom";
import "./assets/reset.scss";
import "./assets/main.scss";

//  function App(){
//      return <h1>hello world</h1>
//  }
// we have to return only one parent with a component
function App() {
    return (
        <div className="wrapper ">
            <div className=" body ">
                <div className="flex ">
                    <img className=" logo-maker " src=" /images/logo.png" alt="logo " />
                    <input
                        className="search "
                        type="text "
                        placeholder="Discover your next favourite thing"
                    />
                    <ul className="flex  pad">
                        <li className="pad">Deals</li>
                        <li className="pad">Jobs</li>
                        <li className="pad">Makers</li>
                        <li className="pad">radio</li>
                        <li className="pad">Ship</li>
                        <li className="pad">...</li>
                    </ul>
                    <button className=" login">login</button>
                    <button className=" sign ">SignUp</button>
                </div>
            </div>
            <h3 className="ship">
                Upcoming <span className="pow">powered by ship</span>
            </h3>
            <div className="con">
                <div>
                    <h2 className="follow">
                        Follow and support your future favorite products
          </h2>
                    <hr />
                    <div className="flex">
                        <div className="">
                            <img
                                src="/images/logo1.jpg"
                                className="logo-2 logo-maker"
                                alt="logo-2"
                            ></img>
                        </div>
                        <div>
                            <h3 className="sense">Sense chat</h3>
                            <h5>Decentralized Text &amp; Video Chat Built on EOS</h5>
                            <button className="sub flex-1">subscribe</button>
                        </div>
                    </div>
                    <hr />
                    <div className="flex" align="left">
                        <div className="">
                            <img
                                src="/images/logo2.jpg"
                                className="logo-3 logo-maker"
                                alt="logo-3"
                            ></img>
                        </div>
                        <div>
                            <h3 className="sense">Proficonf</h3>
                            <h5>The fastest video conferencing experience ever created.</h5>
                            <button className="sub flex-1">subscribe</button>
                        </div>
                    </div>
                    <hr />
                    <div className="flex" align="left">
                        <div className="">
                            <img
                                src="/images/logo3.jpg"
                                className="logo-1 logo-maker"
                                alt="logo-1"
                            ></img>
                        </div>
                        <div>
                            <h3 className="sense">Sphere</h3>
                            <h5>an app that powers &amp; scales the magic of coaching</h5>
                            <button className="sub flex-1">subscribe</button>
                        </div>
                    </div>
                    <hr />
                    <div className="flex  ">
                        <h4 className="view">view all projects</h4>
                        <h5>
                            working on something ? <span>Discover ship</span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

// {           //  <h1> {`${props.name}`}</h1>
//  <img className="img" src="/images/pic.jpg" alt="bike" />}
