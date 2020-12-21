import React, {useEffect, useState} from "react";
import Checkbox from "../components/Checkbox";

const Checkboxes = () => {
    let [checkedAll, setCheckedAll] = useState(false);
    let [checkboxStatuses, setCheckBoxStatuses] = useState({});

    useEffect(() => {
        initStatuses(false);
    }, []);

    useEffect(() => {
        let allChecked = true;
        Object.keys(checkboxStatuses).forEach((index) => {
            if (!checkboxStatuses[index]) {
                allChecked = false
            }
        });
        setCheckedAll(allChecked);
    }, [checkboxStatuses]);

    const initStatuses = (status) => {
        let initialCheckboxStatuses = {};
        new Array(5).fill(status).map((value, index) => {
            initialCheckboxStatuses = {
                ...initialCheckboxStatuses,
                [index]: value
            };
        });
        setCheckBoxStatuses(initialCheckboxStatuses);
    };
    const toggleCheckboxStatuses = () => {

        initStatuses(!checkedAll)
    };
    const checkCheckboxByIndex = (index) => {
        setCheckBoxStatuses({
            ...checkboxStatuses,
            [index]: !checkboxStatuses[index]
        });
    };


    return (
        <>
            <h1>[front/react] Checkboxes</h1>
            <div className={"flex-box"}>
                <Checkbox label={"Select all"} checked={checkedAll} onChange={toggleCheckboxStatuses}/>
                {
                    Object.keys(checkboxStatuses).length > 0 &&
                    Object.keys(checkboxStatuses).map((index) => (
                        <Checkbox key={index} label={`Item ${parseInt(index) + 1}`}
                                  checked={checkboxStatuses[index]}
                                  onChange={() => checkCheckboxByIndex(index)}/>
                    ))
                }
            </div>
        </>
    );
};

export default Checkboxes;
