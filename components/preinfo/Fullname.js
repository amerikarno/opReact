import React, { Component } from 'react'
import {
    FormGroup,
    FormField,
    Button,
    FormCheckbox,
    Form,
    Input,
    Select,
} from 'semantic-ui-react'

const options = [
    { key: 1, text: 'Mr.', value: 'mr' },
    { key: 2, text: 'Mrs.', value: 'mrs' },
    { key: 3, text: 'Miss', value: 'miss' },
]

class FormExampleFieldControl extends Component {
    state = { title: '', name: '', surname: '', email: '', agreement: false, submittedTitle: '', submittedName: '', submittedSurname: '', submittedEmail: '', submittedAgreement: false }
    // state = {}
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
    handleSubmit = () => {
        const { title, name, surname, email, agreement } = this.state
        this.setState({ submittedTitle: title, submittedName: name, submittedSurname: surname, submittedEmail: email, submittedAgreement: agreement })
    }
    handleClick = (e, [name, value]) => this.setState({[name]: e.target.checked})
    

    render() {
        const { title, name, surname, email, agreement, submittedTitle, submittedName, submittedSurname, submittedEmail, submittedAgreement } = this.state
        console.log('changed:', title, name, surname, email, agreement)
        console.log('submitted:', submittedTitle, submittedName, submittedSurname, submittedEmail, submittedAgreement)
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <FormField
                        control={Select}
                        label='Gender'
                        options={options}
                        placeholder='Gender'
                        name='title'
                        value={title}
                        onChange={this.handleChange}
                    />
                    <FormGroup widths='equal'>
                        <FormField
                            control={Input}
                            label='First name'
                            placeholder='First name'
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                        />
                        <FormField
                            control={Input}
                            label='Last name'
                            placeholder='Last name'
                            name='surname'
                            value={surname}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormField
                        id='form-input-control-error-email'
                        control={Input}
                        label='Email'
                        placeholder='joe@schmoe.com'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        error={{
                            content: 'Please enter a valid email address',
                        }}
                    />
                    <FormCheckbox name='agreement' value={agreement} onChange={this.handleClick} label='I agree to the Terms and Conditions' />
                    
                    <FormField control={Button}>Submit</FormField>

                </Form>
            </>
        )
    }
}

export default FormExampleFieldControl