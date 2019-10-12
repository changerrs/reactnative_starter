import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="Forest"
                imageSource={require("../../assets/forest.jpg")}
                score="3"
            />
            <ImageDetail
                title="Beach"
                score="9"
                imageSource={require("../../assets/beach.jpg")}
            />
            <ImageDetail
                title="Mountains"
                imageSource={require("../../assets/mountain.jpg")}
                score="8"
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;
