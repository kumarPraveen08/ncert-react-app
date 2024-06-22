import React, {useEffect, useState} from 'react';

import ItemList from '../components/ItemList';
import {classData} from '../_data';

const BookScreen = ({route, navigation}) => {
  const {item} = route.params;
  const name = item?.name;
  const books = classData.filter(c => c.id === item?.id)[0]?.books;

  useEffect(() => {
    navigation.setOptions({
      title: name + ' Class: All Books',
    });
  }, [navigation, name]);

  return <ItemList data={books} screen="Title" />;
};

export default BookScreen;
