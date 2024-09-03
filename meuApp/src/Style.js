import { StyleSheet } from "react-native"
import styled from 'styled-components'
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent:'center',
    },
    homeTitle:{
        fontSize : 30,
        fontWeight: 'bold',
        color: 'blue',
        
    },
    formTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'blue',
        margin:10,
        
    },
    formInput:{
        borderColor:'blue',
        borderWidth:1,
        borderRadius:10,
        fontSize: 22,
        width :'80%',
        padding :10,
        margin:10,
    },
    formButton:{
        backgroundColor: 'blue',
        width: '80%',
        margin: 10,
        padding :10,
        borderRadius: 10,
        alignItems: 'center',
    },
    textButton:{
        color:'white',
        fontSize:20,
        fontWeight: 'bold',

    },
    subContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    subButton:{
        padding:10,
    },
    subTextButton:{
        color:'blueviolet',
        alignItems:'center',
    },
    modalButton:{
        flex:1,
        width:100,
        backgroundColor:'blue',
        marginBottom:5,
        padding: 5,
        borderRadius:20,
        shadowRadius :1,
        justifyContent:'space-between',
        flexDirection:'row',
        
    },
    modalButton2:{
        backgroundColor:'blue',
        padding:10,
        borderRadius:10,
        verticalAlign:'top',
        
    }
})