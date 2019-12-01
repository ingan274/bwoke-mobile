import React, { Component } from 'react';
import Colors from '../constants/Colors';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function Button(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.blue,
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.blue4,
        marginBottom: 250,
        marginTop: 30,
    },
    text: {
        color: 'white',
        textAlign: "center",
        height: 20
    }
});

export default Button;