import React, { Component } from 'react';
import Colors from '../constants/Colors';
import { StyleSheet, TextInput } from 'react-native';


function formInput(props) {
    return (
        <TextInput
            selectionColor={Colors.blue3}
            style={styles.textInput}
            title={props.title}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            autoCorrect={props.autoCorrect}
            keyboardType={props.keyboardType}
            autoCorrect={props.autoCorrect}
            onChangeText={props.onChangeText}
            returnKeyType={props.returnKeyType}
            onSubmitEditing={props.onSubmitEditing}
            multiline={props.multiline || false}
        />
    );
}


const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: Colors.green,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    }
});

export default formInput;