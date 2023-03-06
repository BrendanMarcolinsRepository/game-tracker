import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
  } from 'react-native';
import { useState } from 'react';
import GameRenderItem from '../components/gamelistcomponents/GameRenderItem';
  
  
type ItemData = {
    id: string;
    title: string;
    rating : string;
    platform  : string [],
    genre : string[]
  
  };
  
  const DATA: ItemData[] = [
  {
      id: '1',
      title: 'Resident Evil Village',
      rating : "MA",
      platform : ["PC", "PS5", "PS4", "Xbox One", "Xbox Series X|S"],
      genre : ["Horror", "Survival"]
  },
  {
      id: '2',
      title: 'Dead Space (2022)',
      rating : "MA",
      platform : ["PC", "PS5", "PS4", "Xbox One", "Xbox Series X|S"],
      genre : ["Horror", "Survival"]
  },
  {
      id: '3',
      title: 'Resident Evil 2',
      rating : "MA",
      platform : ["PC", "PS5", "PS4", "Xbox One", "Xbox Series X|S"],
      genre : ["Horror", "Survival"]
  },
  ];
  
  
 
 function GamesCompleteList() {

    const [selectedId, setSelectedId] = useState<string>();
  
    return (
      <SafeAreaView style={styles.container}>
  
        <View style = {styles.textContainer}>
              <Text  style = {styles.headerText}>Games Completed</Text>
        </View>
  
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          extraData={selectedId}
  
          renderItem = {({item}) => (
              
              <View>
                  <GameRenderItem 
                      item = {item}
                      selectedId = {selectedId}
                      setSelectedId = {() => setSelectedId}
                  />  
  
                  
              </View>
        )}
  
        />
      </SafeAreaView>
    );
  }

  export default GamesCompleteList

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    
    textContainer : {
      justifyContent : 'center',
      alignItems : 'center',
      marginTop : 30
  
    },
    
    headerText : {
      fontSize : 26
    },
    
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection : 'row',
      borderRadius : 10,
    },
    
    title: {
      fontSize: 18,
    },
    
    arrowContainer : {
      marginLeft : 'auto',
      justifyContent : 'center',
      paddingRight : 10,
    },
});