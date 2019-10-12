import React from 'react';
import {Text, StyleSheet, View} from 'react-native';


const CompenentsScreen = () => {

    const myName = <Text style={styles.myName}> Hello myname is JOhn </Text>
    return (
        <View> 
            <Text style={styles.textStyle}>getting started with react native !!!</Text>
            {myName}
        </View>
    );

};

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 45,  
    }, 

    myName: {
        fontSize: 24,
    },
});

export default CompenentsScreen;