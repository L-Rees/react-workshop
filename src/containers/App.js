import React, { Component } from 'react';
import Headline from '../components/Headline/Headline'
 
class App extends Component {
  render() {
    return (
      <div>
        <section>
          <Headline isColor={true} text={"This is pink"}/>
         
        </section>
        
        <p>
          This shouldn't be styled
        </p>
      </div>
    );
  }
}
export default App;