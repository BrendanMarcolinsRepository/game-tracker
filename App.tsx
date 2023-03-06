import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import GamesCompleteList from './screens/gamescompletelist';
import AddScreen from './screens/addscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './screens/homepage';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameDetails from './screens/gamedetails';


const Tab = createBottomTabNavigator();



const Stack = createNativeStackNavigator();



function MyBottomTab(){
  return (
  <Tab.Navigator >
        <Tab.Screen 
            name="Home" 
            component={HomePage} 
            options = {{
              tabBarLabel : 'Home',
              tabBarIcon : (() => (
                <Ionicons 
                    name = {"home"}
                    size = {25}
                />

              ))
            }}

            
        />
        <Tab.Screen 
            name="Games Complete" 
            component={GamesCompleteList} 
            options = {{
              tabBarLabel : 'Games Complete',
              tabBarIcon : (() => (
                <Ionicons 
                    name = {"list"}
                    size = {25}
                />

              ))
            }}
        />
        <Tab.Screen 
          name="Add Game" 
          component={AddScreen} 
          options = {{
            tabBarLabel : 'Add Game',
            tabBarIcon : (() => (
              <Ionicons 
                  name = {"add-circle"}
                  size = {25}
              />

            ))
          }}
        />
      </Tab.Navigator>
    )
}

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Tabs" component= {MyBottomTab} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Games Complete" component={GamesCompleteList} />
      <Stack.Screen name="Add Game"  component={AddScreen} />
      <Stack.Screen name="Game Detail" component={GameDetails} />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <PaperProvider>
      <NavigationContainer>
          <MyStack />
          
      </NavigationContainer>
    </PaperProvider>
    
    
    )
}


const styles = StyleSheet.create({
   
  container: {
      flex: 1,
  }
  
});