import React from "react";
import { View, Button, TouchableOpacity, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>wow</Text>
            <Button
                title="Go to Components demo"
                onPress={() => navigation.navigate("Components")}
            />

            <Button
                title="Go to List demo"
                onPress={() => navigation.navigate("List")}
            />

            <Button
                title="Go to ImageScreen demo"
                onPress={() => navigation.navigate("ImageScreen")}
            />

            <Button
                title="Go to CounterScreen demo"
                onPress={() => navigation.navigate("CounterScreen")}
            />

            <Button
                title="Go to ColorScreen demo"
                onPress={() => navigation.navigate("ColorScreen")}
            />

            <Button
                title="Go to Square demo"
                onPress={() => navigation.navigate("Square")}
            />

            {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
                <Text>Go to list demo</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;
