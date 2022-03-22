import { View, Text, StyleSheet } from 'react-native'

const GoalItem = (props) => {
    return (
        <View style={styles.listItem}  >
            <Text>{props.text}</Text>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        marginTop: 5,
        padding: 3,
    }
});