import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome   ,
  AntDesign        
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
// import User from "./assets/user.jpg";
import Home from "./Home";
import Create_convoy from "./Create_convoy";
import Journey from "./Journey";
import Sos from "./Sos";
const Drawer = createDrawerNavigator();

export default function Dashboard() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#111"
                    }}
                  >My Car</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#111"
                    }}
                  >RJ XX BY XXXX</Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#007360",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={Home}
        />
        <Drawer.Screen
          name="Create_convoy"
          options={{
            drawerLabel: "Create convoy",
            title: "Create convoy",
            
            drawerIcon: () => (
              <MaterialIcons name="groups" size={24} color="grey" />
            )
          }}
          component={Create_convoy}
        />
        <Drawer.Screen 
          name="Journey" 
          options={{
            drawerLabel: "Journey",
            title: "Journey",
            
            drawerIcon: () => (
              <AntDesign name="car" size={24} color="grey" />
            )
          }}
          component={Journey} />
        
        <Drawer.Screen 
          name="SOS" 
          options={{
            drawerLabel: "SOS",
            title: "SOS",
            
            drawerIcon: () => (
              <MaterialCommunityIcons name="car-emergency" size={24} color="grey" />
            )
          }}
          component={Sos} />

      </Drawer.Navigator>
    // {/* </NavigationContainer> */}
  );
}
