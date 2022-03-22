import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';


const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
      }

      const addGoalHandler = () => {
          props.onAddGoal(addGoalHandler);
          setEnteredGoalText('');
      };

    return (
        <View style={styles.textInputContainer}>
            <TextInput placeholder='Course Goal' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText} />
            <Button title='ADD' onPress={() => addGoalHandler} />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        width: '80%'
    },
});