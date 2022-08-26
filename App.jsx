import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import WriteTask from './components/WriteTask';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        {/* Heading  */}
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* Tasks go here */}
          <Task text={'Task 1'}></Task>
          <Task text={'Task 2'}></Task>
        </View>
      </View>  

      {/* Write a task */}
      <WriteTask/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf4ff',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:20
  }
});
