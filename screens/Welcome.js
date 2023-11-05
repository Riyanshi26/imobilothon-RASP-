import { ImageBackground,  TouchableOpacity,  View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    return (
        <ImageBackground source={require("../assets/welcome.jpeg")} style={{width: '100%', height: '100%'}}>
            <View style={{ flex: 1 }}>

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 50,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Volkswagen</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Connect</Text>

                    <View style={{ marginVertical: 12 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            marginVertical: 4
                        }}>For next generation seamless driving experience, Connect or make your Volkswagon account.</Text>
                        
                    </View>

                    <Button
                        title="Connect Now"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 2,
                            width: "100%",
                            backgroundColor: "white",
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.black,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        {/* // </LinearGradient> */}
        </ImageBackground>
    )
}

export default Welcome
