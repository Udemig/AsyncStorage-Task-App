import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import colors from '../themes/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTextInput from '../components/CustomTextInput';
import SearchIcon from '../assets/images/SearchIcon.png';
import TodoItem from '../components/TodoItem';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';
export default function TaskListScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [tasks, setTasks] = useState([
    {
      userId: 1,
      id: 1,
      title: 'title',
      status: 'closed',
    },
    {
      userId: 2,
      id: 2,
      title: 'title',
      status: 'open',
    },
    {
      userId: 3,
      id: 3,
      title: 'title',
      status: 'done',
    },
    {
      userId: 4,
      id: 4,
      title: 'title',
      status: 'closed',
    },
    {
      userId: 5,
      id: 5,
      title: 'title',
      status: 'closed',
    },
    {
      userId: 6,
      id: 6,
      title: 'title',
      status: 'closed',
    },
    {
      userId: 7,
      id: 7,
      title: 'title',
      status: 'closed',
    },
    {
      userId: 8,
      id: 8,
      title: 'title',
      status: 'closed',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.mainContentContainer}>
        <SafeAreaView style={[styles.container, {marginBottom: 20}]}>
          <CustomTextInput
            value={searchText}
            onChangeText={setSearchText}
            imageSource={SearchIcon}
            style={{marginHorizontal: 0}}
            placeholder="Task Ara"
          />
          <FlatList
            keyExtractor={item => item?.id.toString()}
            showsVerticalScrollIndicator={false}
            data={tasks}
            renderItem={({item}) => <TodoItem data={item} />}
          />
        </SafeAreaView>
        <CustomButton
          onPress={() => navigation.navigate(ScreenName.addTask)}
          label={'Add Task'}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  mainContentContainer: {
    // backgroundColor: 'red',
    height: '100%',
    position: 'absolute',
    padding: 20,
    width: Dimensions.get('screen').width,
  },
});
