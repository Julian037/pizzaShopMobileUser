import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingHorizontal: '3%',
  //   justifyContent: 'center',
  // },
  // logoContainer: {
  //   alignItems: 'center',
  //   marginBottom: 15,
  // },
  // box: {
  //   backgroundColor: 'white',
  //   borderRadius: 12,
  //   paddingHorizontal: 20,
  //   paddingVertical: 40,
  //   elevation: 2,
  //   marginBottom: 10,
  // },
  // logo: {
  //   width: '100%',
  //   resizeMode: 'contain',
  // },
  // emailLabel: {
  //   color: '#585858',
  //   marginBottom: 5,
  // },
  // emailInput: {
  //   borderBottomWidth: 0.7,
  //   borderColor: '#D0D0D0',
  //   fontSize: 16,
  // },
  // button: {
  //   marginTop: 15,
  // },
  // infoItemLabel: {
  //   textDecorationLine: 'underline',
  // },

  content:{
    flex: 1,
    paddingHorizontal: 30,
    borderTopRightRadius: 30,
    // backgroundColor: 'red',
    // backgroundColor: '#FFFFFF',
    // marginTop: -25,
  },
  imgContainer: {
    alignSelf: 'center',
    height: Dimensions.get('window').height * 0.27,
  },
  imgLogo: {
    zIndex: 1,
    position: 'absolute',
    alignSelf: 'center',
    // marginTop: 20,
    height: '100%',
    width: '100%',
  },
});

export default styles;
