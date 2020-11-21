import React , {Component} from 'react';
import './Counter.css';


class Counter extends Component{
    constructor(){
        super();
        this.Decrease=this.Decrease.bind(this);
        this.Increase=this.Increase.bind(this);
    }

    state={
        num: 5,
    }

    Increase(){
        this.setState({
            num:this.state.num+1
        })
    };

    Decrease(){
        if (this.state.num<=0) {
            this.setState({   
                num:this.state.num
            })
        }else{
            this.setState({       
                num:this.state.num-1
            })
        }
    };


    render(){
        return(
            <div className="parent">
                <div>
                    <button onClick={this.Decrease} className="dec">-</button>
                </div>
                <div>
                    <p className="num">{this.state.num}</p>
                </div>
                <div>
                    <button onClick={this.Increase} className="inc">+</button>
                </div>
            </div>
        )
    }
}

export default Counter;