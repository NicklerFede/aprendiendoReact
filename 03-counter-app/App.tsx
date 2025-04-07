
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';



export default function App() {

  const [count, setcount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

 { /* <Pressable 
style={styles.floatingButton}
onPress={ () => setcount(count + 1) }
onLongPress={() => setcount(0)}>
<Text style= {{color: 'white', fontSize: 20}}>+1</Text> 

</Pressable>*/}
 <FAB label="+1"
 onPress={() => setcount(count + 1)}
 onLongPress={() => setcount(0)}
 position='right'
 />

<FAB label="Reset"
 onPress={() => setcount(0)}
 position='left'
 />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

textHuge: {
fontSize: 120,
fontWeight: 100,
},

});
