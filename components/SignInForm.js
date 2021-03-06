import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-5f416.cloudfunctions.net'

class SignInForm extends Component {
  state = { phone: '', code: ''};

  handleSubmit = async () => {
    try {
      let response = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone,
        code: this.state.code
      });
      console.log(response);
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <TextInput
            value={this.state.phone}
            onChangeText={ phone => this.setState({ phone }) }
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code</FormLabel>
          <TextInput
            value={this.state.code}
            onChangeText={ code => this.setState({ code }) }
          />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    )
  }
}

export default SignInForm;
