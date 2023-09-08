import {View, ActivityIndicator, StyleSheet}  from 'react-native';

const ApiLoader = (props)=> (<>
    <View>
        { props.loading ? <ActivityIndicator size="small" color = "red" style = {styles.loaderStyle}/> :null }
    </View>
</>)

const styles = StyleSheet.create({
    loaderStyle : {
        alignItems : "center",
        marginVertical : 300
    }
})

export {
    ApiLoader
}