import React from "react";

import {View, Text, FlatList, StyleSheet} from "react-native"

export default function Home(){
    return(
        <View>
            <View style={{flex:1, alignItems: 'center'}}>
                <Text style={style.titulo}>Bem vindo(a)!!</Text>
            </View>
            <View>
                <Text style={style.titulo}>Bem vindo(a)!!</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    titulo:{
        fontWeight: 'bold',
        paddingTop: 20,
        fontSize: 20
    }
});