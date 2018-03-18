import React from 'react';
import * as THREE from 'three';
import { Vector3 } from 'three';
import * as WHS from 'whs';
import styles from './styles.scss';

class Cube extends React.Component {
  constructor(props){
    super(props);
    this.state = {app: false, cube: false, loop: false};
  }

  componentDidMount(){
    if(typeof window !== 'undefined'){
      const scene = this.createScene();
      this.setState({app: scene});
    }
  }

  componentDidUpdate(){
    if(!this.state.cube){
      this.addObjects();
      this.state.app.start();
    }
  }

  componentWillUnmount(){

    const canvas = this.canvas.getElementsByTagName('canvas')[0];
    const gl = canvas.getContext('webgl');
    gl.getExtension('WEBGL_lose_context').loseContext();
  }

  createScene(){
    return new WHS.App([
    new WHS.ElementModule(this.canvas), // Apply to DOM.
    new WHS.SceneModule(), // Create a new THREE.Scene and set it to app.
    new WHS.DefineModule('camera', new WHS.PerspectiveCamera({ // Apply a camera.
      position: new Vector3(0, 0, 0)
    })),
    new WHS.RenderingModule({bgColor: 0x000000}), // Apply THREE.WebGLRenderer
    ]);
  }

  addObjects(){
    const light = new WHS.PointLight({
      color: 0xffffff,
      intensity: 3,
      position: new THREE.Vector3(0, 20, 60),
    })

    const box = new WHS.Box({
      geometry: {
        width: 2,
        height: 2,
        depth: 2,
      },
      material: new THREE.MeshPhongMaterial({
        color: 0xffffff,
        emissive: 0x0,
        specular: 0x252525,
        shininess: 100,
        fog: true,
      }),
      position: new THREE.Vector3(0, 0, this.props.z),
    });

    box.rotation.x = 0.5;
    box.rotation.y = 0.8;

    this.setState({app: this.state.app, cube: box});

    light.addTo(this.state.app);
    box.addTo(this.state.app);
  }

  mouseEnterHandler(){
    if(!this.state.loop){
      const animation = new WHS.Loop(() => {
        this.state.cube.rotation.y -= 0.03;
        this.state.cube.rotation.x += 0.01;
      });

      this.setState({app: this.state.app, cube: this.state.cube, loop: animation});
      animation.start(this.state.app);
    } else {
      this.state.loop.start(this.state.app);
    }
  }

  mouseLeaveHandler(){
    if(this.state.loop){
      this.state.loop.stop(this.state.app);
    }
  }

  render(){
    let text = ''
    if(this.props.text){
      text = this.props.text;
    }

  return (
      <div
          ref={(input) => { this.canvas = input; }}
          onMouseEnter={ (e) => this.mouseEnterHandler(e) }
          onMouseLeave={ (e) => this.mouseLeaveHandler(e) }
          >
          <h1 className={ styles.cube__text }>{ text }</h1>
      </div>
    )
  }
}

export default Cube;
