import React from "react";
import { useNavigate } from "react-router-dom";

function About() {

  const navigate =useNavigate();

  const home=()=>{
    navigate('/home')
  }
    return (
        <section className="about" id="about">
          <div className="container">
            <h2 >About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum est id pulvinar mollis. Nullam
              rhoncus dignissim ipsum, ac pulvinar tellus sodales ut. Vestibulum tincidunt malesuada consectetur.
              Nulla vel fermentum leo. Mauris rhoncus blandit justo, at congue dui rhoncus sit amet.</p>
            <p>Proin molestie
              sapien vel nulla accumsan, sit amet viverra metus ornare. Mauris iaculis ex vitae mollis pulvinar.
              Phasellus fringilla neque sed ligula lacinia iaculis.</p>

              <button onClick={home}>Home</button>
          </div>
        </section>
    );
};

export default About;