import React from 'react';
import { StyleSheet, View } from 'react-native';

const Body = ({children}) => {
    return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1005AD",        
        margin: 16,
    },
});

export default Body;