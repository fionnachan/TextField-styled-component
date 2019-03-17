import React from 'react';

import { Text } from '../../components/TextField/styles';
import { TextField } from '../../components/TextField/';
import { StyledTextField, FormRow } from './styles';

class Form extends React.Component {
  state = {
    values: {
      field1: "Yeah I am a reusable component!",
      field2: ""
    }
  }

  onChange = event => {
    const newValuesObj = Object.assign({}, this.state.values, {
      [event.target.name]: event.target.value
    });
    this.setState({
      values: newValuesObj
    });
  }

  render() {
    return (
      <React.Fragment>
        <FormRow>
          <TextField
            name="field1"
            type="text"
            value={this.state.values.field1}
            placeholder="Sexy Controlled Text Field"
            onChange={this.onChange}
          />
          <Text>
            <span>New Value: </span>
            <span>{this.state.values.field1}</span>
          </Text>
        </FormRow>
        <FormRow>
          <TextField
            name="field2"
            type="text"
            value={this.state.values.field2}
            placeholder="I have an error!"
            hasError="This is a required field!"
            onChange={this.onChange}
            isTouched
          />
        </FormRow>
        <FormRow>
          <StyledTextField
            name="field3"
            type="text"
            placeholder="I know I am special yeahhhh baby"
          />
        </FormRow>
      </React.Fragment>
    )
  }
}

export {
  Form
};