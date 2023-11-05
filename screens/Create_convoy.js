import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Button from '../components/Button';

const Create_convoy = () => {
  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const handleAddParticipant = () => {
    if (participantName.trim() !== '') {
      const newParticipant = participantName;
      setParticipants([...participants, newParticipant]);
      setParticipantName('');
    }
  };

  const handleStartJourney = () => {
    navigation.navigate('Journey', { participants: participants });
  };

  useEffect(() => {
    if (isFocused) {
      setParticipantName('');
      setParticipants([]);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
    
      <TextInput
        style={styles.input}
        onChangeText={text => setParticipantName(text)}
        value={participantName}
        placeholder="Enter Vehicle number"
      />
      
      <Button 
        title="Add Participant" 
        filled
        onPress={handleAddParticipant} 
        disabled={ participantName.trim() === ''} 
        style={{
          marginTop: 18,
          marginBottom: 20,
          width: "80%",
          backgroundColor: "#007360",
        }} />
      {participants.map((participant, index) => (
        <Text key={index} style={styles.participant}>
          {participant}
        </Text>
      ))}
      <Button
        title="Start Journey"
        filled
        onPress={handleStartJourney}
        disabled={participants.length === 0}
        style={{
          
          marginBottom: 20,
          width: "80%",
          backgroundColor: "#007360",
        }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  participant: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Create_convoy;
