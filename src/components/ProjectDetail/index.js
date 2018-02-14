import React from 'react';
import { Router, Route, Link } from 'react-router';
import styles from './styles.scss';

// When it's done
// function ProjectDetail(props) {
//   return (
//     <div>
//         <img src={ props.img_url } witdh="500" height="500" />
//         <h1>{ props.name }</h1>
//         <p>in het kort: { props.description }</p>
//         <p>{ props.content }</p>
//         <a href={ props.git_url }><button>GITHUB</button></a>
//         <br/>
//         <a href={ url }>Bijwerken</a>
//     </div>
//   )
// }

//Two important things:
//Access to fetched projects
//Being able to fetch a full project based on ID

function ProjectDetail(props) {
  console.log('this is my thing!! (Detail)');
  return (
    <div className="projectDetail">

      <div className={ styles.projectDetail__content }>
        <img src="https://images.theconversation.com/files/186154/original/file-20170915-16324-153bs7v.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        witdh="500" height="500" />
        <h1>Name</h1>
        <p>Description</p>
        <p>Content Lorem Khaled Ipsum is a major key to success. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. You do know, you do know that they don’t want you to have lunch. I’m keeping it real with you, so what you going do is have lunch. Hammock talk come soon. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing. We don’t see them, we will never see them. They will try to close the door on you, just open it.

Congratulations, you played yourself. I’m up to something. We don’t see them, we will never see them. The key to more success is to have a lot of pillows. Lion! They don’t want us to eat. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. The key is to drink coconut, fresh coconut, trust me. You do know, you do know that they don’t want you to have lunch. I’m keeping it real with you, so what you going do is have lunch.</p>
        <a href="#"><button>GITHUB</button></a>
      </div>
      <div className={ styles.projectDetail__backdrop }></div>
    </div>
  )
}

export default ProjectDetail;
