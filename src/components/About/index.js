import React from 'react';
import styles from './styles.scss';
import Footer from '../Footer';

function About() {
  const imgStyleAbout = {
    backgroundImage: 'url(\'https://assets.imanidap.nl/portfolio/img/headshot-black-background-min.jpg\')',
    backgroundSize: 'cover',
  }

  return (
    <div className={ styles.about }>
    <div className={ styles.about__content }>
      <div className={ styles.about__image } style={ imgStyleAbout } ></div>
      <div className={ styles.about__text }>
      <h1>Hi, I&#39;m Imani</h1>
        <p>
          I&#39;m a Creative Media and Game Technologies student from the Netherlands.
          Right now, I&#39;m looking for an internship between September 2018 and February 2019. My goal is to do my internship abroad
          (anywhere in Europe), to grow as a person and explore different environments.
          I would love to develop experiences using AR, WebGL, Arduino, Raspberry Pi or similar technologies.
          My curriculum requires me to think about design (concepts and UX) and develop solutions.
        </p>
        <p className={ styles.about__text_cta }>Interested? Mail me by clicking on the envelope below!</p>
      </div>
    </div>
    </div>
  );
}

export default About;
