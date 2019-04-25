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
      temp: 0,
    };

    this.getTemperature = this.getTemperature.bind(this);
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

  getTemperature() {
    let celTemp = E.getTemperature();
    let normalTemp = Math.round(celTemp * 1.8 + 32);
    return normalTemp;
  }

  render() {
    return (
      <div className="App">
        <div className="page-title-header">
          <div className="top-left-title-cap" />
          <div className="page-title-container">
            <h1 style={{ display: 'inline' }} className="page-title">
              LCARS Web Interface
            </h1>
          </div>
          <div className="top-right-title-cap" />
        </div>
        <div className="row" style={{ marginTop: '5px' }}>
          <div
            style={{ paddingLeft: '0px', width: '20px', marginTop: '0px' }}
            className="col-md-1"
          >
            <div className="header-to-body-connector" />
          </div>
          {/* First row */}
          <div className="col-md-4 column">
            <Button type={'md'} buttonContent={'4586'} color={'orange'} />
            <Button type={'md'} buttonContent={'458263'} color={'tan'} />
            <Button type={'md'} buttonContent={'7552831'} color={'orange'} />
            <h2>Temperature Readings: {this.state.temp}</h2>
            <Button
              type={'md'}
              buttonContent={'Temperature'}
              color={'orange'}
              clickHandler={this.getTemperature}
            />
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
          {/* Second row */}
          <div className="col-md-3 column">
            <h2>Heading:</h2>
            <HeadingDisplay state={this.state} />
            <div className="row" style={{ width: '80%', margin: 'auto' }}>
              <div className="col-sm-6">
                <Button type={'md'} buttonContent={'4586'} color={'orange'} />
                <Button type={'md'} buttonContent={'458263'} color={'tan'} />
                <Button
                  type={'md'}
                  buttonContent={'7552831'}
                  color={'orange'}
                />
              </div>
              <div className="col-sm-6">
                <Button type={'md'} buttonContent={'4586'} color={'orange'} />
                <Button type={'md'} buttonContent={'458263'} color={'tan'} />
                <Button
                  type={'md'}
                  buttonContent={'7552831'}
                  color={'orange'}
                />
              </div>
            </div>
          </div>
          {/* Third row */}
          <div className="col-md-3 column">
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
            <div className="row" style={{ width: '80%', margin: 'auto' }}>
              <div className="col-sm-6">
                <Button type={'md'} buttonContent={'4586'} color={'orange'} />
                <Button type={'md'} buttonContent={'458263'} color={'tan'} />
                <Button
                  type={'md'}
                  buttonContent={'7552831'}
                  color={'orange'}
                />
              </div>
              <div className="col-sm-6">
                <Button type={'md'} buttonContent={'4586'} color={'orange'} />
                <Button type={'md'} buttonContent={'458263'} color={'tan'} />
                <Button
                  type={'md'}
                  buttonContent={'7552831'}
                  color={'orange'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
