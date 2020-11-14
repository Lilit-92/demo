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
        <div className="parent">
          <div>
              <b>Description</b>
              <p>
                name: {this.props.name}
              </p>
              <p>
                color: {this.props.color}
              </p>
              <p>
                type: {this.props.type}
              </p>
              <p>
                home:{this.props.home}
              </p>
              <p> 
                <a href={this.props.more}>more about {this.props.name}</a>
              </p>
          </div>
          <div>
              <b> 
                {this.props.name}
              </b>
              <p>
                <img src={this.props.photo} />
              </p>

          </div>
        </div>
     )
   }
}



function App() {
  return (
    <div>
        <Print name="Fox" color="orange" type="wild" photo={fox} home="forest" more="https://en.wikipedia.org/wiki/Fox"/>
        <Print name=" Wolf" color="grey" type="wild" photo={wolf} home="forest" more="https://en.wikipedia.org/wiki/Wolf"/>
        <Print name=" Bear" color="grey, white" type="wild" photo={bear} home="forest" more="https://en.wikipedia.org/wiki/bear"/>
        <Print name="Horse" color="grey" type="wild" photo={horse} home="forest" more="https://en.wikipedia.org/wiki/horse"/>
        <Print name="Rabbit" color="grey" type="wild" photo={rabbit} home="forest" more="https://en.wikipedia.org/wiki/rabbit"/>
    </div>
  );
}

export default App;
