import React from 'react';

const HeadingDisplay = (props) => (
  <h2 className={'heading'}>
    <div className={'headingNum heading-1'}>{props.state.heading1}</div>.
    <div className={'headingNum heading-2'}>{props.state.heading2}</div>.
    <div className={'headingNum heading-3'}>{props.state.heading3}</div>
  </h2>
);

export default HeadingDisplay;
