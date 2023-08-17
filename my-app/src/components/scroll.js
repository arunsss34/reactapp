import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Product from './Product'

class ZoomExample extends React.Component {
  render() {
    return (
      <div>
        <Zoom left>
        <Product/>
        </Zoom>
      </div>
    );

  }
}

export default ZoomExample;