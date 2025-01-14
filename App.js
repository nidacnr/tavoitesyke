import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const App = () => {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const calculateHeartRateLimits = () => {
    const ageNumber = parseInt(age);
    if (!isNaN(ageNumber) && ageNumber > 0) {
      const lower = (220 - ageNumber) * 0.65;
      const upper = (220 - ageNumber) * 0.85;
      setLowerLimit(lower.toFixed(2));
      setUpperLimit(upper.toFixed(2));
    } else {
      alert('Please enter a valid age.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <Button title="Calculate" onPress={calculateHeartRateLimits} />
      {lowerLimit !== null && upperLimit !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Lower Limit: {lowerLimit} bpm
          </Text>
          <Text style={styles.resultText}>
            Upper Limit: {upperLimit} bpm
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default App;