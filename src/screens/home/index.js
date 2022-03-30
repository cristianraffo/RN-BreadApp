import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {categories} from '../../constants/categories';
import CategoryGrid from '../../components/molecules/categoryGrid/index';

const Home = ({navigation}) => {
  const handleSelectCategory = category => {
    navigation.navigate('Category', {id: category.id, name: category.name});
  };

  const renderItem = ({item}) => (
    <CategoryGrid item={item} onSelected={handleSelectCategory} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
