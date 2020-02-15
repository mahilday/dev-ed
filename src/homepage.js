import React, {Component} from 'react';
import logo from './assets/logo.svg';
import './App.css';
import PropTypes from 'prop-types'
// import { Route } from 'react-router-dom';
import { Link } from "react-router-dom"


class HomePage extends Component {
  static propTypes={
      images :PropTypes.array.isRequired
  }
  
render(){
  const {images} = this.props
  

  const image=(images.map((image)=>image.src))
  return (
    <div className="App">

      <div className='bg'></div>
      <header>
        <div className="logo">
         <Link to="/"><img src={logo} alt= "Logo"/></Link> 
        </div>
        <div>
          <nav>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/">EXPLORE</Link></li>
              <li><Link to="/">SIGN-UP</Link></li>
              <li><Link to="/">LOGIN</Link></li>

            </ul>
          </nav>
        </div>
      </header>
      <article className="svgdiagram">
        <div>
        <img className="svg" alt= "vector"src ={require('./assets/svgdiagram.svg')}/>

        </div>
        <div>
          <h1>MOU<span>NTRI</span>DES</h1>
          <p><span>MOUNTAINEERING</span>, a wonderful sport that could help 
            brighten your day
          </p>
          <input type="button" value="EXPLORE" name="explore-btn"/>
        </div>

      </article>
      <main>
        <div>
          <img alt='shape' src={require('./assets/Subtract.png')} />
        </div>
        <div>
          <img alt= 'decor'src={require('./assets/mask.png')}/>
          <h2>LOREM IPSUM</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi architecto totam culpa repellat illo aliquam .
            sit amet consectetur adipisicing elit. 
            Quasi architecto totam culpa repellat illo aliquam
            Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit.
             Cras ultricies ligula sed magna dictum porta.</p>
          {/* <img className='secondimg' alt= 'decor'src={require('./assets/bludown.svg')}/> */}
        </div>

        <section>
            
            <img alt="des" className="newsvg1" src={require('./assets/ellipse9.svg')}/>
            
            <img alt="des" className="newsvg2" src={require('./assets/ELLIPSE.svg')}/>
            
            <img alt="des" className="newsvg3" src={require('./assets/ellips.svg')}/>
            

            <div className='svgnewimg'>
            <img alt="new" className="svgimg" src={require('./assets/kevin-noble.jpg')}/>
            <img alt="new" className="svgimg" src={require('./assets/courtney-kenady.jpg')}/>
            </div>
            <div className="imgtitle">
                <p>mount everest</p>
                <p>mount everest</p>

            </div>
            


        </section>
      </main>
    </div>
  );
}

}
  
export default HomePage;
