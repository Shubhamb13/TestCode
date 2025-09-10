import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

export default function SignUp({navigation}) {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    function handleLogin(){
        navigation.replace('Login');
    }

    function handleSignup(){
     auth().createUserWithEmailAndPassword(email,password)
     .then(()=>navigation.replace('Login'))
     .catch(error=>alert(error.message))
    }
  return (
    <View style={styles.container}>
      
      <TextInput
       style={styles.input}
      placeholder='Your Email'
      value={email}
      onChangeText={setEmail}
      />
      <TextInput
       style={styles.input}
      placeholder='Your Password'
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      />
      <Button title='SignUp' onPress={handleSignup}/>
      <View style={{ marginTop: 10 }}>
        <Button title='Already have an account? Log In' onPress={handleLogin} />
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10 },
});