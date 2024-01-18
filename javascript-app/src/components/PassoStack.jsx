import { Button, View } from "react-native";

export default function PassoStack(props) {
    const { children, avancar, navigation } = props;
    return (
        <View style={{ flex: 1 }}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                {navigation.getState().index > 0 ?
                    <Button 
                        title="Voltar"
                        onPress={() => {
                            navigation.goBack()
                        }}
                    />
                    : false
                }
                {avancar ?
                    <Button 
                        title="Avançar"
                        onPress={() => {
                            navigation.navigate(avancar)
                        }}
                    />
                    : false
                }
            </View>
            <View style={{ flex: 1 }}>
                {children}
            </View>
        </View>
    );
}