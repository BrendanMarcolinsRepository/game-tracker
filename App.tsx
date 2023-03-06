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

import GamesCompleteList from './screens/gamescompletelist';
import AddScreen from './screens/addscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './screens/homepage';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();




export default function App() {

  return (

      <NavigationContainer>
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
      </NavigationContainer>
    
    );
}


const styles = StyleSheet.create({
   
  container: {
      flex: 1,
  }
  
});