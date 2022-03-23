import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';


function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Course Goal'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title='ADD' onPress={addGoalHandler} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
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