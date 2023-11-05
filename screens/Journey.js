import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Button from '../components/Button';
const Journey = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    if (route.params && route.params.participants) {
      setParticipants(route.params.participants);
    }
  }, [route.params]);

  const handleEndJourney = () => {
    setParticipants([]);
    navigation.navigate('Create_convoy');
  };
  
  const deg2rad = deg => {
    return deg * (Math.PI / 180);
  };

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  const checkDistanceFromAdmin = (participantLocation, adminLocation, radius) => {
    const distance = getDistanceFromLatLonInKm(
      participantLocation.latitude,
      participantLocation.longitude,
      adminLocation.latitude,
      adminLocation.longitude
    );
    return distance > radius;
  };

  const handleAlerts = (participant) => {
    const adminLocation = {
      latitude: 37.7749,
      longitude: -122.4194,
    };
    const participantLocation = {
      latitude: 37.7749,
      longitude: -122.4194,
    };
    const radius = 2; // in kilometers

    if (checkDistanceFromAdmin(participantLocation, adminLocation, radius)) {
      Alert.alert('Alert', `Participant ${participant} is more than 2km away from the admin.`);
    }
  };

  if (!participants || participants.length===0 ) {
    return (
      <View style={styles.container}>
        <Text style={{justifyContent: 'center', fontSize: 18}}>Sorry, but you first need to create a group</Text>
        <Button
                    title="Connect"
                    filled
                    onPress={handleEndJourney} 
                    style={{
                        marginTop: 18,
                        width: "80%",
                        backgroundColor: "#007360",
                    }}
                />
      </View>
    );
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Journey Participants</Text>
      <View style={styles.participantList}>
      {participants.map((participant, index) => (
        <Text key={index} style={styles.participant}>
        Vehicle Number : {participant}
        </Text>
      ))}
      </View>
      <Button 
        title="End Room" 
        filled
        onPress={handleEndJourney} 
        style={{
          marginTop: 18,
          width: "80%",
          backgroundColor: "#007360",
          position:'absolute',
          bottom:50
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
    position:'absolute',
    top:30,
  },
  participantList: {
    position:'absolute',
    top:80,
  },
  participant: {
    fontSize: 16,
    marginBottom: 10,
    
  },
});

export default Journey;
