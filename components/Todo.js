import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {style} from 'app/components/Todo.style';
import Card from 'app/components/Card';
import {activities} from 'app/activities';
import Input from 'app/components/Input';
const Todo = () => {
  const changeStatus = activity => {
    setList(
      list.map(e => {
        if (e.name === activity) {
          e.status = !e.status;
          return e;
        } else {
          return e;
        }
      }),
    );
  };

  const remove = activiy => {
    setList(list.filter(e => e.name !== activiy));
  };

  const takeInput = param => {
    if (param === '') {
      return false;
    }

    if (list.every(e => e.name !== param)) {
      setList([...list, {name: param, status: true}]);
    }
  };

  const [list, setList] = useState(activities);

  const renderItem = ({item}) => {
    return (
      <Card
        changeStatus={changeStatus}
        activity={item.name}
        done={item.status}
        remove={remove}
      />
    );
  };

  return (
    <View style={style.main}>
      <View style={style.head}>
        <Text style={style.todoText}>Yapılacaklar</Text>
        <Text style={style.todoCount}>
          {list.filter(e => e.status === true).length}
        </Text>
      </View>
      <View style={style.body}>
        <FlatList data={list} renderItem={renderItem} />
      </View>
      <Input sendInput={takeInput} />
    </View>
  );
};

export default Todo;
