import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TextCentral({children, corFundo}){


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: corFundo || 'black'
        },
        text: {
            fontSize: 50, 
        }
    });



    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {children}
            </Text>
        </View>
    );
} 


