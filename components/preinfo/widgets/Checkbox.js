import React from "react";

const Checkbox = (value, onChange, text, isError) => {

    return (
        <div>
            <input
                type="checkbox"
                value={value}
                onChange={
                    (e) => {
                        // e.preventDefalut();
                        const newValue = e.target.value
                        onChange(newValue)
                    }}
                // onClick={(e) => {
                //     onChange(e.target.value)
                // }}
            />
            <div>
                {text}
            </div>
            {(isError) ? null :
                <div>กรุณากดยอมรับ</div>

            }
        </div>
    )
}

export default Checkbox