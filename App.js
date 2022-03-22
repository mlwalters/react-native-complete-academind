import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setGoals(currentGoals => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  }

  return (
    <View style={styles.screen}>
      <Text>React Native App </Text>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList data={goals} alwaysBounceVertical={false} keyExtractor={(item, index) => item.id} renderItem={itemData => {
        return <GoalItem text={itemData.item.text} />;
      }}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
