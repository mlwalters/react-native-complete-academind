import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    closeModal();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function closeModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.appContainer}>
        <Text>React Native App</Text>
        <Button
          title="Add a goal"
          color='#c70039'
          onPress={startAddGoalHandler}
        />
        {isModalVisible &&
          <GoalInput
            showModal={isModalVisible}
            onAddGoal={addGoalHandler}
            onCancel={closeModal}
          />
        }
        <View>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
});
