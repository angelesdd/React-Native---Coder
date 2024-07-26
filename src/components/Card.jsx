import { StyleSheet, View } from 'react-native'


const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: "black",
    width: 250,
    height: 40,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
