import { View,Text, TouchableOpacity } from "react-native";
import { useRef, useState } from "react";
import{styles} from '../src/Style'
import{Modalize} from 'react-native-modalize';
export default function Home(){
    const modalizeRef = useRef(null)
    function onOpen(){
        modalizeRef.current.open();
    }

    return(
        
        <View style={styles.container}>
          <TouchableOpacity>
            <Text onPress={onOpen} style ={styles.modalButton2}>Editar turmas</Text>
            </TouchableOpacity>
            <Modalize
            ref = {modalizeRef}
            snapPoint = {180}>
                
                <View styles= {styles.subContainer}>
                    <TouchableOpacity style = {styles.subButton}>
                        <Text style = {styles.subTextButton}>Adicionar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.subButton}>
                        <Text style = {styles.subTextButton}>Excluir</Text>
          </TouchableOpacity>
                </View>
            </Modalize>
        </View>

    )

}