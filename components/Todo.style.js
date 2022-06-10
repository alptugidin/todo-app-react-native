import {StyleSheet} from 'react-native';
import {colors} from 'app/colors';

export const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.blueGray800,
    padding: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.orange400,
    paddingHorizontal: 5,
  },
  body: {
    flex: 1,
    paddingTop: 50,
  },
  todoText: {
    color: colors.orange400,
    fontSize: 35,
    fontWeight: '300',
  },
  todoCount: {
    color: colors.orange400,
    fontWeight: 'bold',
    fontSize: 35,
  },
});
