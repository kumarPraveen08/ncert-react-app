import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ListItem = props => {
  const {item, screen, loaded, setLoaded, interstitial} = props;
  const navigation = useNavigation();
  const handleClick = ({item}) => {
    if (loaded) {
      interstitial.show();
      setLoaded(false);
    }
    navigation.navigate(screen, {item});
  };

  return (
    <TouchableOpacity
      key={item?.name}
      style={styles.item}
      onPress={() => handleClick({item})}>
      <View style={styles.badge}></View>
      <View style={styles.meta}>
        <Text style={styles.text}>{item?.name}</Text>
        <Text>Go</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
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
