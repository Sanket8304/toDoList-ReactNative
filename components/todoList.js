import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function toDoList(props) {

    return(
        <View style={styles.listStyle}>
          {/* list */}
          <FlatList
            data={props.list}
            renderItem ={ (item) => (
            <TouchableOpacity style={styles.textStyle}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text >{item.item.text}</Text>
                <MaterialIcons onPress={ () => props.deleteToDo(item.item.key) } name="delete" size={24} color="gray" />
              </View>
            </TouchableOpacity>
            )}
          />
        </View>

    );
}

const styles = StyleSheet.create({
    listStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      textStyle: {
        flex: 1,
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 8,
      },
      
})

