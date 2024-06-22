import React, {useEffect} from 'react';

import ItemList from '../components/ItemList';

const TitleScreen = ({route, navigation}) => {
  const {item} = route.params;
  const name = item?.name;

  useEffect(() => {
    navigation.setOptions({
      title: name + ': All Titles',
    });
  }, [navigation, name]);

  return <ItemList data={item?.titles} screen="Chapter" />;
};

export default TitleScreen;
