import React, {useEffect} from 'react';

import PdfViewer from '../components/PdfViewer';

const PdfScreen = ({route, navigation}) => {
  const {item} = route.params;
  const name = item?.name;
  const source = {
    uri: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf',
    cache: true,
  };

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return <PdfViewer source={source} />;
};

export default PdfScreen;
