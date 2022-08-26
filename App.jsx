import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';


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
