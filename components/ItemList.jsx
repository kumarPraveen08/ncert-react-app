import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';

import ListItem from './ListItem';

import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-5874253013765779/9355253751';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});

const ItemList = props => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );

    interstitial.load();

    if (!loaded) {
      unsubscribe();
    }

    return unsubscribe;
  }, []);

  const {data, screen} = props;
  const RenderItem = ({item}) => {
    return (
      <ListItem
        item={item}
        screen={screen}
        loaded={loaded}
        setLoaded={setLoaded}
        interstitial={interstitial}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderItem}
        ItemSeparatorComponent={<View style={{height: 10}}></View>}
        ListHeaderComponent={<View style={{height: 10}}></View>}
        ListFooterComponent={<View style={{height: 10}}></View>}
        ListEmptyComponent={<Text style={{fontSize: 28}}>No items found</Text>}
      />
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#18222c',
  },
});
