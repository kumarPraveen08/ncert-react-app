import React from 'react';

import ItemList from '../components/ItemList';

const data = [
  {id: 1, name: '1st'},
  {id: 2, name: '2nd'},
  {id: 3, name: '3rd'},
  {id: 4, name: '4th'},
  {id: 5, name: '5th'},
  {id: 6, name: '6th'},
  {id: 7, name: '7th'},
  {id: 8, name: '8th'},
  {id: 9, name: '9th'},
  {id: 10, name: '10th'},
  {id: 11, name: '11th'},
  {id: 12, name: '12th'},
];

const HomeScreen = () => {
  return <ItemList data={data} screen={'Book'} />;
};

export default HomeScreen;
