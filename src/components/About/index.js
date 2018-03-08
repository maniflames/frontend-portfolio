import React from 'react';
import styles from './styles.scss';

function About() {
  const imgStyleAbout = {
    backgroundImage: 'url(\'http://localhost:3000/images/duo_tone_about.jpg\')',
    backgroundSize: 'cover',
  }

  return (
    <div className={ styles.about }>
    <h1>Hi, I&#39;m Imani</h1>
    <div className={ styles.about__content }>
      <div className={ styles.about__image } style={ imgStyleAbout } ></div>
      <div className={ styles.about__text }>
        <h4>1,5 year ago I started my journey to become a developer</h4>
        <p>
          One and a half year ago I was very excited to start my bachelor, Creative Media & Game Technologies, at Rotterdam University of Applied Sciences. <br/>
          My bachelor focuses on &#39;Creative Media&#39; and teaches how to make technology work for humans, not the other way around.
          As someone who loves sci-fi and wants to create the future of entertainment this is exactly what I was looking for.
          At the end of my first year I was lucky enough to get hired at Brand New Guys, <br />
          a digital agency where I learned what it&#39;s like to actually work with clients and solve problems that I didnt even know could be an issue.

          Between September 2018 and February 2019 I want to challenge myself in two ways.

          I would love to develop experiences in AR, WebGL, Arduino, Raspberry Pi or just experimental technologies.
          After learing the basics of some of these technologies and forcing others into my projects because they weren&#39;t part of the standard curriculum
          I am sure I want to do an internship at a company were I can sit down and learn a whole lot more.

          But besides developing I would also like to grow as a person and experience a new environment.
          That is why I really want to do my internship abroad.
          I like both the creative process (providing an interesting solution to a problem) and developing the actual product.
        </p>
        <h3>Help me take my journey to the next level by hiring me as an intern!</h3>
      </div>
    </div>
    </div>
  );
}

export default About;
