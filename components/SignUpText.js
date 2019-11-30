import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
    state = {
        email: '',
        username: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handleUsername = (text) => {
        this.setState({ username: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    // login = (email, pass) => {
    //     alert('email: ' + email + ' password: ' + pass)
    // }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#00aeef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} 
                    textAlign={'center'}
                    />
                    

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Username"
                    placeholderTextColor="#00aeef"
                    autoCapitalize="none"
                    onChangeText={this.handleUsername} 
                    textAlign={'center'}
                    />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#00aeef"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword} 
                    textAlign={'center'}
                    />
            </View>
        )
    }
}
export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        textAlign: 'center',
        alignItems: 'center',
    },
    input: {
        margin: 10,
        height: 50,
        width: "80%",
        borderBottomColor: '#fff', 
        borderBottomWidth: 2,
    },
})