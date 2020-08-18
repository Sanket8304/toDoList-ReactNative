import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, } from 'react-native';

export default function AddToDo(props) {
    const [text, setText] = useState('');

    return(
        <View style={{ flexDirection: 'row' }}>
          <TextInput style={styles.inputStyle}
            placeholder= 'new todo'
            onChangeText = {(val) => setText(val)} 
          />
          <View>
            <Button onPress={() => props.addToDo(text)} title ='Add ToDo' color='blue' />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        flex:1,
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
})