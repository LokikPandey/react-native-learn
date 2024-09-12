import React from "react";
import { SafeAreaView,Text,StyleSheet, View,useColorScheme}   from "react-native";

function App():JSX.Element {
  const isDark = useColorScheme()==='dark';
  console.log(isDark);
  return(
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Text style={isDark ? styles.whitetext:styles.darktext}>Hello World!</Text>
        <Text>{isDark ? 'hi' : 'bye'}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safearea:{
    flex:1
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
  whitetext:{
    color:'#ffffff',
    fontSize:24
  },
  darktext:{
    color:'#000000',
    fontSize:24
  }
});

export default App;