import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  
    const [task,setTask]=useState();
    const [taskItems,setTaskItems]=useState([]);

    const handleAddTask=()=>{
        Keyboard.dismiss();
        setTaskItems([...taskItems,task])
        setTask(null);
    }

    const completeTask=(index)=>{
      let itemsCopy=[...taskItems];
      itemsCopy.splice(index,1);
      setTaskItems(itemsCopy)
    }
  

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        {/* Heading  */}
        <Text style={styles.sectionTitle}>Today's tasks:</Text>

        <View style={styles.items}>
          {/* Tasks go here */}
          <Task text={'Start here!'}></Task>

          {
            taskItems.map((item,index)=>{
              return (
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
            )})
          }

        </View>
      </View>  

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS==="ios"?"padding":"height"}
        style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Write a task...'} value={task} onChangeText={text=>setTask(text)}></TextInput>
        
        <TouchableOpacity onPress={()=>handleAddTask()}>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

// Styling goes here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bec7ff',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
    color:'#020300'
  },
  items:{
    marginTop:20
  },
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
      paddingLeft:17,
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
      backgroundColor:'#ffffff',
      borderRadius:70,
      justifyContent:'center',
      alignItems:'center',
      borderColor:'#c0c0c0',
      borderWidth:1,
  },
  addText:{},
});
