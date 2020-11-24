import React from 'react';
// import Print from './Lesson1/Classes';
import fox from './Lesson1/photo/fox1.jpg';
import wolf from './Lesson1/photo/wolf.jpg';
import bear from './Lesson1/photo/bear.jpg';
import horse from './Lesson1/photo/hors.jpg';
import rabbit from './Lesson1/photo/rabbit.jpg';
import Counter from './Lesson2/Counter';

function App() {
  return (
    <div>
        <Counter />
       {/* <div>   
           <h1 className="head">Animals</h1>
        </div>
        <Print name="Fox" color="orange" type="wild" photo={fox} home="forest" more="https://en.wikipedia.org/wiki/Fox"/>
        <Print name=" Wolf" color="grey" type="wild" photo={wolf} home="forest" more="https://en.wikipedia.org/wiki/Wolf"/>
        <Print name=" Bear" color="grey, white" type="wild" photo={bear} home="forest" more="https://en.wikipedia.org/wiki/bear"/>
        <Print name="Horse" color="black, white, braun" type="wild" photo={horse} home="forest" more="https://en.wikipedia.org/wiki/horse"/>
        <Print name="Rabbit" color="grey, white" type="wild" photo={rabbit} home="forest" more="https://en.wikipedia.org/wiki/rabbit"/> */}
    </div>
  );
}

export default App;
