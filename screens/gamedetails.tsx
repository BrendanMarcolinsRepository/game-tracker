import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ImageBackground
  } from 'react-native';

  import { Avatar, Button, Card, Text } from 'react-native-paper';

type ItemProps = {
    navigation : any,
    route : any
};

function GameDetails({navigation, route} : ItemProps){

    const {data} = route.params 
    const [d] = data
  
    return(
        <View style = {styles.container}>
            <ImageBackground
              source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IyEdtnmK5dYScKFp1zRD_wHaEK%26pid%3DApi&f=1&ipt=e58462169cbe6434bbf3f9b57caa0f29579e1e0eaf3b0dbb5559d3253bcdcff9&ipo=images' }} 
              resizeMode="cover"
              style = {styles.image}
            >
            <View style = {styles.cardContainer}>
              <Card
                  style = {styles.cardInnerContainer}
                  
                  >
                    <Card.Title 
                        titleVariant= {'displaySmall'}
                        title={d.title} 
                        
                    />
                    <Card.Content>

                        <Text 
                            variant="bodyMedium">
                                Rating: {d.rating}
                        </Text>

                        <Text 
                            variant="bodyMedium">
                                Completed: {d.date}
                        </Text>
                        
                        <Text 
                            variant="bodyMedium">
                                Description: {d.description}
                        </Text>
                    </Card.Content>
    
                    <Card.Cover 
                      source={{ uri: d.image }} 
                    />
                    
                    <Card.Actions>
                            <Button>Update</Button>
                            <Button>Ok</Button>
                    </Card.Actions>
                </Card>
            </View>
            </ImageBackground>
        </View>
    )
}

export default GameDetails

const styles = StyleSheet.create({
    container: {
      flex : 1
    },
    
    image : {
      backgroundColor: 'transparent'
    },

    cardContainer: {
      marginVertical : 200,
      opacity : 1
     
    },

    cardInnerContainer : {
       marginHorizontal : 10,
       
    },
 
});