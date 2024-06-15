import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import CustomTextInput from '../components/CustomTextInput';
import TaskNameIcon from '../assets/images/SearchIcon.png';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../themes/Colors';
import CustomButton from '../components/CustomButton';

export default function AddTaskScreen() {
  const [title, setTitle] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Open', value: 'open'},
    {label: 'Progress', value: 'progress'},
    {label: 'Pending', value: 'pending'},
    {label: 'Closed', value: 'closed'},
  ]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inlineContainer}>
        <View style={styles.taskImageContainer}>
          <LottieView
            autoPlay
            loop
            style={{height: 200, width: '100%'}}
            source={require('../assets/animations/pencil.json')}
          />
        </View>
        <CustomTextInput
          imageSource={TaskNameIcon}
          label={'Task Adı'}
          onChangeText={setTitle}
          value={title}
        />
        <View style={{flexDirection: 'row'}}>
          <CustomTextInput
            onPressIcon={() => showDatePicker()}
            imageSource={TaskNameIcon}
            style={{width: '40%'}}
            label={'Başlangıç Zamanı'}
          />
          <CustomTextInput
            onPressIcon={() => showDatePicker()}
            imageSource={TaskNameIcon}
            style={{width: '40%'}}
            label={'Bitiş Zamanı'}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <View>
            <Text style={styles.status}>Status</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              containerStyle={{width: '90%'}}
              style={{
                borderWidth: 0,
              }}
            />
          </View>
        </View>
      </View>

      <CustomButton label={'Save Task'} style={{width: '90%'}} />

      <DateTimePickerModal
        onCancel={hideDatePicker}
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    alignItems: 'center',
  },
  inlineContainer: {
    width: '100%',
  },
  taskImageContainer: {
    marginTop: 60,
  },
  dropdownContainer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginBottom: 150,
  },
  status: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: '600',
    color: colors.text.primary,
  },
});
