import React from 'react';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>
                My Todos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
        marginBottom: 44,
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',

    }
});