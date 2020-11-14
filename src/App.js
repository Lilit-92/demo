import React, {Component} from 'react';
import "./App.css";
import fox from './fox1.jpg';
import wolf from './wolf.jpg';
import bear from './bear.jpg';
import horse from './hors.jpg';
import rabbit from './rabbit.jpg';



class Print extends Component{
   constructor(props){
     super(props);
   };

   render(){
     return(
       <>
        <div>   
           {/* <h1 className="head">Animals</h1> */}
        </div>
        <div className="parent">
          <div>
              <b className="des">Description</b>
              <p>
                <b>name:</b> {this.props.name}
              </p>
              <p>
                <b>color:</b> {this.props.color}
              </p>
              <p>
                <b>type:</b> {this.props.type}
              </p>
              <p>
                <b>home:</b> {this.props.home}
              </p>
              <p> 
                <a href={this.props.more}>more about {this.props.name}</a>
              </p>
          </div>
          <div>
              <p>
                <img src={this.props.photo} />
              </p>
          </div>
        </div>
        </>
     )
   }
}



function App() {
  return (
    <div>
        <Print name="Fox" color="orange" type="wild" photo={fox} home="forest" more="https://en.wikipedia.org/wiki/Fox"/>
        <Print name=" Wolf" color="grey" type="wild" photo={wolf} home="forest" more="https://en.wikipedia.org/wiki/Wolf"/>
        <Print name=" Bear" color="grey, white" type="wild" photo={bear} home="forest" more="https://en.wikipedia.org/wiki/bear"/>
        <Print name="Horse" color="black, white, braun" type="wild" photo={horse} home="forest" more="https://en.wikipedia.org/wiki/horse"/>
        <Print name="Rabbit" color="grey, white" type="wild" photo={rabbit} home="forest" more="https://en.wikipedia.org/wiki/rabbit"/>
    </div>
  );
}

export default App;
