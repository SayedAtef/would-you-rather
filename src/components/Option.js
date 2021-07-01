import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Option = ({ option, optionPercent, text }) => {
  return (
    <div>
      <div>
        <h5 className="card-title">{option.text} </h5>
        <small className="text-muted">{text}</small>
      </div>
      <ProgressBar
        now={optionPercent}
        label={`${optionPercent}%`}
        variant="info"
      />
    </div>
  );
};

export default Option;
