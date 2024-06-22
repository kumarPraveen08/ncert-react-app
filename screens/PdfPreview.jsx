import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Pdf from 'react-native-pdf';

const PdfPreview = ({route, navigation}) => {
  const {item} = route.params;
  const name = item?.name;
  const file = item?.file;
  const source = {
    uri: 'bundle-assets://file.pdf',
    cache: true,
  };

  // Update the screen title based on the name parameter
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        trustAllCerts={false}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

export default PdfPreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
