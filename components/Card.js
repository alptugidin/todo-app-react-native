import React from 'react';
import {Pressable, Text} from 'react-native';
import {style} from 'app/components/Card.style';
const Card = ({done, activity, changeStatus, remove}) => {
  const onLongPress = () => {
    remove(activity);
  };

  const onPress = () => {
    changeStatus(activity);
  };

  return (
    <Pressable
      onLongPress={onLongPress}
      onPress={onPress}
      style={done ? style.done : style.notDone}>
      <Text style={done ? style.cardText : style.cardTextNot}>{activity}</Text>
    </Pressable>
  );
};

export default Card;
