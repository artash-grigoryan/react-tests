import React from "react";

function Checkbox({label, checked, onChange}) {
    checked = checked || false;

    return (
        <div className="checkbox">
            <input id={label} type="checkbox" checked={checked} onChange={onChange}/>
            <label htmlFor={label}>{label}</label>
        </div>
    );
}

export default Checkbox;
