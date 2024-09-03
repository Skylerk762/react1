import { Text, View, TextInput, Pressable} from "react-native";
import {styles } from '../src/Style';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {auth} from '../src/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "expo-router";

export default function Index() {
const [userMail, setUserMail] = useState('');
const[userPass, setUserPass] = useState('');
const router = useRouter();

function userLogin(){
  signInWithEmailAndPassword (auth,userMail, userPass)
  .then((userCredential) =>{
    const user = userCredential.user;
    router.replace("/home")
  })
  .catch((error)=>{
    const errorCode= error.code;
    const errorMessage = error.message;
    alert (errorMessage);
  })
}

  return (
    
    <View style = {styles.container}>
      <Text style={styles.formTitle}>Administração escolar</Text>
      <TextInput style ={styles.formInput} 
      placeholder="Informe o E-mail"
      keyboardType = "email-address"
      autoCapitalize = "none"
      autoComplete = "email"
      value={userMail}
      onChangeText={setUserMail}>
      </TextInput>
      
      <TextInput style = {styles.formInput}
      placeholder="Informe a senha"
      autoCapitalize="none"
      secureTextEntry
     value={userPass}
     onChangeText={setUserPass} >

      </TextInput>
      <Pressable style = {styles.formButton} 
      onPress={userLogin}>
        
        <Text style=  {styles.textButton}>Entrar</Text>
        </Pressable>
        <View style = {styles.subContainer}>
          <Pressable style = {styles.subButton}> 
            <Text style = {styles.subTextButton}>Esqueci a senha</Text>
          </Pressable>
          <Pressable style = {styles.subButton}>
            <Text style = {styles.subTextButton}>Novo usuario</Text>
          </Pressable> 
        </View>
          
        <View style = {styles.subContainer}>
          <Pressable style = {styles.subButton}>
          <Text style = {styles.subTextButton}>Administração</Text>
          </Pressable>
        </View>
    
      
    </View>
  );
}