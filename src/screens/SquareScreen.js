import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const COLOR_INCREMENT_NEGATIVE = -15;

//we put this outside because we would have 2 state objects in squarescreen
// action - how should we change our state object.
const reducer = (state, action) => {
    //state === {red: number, green: number, blue: number}
    //action === {type: 'change_red' || 'change_blue'  || 'change_green', payload: 15 || -15}

    switch (action.type) {
        case "change_red":
            //never going to do state.red = state.red - 15; WE never modify state value directly.
            return state.red + action.payload > 255 ||
                state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload };
        case "change_green":
            return state.green + action.payload > 255 ||
                state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };
        case "change_blue":
            return state.blue + action.payload > 255 ||
                state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload };
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
                        type: "change_red",
                        payload: COLOR_INCREMENT,
                    })
                }
                onDecrease={() =>
                    dispatch({
                        type: "change_red",
                        payload: COLOR_INCREMENT_NEGATIVE,
                    })
                }
            />
            <ColorCounter
                color="Blue"
                onIncrease={() =>
                    dispatch({
                        type: "change_blue",
                        payload: COLOR_INCREMENT,
                    })
                }
                onDecrease={() =>
                    dispatch({
                        type: "change_blue",
                        payload: COLOR_INCREMENT_NEGATIVE,
                    })
                }
            />
            <ColorCounter
                color="Green"
                onIncrease={() =>
                    dispatch({
                        type: "change_green",
                        payload: COLOR_INCREMENT,
                    })
                }
                onDecrease={() =>
                    dispatch({
                        type: "change_green",
                        payload: COLOR_INCREMENT_NEGATIVE,
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
