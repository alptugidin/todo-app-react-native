import {StyleSheet} from 'react-native';
import {colors} from 'app/colors';

export const style = StyleSheet.create({
  done: {
    backgroundColor: colors.green600,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  notDone: {
    backgroundColor: colors.green600,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 6,
    opacity: 0.2,
  },

  cardText: {
    color: 'white',
    fontSize: 16,
  },
  cardTextNot: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
});
