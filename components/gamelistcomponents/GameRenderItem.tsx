  
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


import GameItem from './GameItem';


  type ItemData = {
    id: string;
    title: string;
    rating : string;
    platform  : string [],
    genre : string[]
  
  };

  type ItemProps = {
    item: ItemData;
    selectedId : string | undefined,
    setSelectedId : (id : string) => void
    onPressHandler : (id : any) => any
  };
  
function GameRenderItem ({item, selectedId, setSelectedId, onPressHandler} : ItemProps)  {

    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    function update(id : string){
      console.log("wokring here")
      onPressHandler(id)
      setSelectedId(id)
      
    }

    return (
        <View>

            

            <GameItem
                item={item}
                onPress={() => update(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
            
            
        </View>
    )
  };

  export default GameRenderItem
