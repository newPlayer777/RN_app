import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {CLogin} from '@comp/login/CLogin'
export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
                  
      <CLogin />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
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
});
