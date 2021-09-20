import {StyleSheet ,Dimensions , StatusBar} from 'react-native';
import Constants from "expo-constants"


const styles = StyleSheet.create({


    carContainer :{
        width: '100%',
        height: Dimensions.get('window').height,
    },
  
    titles: {
  
      marginTop : '30%',
      width: '100%',
      alignItems: 'center',
  
    },
  
    title :{
      fontSize: 40,
      fontWeight: '500',
    },
    subtitle :{
      fontSize: 16,
      color: '#6c757d'
    },
    subtitleCTA:{
        textDecorationLine :'underline',
    },
    image :{
      width: '100%',
      height: '100%',
      
      resizeMode : 'cover',
      position: 'absolute',
    },
    buttonContainer :{
        position: 'absolute',
        bottom: 50,
        width: '100%',
    }

});

export default styles;