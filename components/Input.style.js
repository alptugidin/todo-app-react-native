import {Dimensions, StyleSheet} from 'react-native';
import {colors} from 'app/colors';

export const style = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(212,212,216,0.2)',
    height: Dimensions.get('window').height / 6.5,
    borderRadius: 10,
  },
  inputView: {
    flex: 1 / 3,
    alignItems: 'center',
    borderRadius: 10,
  },
  input: {
    borderRadius: 10,
    padding: 5,
    width: '90%',
    color: 'white',
  },
  bottomLine: {
    height: 1,
    backgroundColor: colors.gray500,
    width: '89%',
  },
  buttonView: {
    flex: 2 / 3,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  button: {
    backgroundColor: colors.gray500,
    width: '90%',
    padding: 9,
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: colors.orange500,
    width: '90%',
    padding: 9,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
});
