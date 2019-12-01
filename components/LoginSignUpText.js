import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

function Inputs(props) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                placeholderTextColor="#00aeef"
                autoCapitalize="none"
                onChangeText={props.handle}
                textAlign={'center'}
                keyboardType={props.keyboardType}
            />
        </View>
    )
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
        height: 30,
        width: "80%",
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
    },
})