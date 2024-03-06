import { Button, FormGroup } from "@mui/material";
import React, { useState } from "react";
import Checkbox from "./widgets/Checkbox";
import Dropdown from "./widgets/DropDown";
import TextForm from "./widgets/TextForm";


const Preinfo = () => {
    const titles = [
        { id: 1, th: 'นาย', en: 'Mr.' },
        { id: 2, th: 'นาง', en: 'Mrs.' },
        { id: 3, th: 'นางสาว', en: 'Miss.' },
    ]

    const [preinfo, setPreinfo] = useState({
        thTitle: '',
        isthTitleError: false,
        enTitle: '',
        isenTitleError: false,
        thFirstName: '',
        isthFirstNameError: false,
        thLastName: '',
        isthLastNameError: false,
        enFirstName: '',
        isenFirstNameError: false,
        enLastName: '',
        isenLastNameError: false,
        email: '',
        isemailError: false,
        mobile: '',
        ismobileError: false,
        checkbox: false,
        ischeckboxError: false,
    })

    const validatethTitle = () => {
        if (preinfo.thTitle === '') {
            setPreinfo(e => ({ ...e, isthTitleError: true }))
        } else {
            setPreinfo(e => ({ ...e, isthTitleError: false }))
        }
    }
    const validatethFirstName = () => {
        if (preinfo.thFirstName === '') {
            setPreinfo(e => ({ ...e, isthFirstNameError: true }))
        } else {
            setPreinfo(e => ({ ...e, isthFirstNameError: false }))
        }
    }
    const validatethLastName = () => {
        if (preinfo.thLastName === '') {
            setPreinfo(e => ({ ...e, isthLastNameError: true }))
        } else {
            setPreinfo(e => ({ ...e, isthLastNameError: false }))
        }
    }

    const validateenTitle = () => {
        if (preinfo.enTitle === '') {
            setPreinfo(e => ({ ...e, isenTitleError: true }))
        } else {
            setPreinfo(e => ({ ...e, isenTitleError: false }))
        }
    }
    const validateenFirstName = () => {
        if (preinfo.enFirstName === '') {
            setPreinfo(e => ({ ...e, isenFirstNameError: true }))
        } else {
            setPreinfo(e => ({ ...e, isenFirstNameError: false }))
        }
    }
    const validateenLastName = () => {
        if (preinfo.enLastName === '') {
            setPreinfo(e => ({ ...e, isenLastNameError: true }))
        } else {
            setPreinfo(e => ({ ...e, isenLastNameError: false }))
        }
    }

    const validateemail = () => {
        if (preinfo.email === '') {
            setPreinfo(e => ({ ...e, isemailError: true }))
        } else {
            setPreinfo(e => ({ ...e, isemailError: false }))
        }
    }
    const validatemobile = () => {
        if (preinfo.mobile === '') {
            setPreinfo(e => ({ ...e, ismobileError: true }))
        } else {
            setPreinfo(e => ({ ...e, ismobileError: false }))
        }
    }
    const validatecheckbox = () => {
        if (preinfo.checkbox === false) {
            setPreinfo(e => ({ ...e, ischeckboxError: true }))
        } else {
            setPreinfo(e => ({ ...e, ischeckboxError: false }))
        }
    }

    const handlethFirstName = (text) => {
        setPreinfo(e => ({ ...e, thFirstName: text }))
    }
    const handlethLastName = (text) => {
        setPreinfo(e => ({ ...e, thLastName: text }))
    }
    const handleenFirstName = (text) => {
        setPreinfo(e => ({ ...e, enFirstName: text }))
    }
    const handleenLastName = (text) => {
        setPreinfo(e => ({ ...e, enLastName: text }))
    }
    const handleemail = (text) => {
        setPreinfo(e => ({ ...e, email: text }))
    }
    const handlemobile = (text) => {
        setPreinfo(e => ({ ...e, mobile: text }))
    }
    const handlecheckbox = (text) => {
        console.log(setPreinfo.checkbox)
        setPreinfo(e => ({ ...e, checkbox: !text }))
        console.log(setPreinfo.checkbox)
    }

    const validate = () => {
        validatethTitle(),
            validatethFirstName(),
            validatethLastName()
        validateenTitle(),
            validateenFirstName(),
            validateenLastName()
        validateemail(),
            validatemobile(),
            validatecheckbox()
    }

    const handleThTitleChange = (text) => {
        console.log(`th title: ${text}`)
        setPreinfo(e => ({ ...e, thTitle: text }))
        if (text === 'นาย') {
            // setPreinfo(e => ({ ...e, enTitle: 'Mr' }))
            handleEnTitleChange('Mr')
            console.log(`en title: ${preinfo.enTitle}`)
        }
        if (text === 'นาง') {
            // setPreinfo(e => ({ ...e, enTitle: 'Mrs' }))
            handleEnTitleChange('Mrs')
            console.log(`en title: ${preinfo.enTitle}`)
        }
        if (text === 'นางสาว') {
            // setPreinfo(e => ({ ...e, enTitle: 'Miss' }))
            handleEnTitleChange('Miss')
            console.log(`en title: ${preinfo.enTitle}`)
        }
    }

    const handleEnTitleChange = (text) => {
        console.log(`en title: ${text}`)
        setPreinfo(e => ({ ...e, enTitle: text }))
        if (text === 'Mr') {
            setPreinfo(e => ({ ...e, thTitle: 'นาย' }))
        }
        if (text === 'Mrs') {
            setPreinfo(e => ({ ...e, thTitle: 'นาง' }))
        }
        if (text === 'Miss') {
            setPreinfo(e => ({ ...e, thTitle: 'นางสาว' }))
        }
    }

    function handleDropdown(obj) {
        console.log(`app callback value ${obj.id} || ${obj.th} || ${obj.en}`);
        setPreinfo((e) => {
            console.log('Input value:', { ...e, enTitle: obj.en, thTitle: obj.th });
            return { ...e, enTitle: obj.en, thTitle: obj.th };
        });
    }


    return (
        <>
            <div>
                <Dropdown title={`คำนำหน้าชื่อ (ภาษาไทย)`} options={titles} onChange={handleDropdown} value={preinfo.thTitle} isError={preinfo.isthTitleError} lang={'th'} />
            </div>
            <FormGroup>
                <div>
                    <TextForm title={`ชื่อ (ภาษาไทย)`} value={preinfo.thFirstName} onchange={handlethFirstName} isError={preinfo.isthFirstNameError} filter={/[^ก-๙ ]/g} />
                </div>
                <div>
                    <TextForm title={`ชื่อสกุล (ภาษาไทย)`} value={preinfo.thLastName} onchange={handlethLastName} isError={preinfo.isthLastNameError} filter={/[^ก-๙ ]/g} />
                </div>
            </FormGroup>
            <div>
                <Dropdown title={`คำนำหน้าชื่อ (ภาษาอังกฤษ)`} options={titles} onChange={handleDropdown} value={preinfo.enTitle} isError={preinfo.isenTitleError} />
            </div>
            <FormGroup>
                <div>
                    <TextForm title={`ชื่อ (ภาษาอังกฤษ)`} value={preinfo.enFirstName} onchange={handleenFirstName} isError={preinfo.isenFirstNameError} filter={/[^a-zA-Z ]/g} />
                </div>
                <div>
                    <TextForm title={`ชื่อสกุล (ภาษาอังกฤษ)`} value={preinfo.enLastName} onchange={handleenLastName} isError={preinfo.isenLastNameError} filter={/[^a-zA-Z ]/g} />
                </div>
            </FormGroup>
            <FormGroup>
                <div>
                    <TextForm title={`อีเมล`} value={preinfo.email} onchange={handleemail} isError={preinfo.isemailError} filter={/[^a-zA-Z0-9@.]/g} />
                </div>
                <div>
                    <TextForm title={`หมายเลขโทรศัพท์มือถือ`} value={preinfo.mobile} onchange={handlemobile} isError={preinfo.ismobileError} filter={/[^0-9]/g} />
                </div>
            </FormGroup>
            <div>
                <Checkbox value={preinfo.checkbox} onChange={(e) =>handlecheckbox(e)} text={`agreement`} isError={preinfo.isError} />
            </div>
            <Button onClick={validate}>Submit</Button>
        </>
    )

}

export default Preinfo
