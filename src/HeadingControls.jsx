import React from 'react';
import Button from './Button.jsx';

const HeadingControls = (props) => (
  <div>
    <h3 className="heading-controls-title">Heading Controls</h3>
    <div className={'row'}>
      <div className={'col-sm-6'}>
        <Button
          type={'md'}
          buttonContent={'X +'}
          color={'orange'}
          clickHandler={props.increaseHeading}
          headingVal={'heading1'}
          caps={'false'}
        />
      </div>
      <div className={'col-sm-6'}>
        <Button
          type={'md'}
          buttonContent={'X -'}
          color={'orange'}
          clickHandler={props.decreaseHeading}
          headingVal={'heading1'}
          caps={'false'}
        />
      </div>
      <div className={'col-sm-6'}>
        <Button
          type={'md'}
          buttonContent={'Y +'}
          color={'orange'}
          clickHandler={props.increaseHeading}
          headingVal={'heading2'}
          caps={'false'}
        />
      </div>
      <div className={'col-sm-6'}>
        <Button
          type={'md'}
          buttonContent={'Y -'}
          color={'orange'}
          clickHandler={props.decreaseHeading}
          headingVal={'heading2'}
          caps={'false'}
        />
      </div>
      <div className={'col-sm-6'}>
        <Button
          type={'md'}
          buttonContent={'Z +'}
          color={'orange'}
          clickHandler={props.increaseHeading}
          headingVal={'heading3'}
          caps={'false'}
        />
      </div>
      <div className={'col-sm-6'}>
        <Button
          type={'md'}
          buttonContent={'Z -'}
          color={'orange'}
          clickHandler={props.decreaseHeading}
          headingVal={'heading3'}
          caps={'false'}
        />
      </div>
    </div>
  </div>
);

export default HeadingControls;
