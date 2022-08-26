import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const WriteTask = () => {
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS==="ios"?"padding":"height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'}></TextInput>
        <TouchableOpacity>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
        </TouchableOpacity>
  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    writeTaskWrapper:{
        position:'absolute',
        bottom:40,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    input:{
        paddingVertical:15,
        paddingHorizontal:15,
        paddingLeft:10,
        width:250,
        backgroundColor:'#ffffff',
        borderRadius:57,
        borderColor:'#c0c0c0',
        borderWidth:1,
        width:250,
    },
    addWrapper:{
        width:60,
        height:60,
        backgroundColor:'#fffff',
        borderRadius:70,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#c0c0c0',
        borderWidth:1,
    },
    addText:{},
})

export default WriteTask