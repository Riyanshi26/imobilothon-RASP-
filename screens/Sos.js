import { View, Text } from 'react-native'
import React from 'react'

export default function Sos() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{textAlign: "center"}}>This page will be used to trigger SOS signal to call the nearby cars for help</Text>
    </View>
  )
}