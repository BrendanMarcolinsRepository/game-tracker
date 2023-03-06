
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
  } from 'react-native';
  
  import { Ionicons } from '@expo/vector-icons';
  
  type ItemData = {
    id: string;
    title: string;
    rating : string;
    platform  : string [],
    genre : string[]
  
  };
  
  type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
  };
  
function GameItem({item, onPress, backgroundColor, textColor}: ItemProps){
    return(
      
      <View>
            <TouchableOpacity 
            onPress={onPress} 
            style={[styles.item, {backgroundColor}]}
          >
              <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
          
              <View style = {styles.arrowContainer}>
                  <Ionicons 
                          name = {"arrow-forward-circle"}
                          size = {25}
                  />
              </View>

          </TouchableOpacity>
      </View>
  
    )
}

export default GameItem
 
  const styles = StyleSheet.create({

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

