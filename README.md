# react-native

## Instalação seguindo documentação 

[Setting up the development environment · React Native](https://reactnative.dev/docs/environment-setup?guide=quickstart&platform=ios&os=macos)

Devido ao fato de que o framework expo faz o build do projeto tanto para android quanto para ios, este framework será usado.

[Expo Documentation](https://docs.expo.dev/)



## Caso de erro 

```sql
--reset-cache
```





## Diferenciar Android do IOS

```jsx
import React from 'react';
import {Text, Platform} from 'react-native';

export default function Diferenciar(){
    if(Platform.OS === "android"){
        return <Text >Android</Text>
    } else if(Platform.OS === "ios"){
        return <Text >IOS</Text>
	} else {
      	return <Text >Eita!!!</Text>  
    }
}
```



## 

## Nvegação 

https://reactnavigation.org/



## Icons  

```
npm install --save @expo/vector-icons
```

[react-native-vector-icons directory (oblador.github.io)](https://oblador.github.io/react-native-vector-icons/)
