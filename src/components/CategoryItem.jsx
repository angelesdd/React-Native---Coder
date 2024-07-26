import { StyleSheet, Text, Pressable } from 'react-native'
import Card from './Card';
import { useDispatch} from 'react-redux';
import { setCategorySelected } from '../features/Shop/ShopSlice';


const CategoryItem = ({ category, navigation}) => {
  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setCategorySelected(category))
    navigation.navigate("ItemListCategory", { category });
  }

  return (
    <Pressable onPress={handleNavigate}>
      <Card style={styles.categoryContainer}>
          <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem

const styles = StyleSheet.create({
    categoryContainer: {
        marginHorizontal: 10, 
        marginVertical: 10,
        backgroundColor: 'rgb(127, 179, 213)',
        height: 90,
    }, 
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: "white",
        fontWeight: 'bold',
    }
})
