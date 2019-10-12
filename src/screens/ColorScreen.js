import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, FlatList } from "react-native";

const ColorScreen = ({ imageSource, title, score }) => {
    const [colors, setColors] = useState([]);
    console.log(colors);
    // console.log(props);
    return (
        <View>
            <Button
                title="Add Color"
                onPress={() => {
                    setColors([...colors, randomRGB()]);
                }}
            />

            <View
                style={{
                    height: 100,
                    width: 100,
                    backgroundColor: randomRGB(),
                }}
            />

            <FlatList
                data={colors}
                keyExtractor={item => item}
                renderItem={({ item }) => {
                    // item === rgb something
                    return (
                        <View
                            style={{
                                height: 100,
                                width: 100,
                                backgroundColor: item,
                            }}
                        />
                    );
                }}
            />
        </View>
    );
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
