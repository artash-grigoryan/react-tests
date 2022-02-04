import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

const Checkboxes = () => {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkboxStatuses, setCheckBoxStatuses] = useState([]);

  useEffect(() => {
    initStatuses(false);
  }, []);

  useEffect(() => {
    setCheckedAll(!checkboxStatuses.some((checked) => !checked));
  }, [checkboxStatuses]);
  const initStatuses = (status) => {
    setCheckBoxStatuses(new Array(5).fill(status));
  };
  const toggleCheckboxStatuses = () => {
    initStatuses(!checkedAll);
  };
  const checkCheckboxByIndex = (index) => {
    setCheckBoxStatuses(
      checkboxStatuses.map((checked, key) =>
        key === index ? !checked : checked
      )
    );
  };

  return (
    <>
      <h1>[front/react] Checkboxes</h1>
      <div className={"flex-box"}>
        <Checkbox
          label={"Select all"}
          checked={checkedAll}
          onChange={toggleCheckboxStatuses}
        />
        {checkboxStatuses.length > 0 &&
          checkboxStatuses.map((checked, key) => (
            <Checkbox
              key={key}
              label={`Item ${key}`}
              checked={checked}
              onChange={() => checkCheckboxByIndex(key)}
            />
          ))}
      </div>
    </>
  );
};

export default Checkboxes;
