import React from 'react'
import { View, Text ,FlatList , Dimensions, SafeAreaView } from 'react-native'
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem'

const CarsList = (props) => {
    
    return (
        <SafeAreaView  style={styles.container}>
            <FlatList contentContainerStyle={{ flexGrow: 1 }}
            data={cars}
            renderItem={({item}) =><CarItem car={item}/>}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
        </SafeAreaView>
    )
}

export default CarsList;
