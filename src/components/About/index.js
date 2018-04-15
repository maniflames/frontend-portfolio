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
          Right now I&#39;m doing the bachelor Creative Media and Game Technologies in the Netherlands.
          I&#39;m looking for an <span>internship</span> between September 2018 and February 2019, preferably abroad so I can experience something new.
        </p>
        <p>
          As a <span>creative full-stack developer</span> I get involved in a project right from the start.
           <span> Concepting, researching and communicating with clients</span> is part of what I do.
        </p>
        <p>
          In the 1,5 year that I&#39;ve been developing, I&#39;ve discovered that I love things that work.
          It&#39;s probably the main reason why the <span>back-end</span> caught my attention first.
          I&#39;ve developed more interests along the way and started playing around with <span>three.js, Arduino & Raspberry Pi</span>.
          To keep it short, I believe that 3D and hardware can give someone an experience that can take over the imagination.
          Hopefully, there is a place where I can keep experimenting with these technologies or learn something else that will blow my mind.
        </p>
        <p className={ styles.about__text_cta }>
          Do you have a spot left for an eager student? Contact me by hitting that envelope below!
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;
