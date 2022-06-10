import React, {useState} from 'react';
import {Text, TextInput, TouchableHighlight, View} from 'react-native';
import {style} from 'app/components/Input.style';

const Input = ({sendInput}) => {
  const onPress = () => {
    sendInput(input);
    setInput('');
  };

  const [input, setInput] = useState('');

  return (
    <View style={style.main}>
      <View style={style.inputView}>
        <TextInput
          placeholder="Yapılacak"
          placeholderTextColor="gray"
          value={input}
          onChangeText={setInput}
          style={style.input}
        />
        <View style={style.bottomLine} />
      </View>
      <View style={style.buttonView}>
        <TouchableHighlight
          underlayColor={input.length === 0 ? '#52525b' : '#ea580c'}
          style={input.length === 0 ? style.button : style.activeButton}
          onPress={onPress}>
          <Text style={style.buttonText}>Kaydet</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Input;
