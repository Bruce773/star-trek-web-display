import React from 'react';

const Button = (props) => {
  var onClickHandler = () => {
    // console.log(this);
    if (props.clickHandler) {
      props.clickHandler(props.headingVal);
    }
  };

  let capsDisplay = '2px';

  let capsBoolean = true;
  if (props.caps === 'false') {
    capsBoolean = false;
  }

  if (capsBoolean === true) {
    capsDisplay = '2px';
  } else {
    capsDisplay = '0px';
  }

  return (
    <div className={'button'} onClick={onClickHandler}>
      <div
        className={`${props.type}-button-cap-left`}
        style={{
          backgroundColor: `${props.color}`,
          color: `${props.color}`,
          marginRight: `${capsDisplay}`,
        }}
      >
        _
      </div>
      <div
        className={`${props.type}-button`}
        style={{
          backgroundColor: `${props.color}`,
          color: `${props.fontColor}`,
        }}
      >
        {props.buttonContent}
      </div>
      <div
        className={`${props.type}-button-cap-right`}
        style={{
          backgroundColor: `${props.color}`,
          color: `${props.color}`,
          marginLeft: `${capsDisplay}`,
        }}
      >
        _
      </div>
    </div>
  );
};

export default Button;
