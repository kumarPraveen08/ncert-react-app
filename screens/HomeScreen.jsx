import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  const level = [
    {id: 1, class: '1st'},
    {id: 2, class: '2nd'},
    {id: 3, class: '3rd'},
    {id: 4, class: '4th'},
    {id: 5, class: '5th'},
    {id: 6, class: '6th'},
    {id: 7, class: '7th'},
    {id: 8, class: '8th'},
    {id: 9, class: '9th'},
    {id: 10, class: '10th'},
    {id: 11, class: '11th'},
    {id: 12, class: '12th'},
  ];
  const navigation = useNavigation();
  const handleClick = ({item}) =>
    navigation.navigate('View', {id: item?.id, activeClass: item?.class});
  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item?.id}
        style={styles.item}
        onPress={() => handleClick({item})}>
        <View style={styles.badge}>
          {/* <Text style={styles.text}>{item?.id}</Text> */}
        </View>
        <View style={styles.meta}>
          <Text style={styles.text}>{item?.class} Class</Text>
          <AntDesign name="arrowright" size={24} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={level}
        renderItem={RenderItem}
        keyExtractor={(item, index) => item.id.toString()}
        ItemSeparatorComponent={<View style={{height: 10}}></View>}
        ListHeaderComponent={<View style={{height: 10}}></View>}
        ListFooterComponent={<View style={{height: 10}}></View>}
        ListEmptyComponent={<Text style={{fontSize: 28}}>No items found</Text>}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#18222c',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#484848',
    borderRadius: 15,
    marginHorizontal: 10,
  },
  badge: {
    width: 12,
    height: 12,
    backgroundColor: '#34d49c',
    borderRadius: 6,
    marginTop: 12,
  },
  meta: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 24,
  },
  go: {
    fontSize: 18,
    color: 'white',
  },
});
