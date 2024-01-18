import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    header: {
        headerShown: false,
        headerStyle: {
            backgroundColor: "#ff6600"
        },
        bottomStyles: {
            backgroundColor: "#ff6600"
        },
        headerTintColor: "#fff"
    }
})

export default function TapComponent(props) {

    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='TelaB'
            tabBarOptions={{
                activeTintColor: "660099",
                inactiveTintColor: "gray",
                labelStyle: { fontSize: 10 }
            }}
        >
            <Tab.Screen
                name="TelaA"
                component={TelaA}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="TelaB"
                component={TelaB}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-analytics" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="TelaC"
                component={TelaC}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="person" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}