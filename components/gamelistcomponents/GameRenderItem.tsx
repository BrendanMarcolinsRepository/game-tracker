  
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
  } from 'react-native';

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
  };
  
function GameRenderItem ({item, selectedId, setSelectedId} : ItemProps)  {

    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
        <View>
            <GameItem
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
            
            
        </View>
    )
  };

  export default GameRenderItem
