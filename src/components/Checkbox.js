import React from "react";
import PropTypes from "prop-types";

function Checkbox({ label, checked, onChange }) {
  checked = checked || false;

  return (
    <div className="checkbox">
      <input id={label} type="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
export default Checkbox;
