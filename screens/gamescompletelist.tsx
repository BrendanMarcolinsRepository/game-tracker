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
  
import { Searchbar } from 'react-native-paper';
  
type ItemData = {
    id: string;
    title: string;
    date : string,
    rating : string;
    description : string;
    image : string;
    platform  : string [],
    genre : string[]
  
  };
  
  const DATA: ItemData[] = [
  {
      id: '1',
      title: 'Resident Evil Village',
      date : '01/03/2023',
      rating : "MA",
      description : "random",
      image : "https://www.residentevil.com/village/assets/images/common/share.png", 
      platform : ["PC", "PS5", "PS4", "Xbox One", "Xbox Series X|S"],
      genre : ["Horror", "Survival"]
  },
  {
      id: '2',
      title: 'Dead Space (2022)',
      date : '01/03/2023',
      rating : "MA",
      description : "random",
      image : "https://pbs.twimg.com/media/FeK7GBvVUAA_OSE.jpg:large", 
      platform : ["PC", "PS5", "PS4", "Xbox One", "Xbox Series X|S"],
      genre : ["Horror", "Survival"]
  },
  {
      id: '3',
      title: 'Resident Evil 2',
      date : '01/03/2023',
      rating : "MA",
      description : "random",
      image : "https://image.api.playstation.com/vulcan/ap/rnd/202206/0204/uDFoGvnMTTCLVmTwjj0njGWC.png", 
      platform : ["PC", "PS5", "PS4", "Xbox One", "Xbox Series X|S"],
      genre : ["Horror", "Survival"]
  },
  {
      id: '4',
      title: 'Silent Hill',
      date : '01/03/2023',
      rating : "MA",
      description : "random",
      image : "https://static.wikia.nocookie.net/silent/images/c/c2/SH1Boxart.png/revision/latest?cb=20151123185611", 
      platform : ["PC", "PS5", "PS4", "Xbox One", "Xbox Series X|S"],
      genre : ["Horror", "Survival"]
  },
  {
      id: '5',
      title: 'Doom',
      date : '01/03/2023',
      rating : "MA",
      description : "random",
      image : "https://i1.sndcdn.com/artworks-S3EgIjmepwtSoZX0-h8g8iA-t500x500.jpg", 
      platform : ["PC", "PS5", "PS4", "Xbox One", "Xbox Series X|S"],
      genre : ["Horror", "Survival"]
},
  ];
  
  type ItemProps = {
    navigation: any;
    
  };
 
 function GamesCompleteList({navigation} : ItemProps) {

    const [selectedId, setSelectedId] = useState<string>();

    const [searchTitle, setSearchTitle] = useState<string>('')

    const [data, setData] = useState(DATA)

    

    function onChangeSearch(query : string){ 

        if(query === '' ){
          
          setData(DATA)
          setSearchTitle(query)
          
        }else{

          setSearchTitle(query)

          const tempData = data.filter(title => title.title.toUpperCase().match(query.toUpperCase()))

          setData(tempData)
        }        
    }
  
    function onPressHandler(_id : any){
        

        const tempData = data.filter(id => id.id.match(_id))
        

        navigation.navigate('Game Detail', {
          data : tempData
        })
    }

    return (
      <SafeAreaView style={styles.container}>
  
        <Searchbar
            placeholder="Search Title"
            onChangeText={onChangeSearch}
            value={searchTitle}
            style = {styles.searchbar}
        />
  
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          extraData={selectedId}
  
          renderItem = {({item}) => (
              
              <View>
                  <GameRenderItem 
                      item = {item}
                      selectedId = {selectedId}
                      setSelectedId = {() => setSelectedId}
                      onPressHandler = {onPressHandler}
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
    },

    searchbar : {
      justifyContent : 'center',
      alignContent : 'center',
      marginHorizontal : 45,
      marginBottom : 40,
      marginTop : 20,
      width : '80%'
    }
});