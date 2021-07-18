import React from 'react';
import { Basic } from './Basic';

class Welcome extends React.Component  {
  render(){
    return (
      <div>
        <h1>Welcome</h1>
        <Basic></Basic>
      </div>
    )
  }
}

export default Welcome;
