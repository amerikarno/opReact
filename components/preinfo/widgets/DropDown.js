import React from 'react';
import { PropTypes } from 'prop-types';

const Dropdown = ({ title, options, value, onChange, isError, lang }) => {

    function getId(event) {
        const selected = event.target.value;
        console.log(`show value ${selected}`);
        const selectedOption = options.find((obtion) => obtion.th === selected || obtion.en === selected)
        console.log(selectedOption);
        onChange(selectedOption);
    }

    return (
        <>
            <div>{title}</div>
            <div>
                <select value={value} onChange={getId}>
                    {(value === '') ? <option value={value}>{value}</option> : null}
                    {options.map((option) => (
                        <option key={option.id} value={(lang === 'th') ? option.th : option.en}>
                            {(lang === 'th') ? option.th : option.en}
                        </option>
                    ))}
                </select>
            </div>
            {(isError) ? <div>กรุณาเลือก {title}</div> : null}
        </>
    );
}
Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        th: PropTypes.string,
        en: PropTypes.string,
    })),
    handleChange: PropTypes.func,
    selectedValue: PropTypes.string,
};
Dropdown.defaultProps = {
    options: {},
    handleChange: () => { },
    selectedValue: "",
};
export default Dropdown