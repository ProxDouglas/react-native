import { createStackNavigator } from '@react-navigation/stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createStackNavigator();

export default function StackComponent(props) {

    return (
        <Stack.Navigator initialRouteName="TelaA" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="TelaA" options={{ title: "Tela A" }}  >
                {(props) => <PassoStack {...props} avancar={"TelaB"}><TelaA /></PassoStack>}
            </Stack.Screen>
            <Stack.Screen name="TelaB" options={{ title: "Tela B" }}  >
                {(props) => <PassoStack {...props} avancar={"TelaC"}><TelaB /></PassoStack>}
            </Stack.Screen>
            <Stack.Screen name="TelaC" options={{ title: "Tela C" }} component={TelaC} />
        </Stack.Navigator>
    )
}