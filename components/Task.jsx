 import React, {useState} from 'react'
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'

const Task = (props) => {
    const [task,setTask]=useState();
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>

    
  )
}

const styles=StyleSheet.create({
    item: {
        backgroundColor:'#ffffff',
        padding: 15,
        borderRadius:11,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#8E94F2',
        opacity:0.4,
        borderRadius:5,
        marginRight:12
    },
    itemText:{
        color:'#2a3d45',
        font:'',
        maxWidth:'80%'
    },
    circular:{
        width:16,
        height:16,
        borderColor:'#749eff',
        borderWidth:3,
        borderRadius:50

    },
 })

export default Task