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
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

function AddScreen(){


    const [title, setTitle] = useState<string>();
    const [date, setDate] = useState<string>();
    

    const [openRating, setOpenRating] = useState<boolean>(false);
    const [valueRating, setValueRating] = useState(null);
    const [rating, setRating] = useState([
        {label: 'R', value: 'r'},
        {label: 'MA', value: 'ma'},
        {label: 'M', value: 'm'},
        {label: 'PG', value: 'pg'},
        {label: 'G', value: 'G'},
    ])
    

    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState(null);
    const [platform, setPlatform] = useState([
        {label: 'PS5', value: 'ps5'},
        {label: 'PS4', value: 'ps4'},
        {label: 'PS3', value: 'ps3'},
        {label: 'PS2', value: 'ps2'},
        {label: 'PS1', value: 'ps1'},
    ])
    

    const [openGenre, setOpenGenre] = useState<boolean>(false);
    const [valueGenre, setValueGenre] = useState(null);
    const [genre, setGenre] = useState([
        {label: 'Horror', value: 'horror'},
        {label: 'Survival', value: 'survival'}
    ])



    return(
        <View>
            <View style={styles.form}>

                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                    onChangeText={_title => setTitle(_title)}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="DD/MM/YYYY"
                    keyboardType="numeric"
                    value={date}
                    onChangeText={_date => {setDate(_date);
                    }}
                />
                <View style = {styles.dropdownContainer}>

                        <DropDownPicker 
                            style = {styles.picker}
                            open={openRating}
                            value={valueRating}
                            items={rating}
                            setOpen={setOpenRating}
                            setValue={setValueRating}
                            setItems={setRating}
                            placeholder = {'Rating'}
                            zIndexInverse={1000}
                            zIndex={3000}
                        
                        />

                        <DropDownPicker 
                            style = {styles.picker}
                            open={open}
                            value={value}
                            items={platform}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setPlatform}
                            placeholder = {'Platform'}
                            zIndexInverse={2000}
                            zIndex={2000}
                        
                        />

                        <DropDownPicker 
                            style = {styles.picker}
                            open={openGenre}
                            value={valueGenre}
                            items={genre}
                            setOpen={setOpenGenre}
                            setValue={setValueGenre}
                            setItems={setGenre}
                            placeholder = {'Genre'}
                            zIndexInverse={3000}
                            zIndex={1000}
                        />
                </View>

            </View>

        </View>
    )


}

export default AddScreen

const styles = StyleSheet.create({
   
    form: {

        margin : 50,
        width : '70%',
    },
    input: {
      padding: 15,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
    },
    addItemButton: {
      backgroundColor: '#eb8634',
      paddingVertical: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {color: '#fff', fontWeight: '500'},

    dropdownContainer : { 
        
        
     },

     picker : {
        marginVertical : 20,
     }
  });