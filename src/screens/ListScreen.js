import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import PropTypes from 'prop-types';


const ListScreen = () => {
    const friends = [
        {name: 'Friend1', age: '24'},
        {name: 'Friend2', age: '25'},
        {name: 'Friend3', age: '26'},
        {name: 'Friend4', age: '24'},
        {name: 'Friend5', age: '31'},
        {name: 'Friend6', age: '23'},
        {name: 'Friend7', age: '43'},
        {name: 'Friend8', age: '24'},
    ];



    return (
        <FlatList 
            keyExtractor = { (friend) => friend.name}
            data={friends} 
            renderItem={({item}) => {
                console.log(item)
                return (
                    <View>
                        <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
                    </View>
                );

            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 25,
    },  
});

export default ListScreen;
