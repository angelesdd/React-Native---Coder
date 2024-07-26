import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import AddButton from '../components/AddButton'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProfileimageQuery } from '../services/shopServices'
import { clearUser } from '../features/User/UserSlice'
import { useDB } from '../hooks/useDB'

const MyProfile = ({ navigation }) => {
  const dispatch = useDispatch()
  const { imageCamera, localId } = useSelector((state) => state.auth.value)
  const { data: imageFromBase } = useGetProfileimageQuery(localId)
  const { truncateSessionTable } = useDB()

  const launchCamera = () => {
    navigation.navigate("Image Selector")
  }

  const launchLocation = () => {
    navigation.navigate("List Address")
  }

  const defaultImageRoute = "../../assets/user.png"

  const signOut = () => {
    try {
      truncateSessionTable()
      dispatch(clearUser())
    } catch (error) {
      console.log({ errorSignOutDB: error })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageFromBase?.image || imageCamera || defaultImageRoute }}
          style={styles.img}
          resizeMode="cover"
        />
      </View>
      <View style={styles.buttonContainer}>
        <AddButton
          onPress={launchCamera}
          title={imageFromBase || imageCamera ? "Modify profile picture" : "Add profile picture"}
        />
        <AddButton
          onPress={launchLocation}
          title="My address"
        />
        <AddButton
          onPress={signOut}
          title="Sign out"
        />
      </View>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "black",
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  btn: {
    marginVertical: 10,
    backgroundColor: 'rgb(127, 179, 213)',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
})
