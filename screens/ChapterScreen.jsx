import React, {useEffect} from 'react';

import {titles} from '../_data';
import ItemList from '../components/ItemList';

const ChapterScreen = ({route, navigation}) => {
  const {item} = route.params;
  const name = item?.name;
  const chapters = titles.filter(title => title?.id === item?.id)[0]?.chapters;

  useEffect(() => {
    navigation.setOptions({
      title: name + ': All Chapters',
    });
  }, [navigation, name]);

  return <ItemList data={chapters} screen="Pdf" />;
};

export default ChapterScreen;
