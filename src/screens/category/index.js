import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './styles';
import {products} from '../../constants/products';
import {useSelector, useDispatch, connect} from 'react-redux';
import CategoryProducts from '../../components/molecules/categoryProducts';
import {
  selectedProduct,
  filteredProducts,
} from '../../store/actions/product.action';

const Category = ({navigation, route}) => {
  const dispatch = useDispatch();
  const categoryProduct = useSelector(state => state.products.filteredProducts);
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory,
  );

  const handleSelectCategory = product => {
    dispatch(selectedProduct(product.id));
    navigation.navigate('Product', {name: product.name});
  };

  const renderItem = ({item}) => (
    <CategoryProducts item={item} onSelected={handleSelectCategory} />
  );

  useEffect(() => {
    dispatch(filteredProducts(selectedCategory.id));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryProduct}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default connect()(Category);
