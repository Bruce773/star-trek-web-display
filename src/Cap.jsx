import React from 'react';

const Cap = (props) => (
  <div
    className={`${props.type}-button-cap-${props.direction}`}
    style={{
      backgroundColor: `${props.color}`,
      color: `${props.color}`,
      fontSize: `${props.fontSize}`,
      padding: '5px',
    }}
  >
    _
  </div>
);

export default Cap;
