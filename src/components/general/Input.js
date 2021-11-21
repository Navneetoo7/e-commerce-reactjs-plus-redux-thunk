import React from "react";
import proTypes from "prop-types";

const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div>
      <div className="form-group">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
Input.protoType = {
  name: proTypes.string,
  placeholder: proTypes.string,
  value: proTypes.string.isRequired,
  type: proTypes.string.isRequired,
  onChange: proTypes.func.isRequired,
};
export default Input;
