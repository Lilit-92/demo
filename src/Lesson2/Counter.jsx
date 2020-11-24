import React , {Component} from 'react';
import './Counter.css';


class Counter extends Component{
    constructor(){
        super();
        this.Decrease=this.Decrease.bind(this);
    }

    state={
        num: 1,
    }

    Decrease(type){
        if (type==="decrease") {
           
            if (this.state.num===1||this.state.num===0) { 
                this.setState({       
                    num:this.state.num-1
                })
                
                document.getElementsByClassName("dec")[0].setAttribute("disabled", "disabled");     
            }
            else{
            
            this.setState({       
                num:this.state.num-1
            })
        }
           
        }
        else if(type==="increase"){               
                if (this.state.num===0) {
                    document.getElementsByClassName("disabled")[0].removeAttribute("disabled")
                }
            this.setState({       
                num:this.state.num+1
            })
        }
        else{
            this.setState({       
                num:0,
            })
                document.getElementsByClassName("dec")[0].setAttribute("disabled", "disabled");
        }
    };


    render(){
        return(
            <>
            <div className="parent">
                <div>
                    <button onClick={()=>this.Decrease("decrease")} className={this.state.num<=0?"disabled":"dec"}>-</button>
                </div>
                <div>
                    <p className="num">{this.state.num}</p>
                </div>
                <div>
                    <button onClick={()=>this.Decrease("increase")} className="inc">+</button>
                </div>
                <div className="reset"><button onClick={()=>this.Decrease("reset")}>Reset</button></div>
                
            </div>
           
            </>
        )
    }
}

export default Counter;