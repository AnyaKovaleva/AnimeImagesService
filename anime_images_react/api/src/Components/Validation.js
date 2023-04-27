


import React, {useEffect, useState} from 'react';

function Validation({value, validationList}) {
    const [isEmpty, setIsEmpty] = useState(false)
    const [isDirty, setDirty] = useState(false)
    const [isNotNum, setIsNotNum] = useState(false)

    useEffect(()=>{
        for (const val in validationList){
            switch (validationList[val]) {
                case "isEmpty":
                    if (value == null || value.length == 0) {
                        setIsEmpty(true)
                    } else {
                        setDirty(true)
                        setIsEmpty(false)
                    }
                    break
                case "isNotNum":
                    if (isNaN(value)){
                        setIsNotNum(true)
                    } else {
                        setIsNotNum(false)
                    }
                    break
            }
        }
    }, [value])

    return (
        <div>
            {
                isDirty&&(
                    isEmpty&&<div className={"text-error"}>{"required"}</div> ||
                    isNotNum&&<div className={"text-error"}>{"must be a num"}</div>
                ) ||
                !isDirty&&(
                    <div className={"to-required-field"}>required</div>
                )
            }
        </div>
    );
}

export default Validation;