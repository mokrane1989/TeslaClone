import {StyleSheet,StatusBar} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }

});

export default styles;