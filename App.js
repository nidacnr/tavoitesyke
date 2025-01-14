import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

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
        placeholderTextColor="#d7c9db" 
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TouchableOpacity style={styles.button} onPress={calculateHeartRateLimits}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
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
    backgroundColor: '#eae2ed',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#514354',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#86728b', 
    backgroundColor: '#fefaff',
  },
  button: {
    backgroundColor: '#baa7bf', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    marginVertical: 5,
    color: '#514354',
  },
});

export default App;