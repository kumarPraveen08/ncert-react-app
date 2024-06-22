import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {classBooks} from '../_data';

const ViewScreen = ({route, navigation}) => {
  const {id, activeClass} = route.params;

  const books = classBooks.filter(item => item?.id === id);
  const handleClick = ({item}) => navigation.navigate('Title', {item});
  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item?.id}
        style={styles.item}
        onPress={() => handleClick({item})}>
        <View style={styles.badge}></View>
        <View style={styles.meta}>
          <Text style={styles.text}>{item?.name}</Text>
          <AntDesign name="arrowright" size={24} />
        </View>
      </TouchableOpacity>
    );
  };
  // Update the screen title based on the name parameter
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Class ' + activeClass + ': All NCERT Books',
    });
  }, [navigation, activeClass]);

  return (
    <View style={styles.container}>
      <FlatList
        data={books[0]?.books}
        renderItem={RenderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={<View style={{height: 10}}></View>}
        ListHeaderComponent={<View style={{height: 10}}></View>}
        ListFooterComponent={<View style={{height: 10}}></View>}
        ListEmptyComponent={<Text style={{fontSize: 28}}>No items found</Text>}
      />
    </View>
  );
};

export default ViewScreen;

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
