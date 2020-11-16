import React from 'react';
import Print from './classes';
import fox from './fox1.jpg';
import wolf from './wolf.jpg';
import bear from './bear.jpg';
import horse from './hors.jpg';
import rabbit from './rabbit.jpg';


function App() {
  return (
    <div>
       <div>   
           <h1 className="head">Animals</h1>
        </div>
        <Print name="Fox" color="orange" type="wild" photo={fox} home="forest" more="https://en.wikipedia.org/wiki/Fox"/>
        <Print name=" Wolf" color="grey" type="wild" photo={wolf} home="forest" more="https://en.wikipedia.org/wiki/Wolf"/>
        <Print name=" Bear" color="grey, white" type="wild" photo={bear} home="forest" more="https://en.wikipedia.org/wiki/bear"/>
        <Print name="Horse" color="black, white, braun" type="wild" photo={horse} home="forest" more="https://en.wikipedia.org/wiki/horse"/>
        <Print name="Rabbit" color="grey, white" type="wild" photo={rabbit} home="forest" more="https://en.wikipedia.org/wiki/rabbit"/>
    </div>
  );
}

export default App;
