import React, {Component} from 'react';
import './Classes.css'



class Print extends Component{
    constructor(props){
      super(props);
    };
 
    render(){
      return(
     
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

     )
   }
}

export default Print;
