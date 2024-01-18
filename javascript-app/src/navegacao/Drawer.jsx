import { StyleSheet } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    header: {
        headerShown: true,
        headerStyle: {
            backgroundColor: "#ff6600"
        },
        headerTintColor: "#fff",
        headerTitleStyles: {
            fontWeight: "bold"
        }
    }
})

export default function DrawerComponent(props) {

    return (
        <Drawer.Navigator
            screenOptions={styles.header}
            initialRouteName='TelaB'
        >
            <Drawer.Screen
                name="TelaA"
                component={TelaA}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="TelaB"
                component={TelaB}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="TelaC"
                component={TelaC}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}
