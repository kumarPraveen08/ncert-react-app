import {Dimensions, Linking, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Pdf from 'react-native-pdf';

const PdfViewer = props => {
  const [currentPage, setCurrentPage] = useState(0);
  const {source} = props;
  // const handleLink = uri => Linking.openURL(uri.toString());

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
          setCurrentPage(page);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
          // handleLink(uri);
        }}
        style={styles.pdf}
        progressContainerStyle={{backgroundColor: '#000'}}
      />
      <View style={styles.indicator}>
        <Text style={styles.text}>{currentPage}</Text>
      </View>
    </View>
  );
};

export default PdfViewer;

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
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 100,
    height: 28,
    width: 'content-width',
    paddingHorizontal: 5,
    backgroundColor: '#00000088',
  },
  text: {
    fontSize: 16,
  },
});
