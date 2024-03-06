import React from "react";

const TextForm = ({ title, value, onchange, isError, filter, role }) => {
    return (
        <>
            <div>
                {title}
            </div>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={
                        (e) => {
                            e.preventDefault()
                            const newValue = e.target.value
                            const filteredValue = newValue.replace(filter, '')
                            onchange(filteredValue)
                            console.log(`filtered value:`, filteredValue)
                        }
                    }
                />
            </div>
            {(isError) ? <div>กรุณากรอก {title}</div> : null}

        </>
    )

}

export default TextForm