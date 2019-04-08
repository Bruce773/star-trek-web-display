import React, { Component } from 'react';
import './App.css';
import Button from './Button.jsx';
import Cap from './Cap.jsx';
import HeadingDisplay from './HeadingDisplay.jsx';
import HeadingControls from './HeadingControls.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading1: 0,
      heading2: 0,
      heading3: 0,
    };
  }

  increaseHeading(heading) {
    this.setState((state) => ({
      [heading]: this.state[heading] + 1,
    }));
    // console.log(this.state, this.state[heading]);
  }

  decreaseHeading(heading) {
    this.setState((state) => ({
      [heading]: this.state[heading] - 1,
    }));
    // console.log(this.state, this.state[heading]);
  }

  resetHeading() {
    this.setState((state) => ({
      heading1: 0,
      heading2: 0,
      heading3: 0,
    }));
  }

  render() {
    return (
      <div className="App">
        <div>
          <div
            style={{
              backgroundColor: 'rgb(229, 199, 71)',
              width: '50%',
              height: '40px',
              display: 'inline-block',
              borderRadius: '50px 0px 0px 0px',
              marginLeft: '10px',
              marginRight: '5px',
              marginTop: '5px',
              textAlign: 'left',
            }}
          />
          <h1 style={{ display: 'inline' }}>LCARS Web Interface</h1>
          <div
            style={{
              backgroundColor: 'rgb(229, 199, 71)',
              width: '25%',
              height: '40px',
              display: 'inline-block',
              borderRadius: '0px 10px 10px 0px',
              marginLeft: '10px',
              marginRight: '5px',
              marginTop: '5px',
              textAlign: 'right',
            }}
          />
        </div>
        <div className="row">
          <div className="col-md-4">
            <Button type={'md'} buttonContent={'4586'} color={'orange'} />
            <Button type={'md'} buttonContent={'458263'} color={'tan'} />
            <Button type={'md'} buttonContent={'7552831'} color={'orange'} />
            <div style={{ width: '50%', margin: 'auto' }}>
              <HeadingControls
                increaseHeading={this.increaseHeading.bind(this)}
                decreaseHeading={this.decreaseHeading.bind(this)}
              />
            </div>
            <Button
              type={'md'}
              buttonContent={'Reset'}
              color={'tan'}
              caps={'false'}
              clickHandler={this.resetHeading.bind(this)}
            />
          </div>
          <div className="col-md-4">
            <h2>Heading:</h2>
            <HeadingDisplay state={this.state} />
            <Button type={'md'} buttonContent={'4586'} color={'orange'} />
            <Button type={'md'} buttonContent={'458263'} color={'tan'} />
            <Button type={'md'} buttonContent={'7552831'} color={'orange'} />
          </div>
          <div className="col-md-4">
            <Button
              type={'md'}
              buttonContent={'Engage Warp Speed'}
              color={'lightblue'}
              fontColor={'black'}
            />
            <Button
              type={'md'}
              buttonContent={'Engage Impulse Engines'}
              color={'tan'}
              fontColor={'black'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
