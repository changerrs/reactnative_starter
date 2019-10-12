import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const COLOR_INCREMENT_NEGATIVE = -15;

//we put this outside because we would have 2 state objects in squarescreen
// action - how should we change our state object.
const reducer = (state, action) => {
    //state === {red: number, green: number, blue: number}
    //action === {colorToChange: 'red' || 'blue'  || 'green', amount: 15 || -15}

    switch (action.colorToChange) {
        case "red":
            //never going to do state.red = state.red - 15; WE never modify state value directly.
            return { ...state, red: state.red + action.amount };
        case "green":
            return { ...state, green: state.green + action.amount };
        case "blue":
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};

const SquareScreen = ({ imageSource, title, score }) => {
    const [state, dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0,
    });

    const { red, green, blue } = state;
    console.log(state); // => {red:0, green:0, blue:0

    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() =>
                    dispatch({
                        colorToChange: "red",
                        amount: COLOR_INCREMENT,
                    })
                }
                onDecrease={() =>
                    dispatch({
                        colorToChange: "red",
                        amount: COLOR_INCREMENT_NEGATIVE,
                    })
                }
            />
            <ColorCounter
                color="Blue"
                onIncrease={() =>
                    dispatch({
                        colorToChange: "blue",
                        amount: COLOR_INCREMENT,
                    })
                }
                onDecrease={() =>
                    dispatch({
                        colorToChange: "blue",
                        amount: COLOR_INCREMENT_NEGATIVE,
                    })
                }
            />
            <ColorCounter
                color="Green"
                onIncrease={() =>
                    dispatch({
                        colorToChange: "green",
                        amount: COLOR_INCREMENT,
                    })
                }
                onDecrease={() =>
                    dispatch({
                        colorToChange: "green",
                        amount: COLOR_INCREMENT_NEGATIVE,
                    })
                }
            />
            <View
                style={{
                    marginTop: 25,
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                }}
            ></View>
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

export default SquareScreen;
