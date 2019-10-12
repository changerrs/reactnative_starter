import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = ({ imageSource, title, score }) => {
    const [counter, setCounter] = useState(0);
    console.log("RENDER!!!!");
    return (
        <View>
            <Button
                title="Increase"
                onPress={() => {
                    //BAD
                    //counter++;
                    setCounter(counter + 1);
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    // counter--;
                    setCounter(counter - 1);
                }}
            />
            <Text> Current Count: {counter} </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
