import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Add from '../screens/Add';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{title:'Login'}} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{title:'Register'}} />
                <Stack.Screen name="Home" component={Home} options={{title:'Home'}} />
                <Stack.Screen name="Add" component={Add} options={{presentation:'modal', title:'Agregar productos'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;