import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content:{
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 30,
    borderTopRightRadius: 30,
  },
  imgContainer: {
    alignSelf: 'center',
    height: Dimensions.get('window').height * 0.27,
  },
  imgLogo: {
    zIndex: 1,
    position: 'absolute',
    alignSelf: 'center',
    height: '100%',
    width: '100%',
  },
  link: {
    fontWeight: 'bold',
    color: '#2EA1E8',
    textDecorationLine: 'underline',
  },
  text: {
    marginTop: 6,
  },
});

export default styles;
