// React Native Bottom Navigation
import * as React from 'react';
import {useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
  Alert,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import { getApi } from '../api/api';
import { ApiLoader } from "../component/LoaderComponent";


const NodeScreen = ({ navigation }) => {
  const [reactData, setReactData] = useState([]);
  const [apiLoading, setApiLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [data, setReactdata] = useState([]);
    useEffect( () => {     
        setTimeout(() => { 
          SplashScreen.hide(); 
        }, 2000);

        getApi(`https://api.stackexchange.com/2.3/questions?order=desc&sort=hot&site=stackoverflow&page=${page}&pagesize=20&tagged=nodejs`)
        .then(result => {
          setReactData(result);
          setReactdata(result.items)
          setApiLoading(false)
        })
        .catch(err => {
          console.log("api erro", err)
        })
    },[]);


    const onScroll = () => {
      if(reactData.has_more){
        console.log("333333")
        getApi(`https://api.stackexchange.com/2.3/questions?order=desc&sort=hot&site=stackoverflow&page=${page}&pagesize=20&tagged=nodejs`)
        .then(result => {
          setPage(page + 1)
          setReactData(result);
          setReactdata([...data, ...result.items])
        })
        .catch(err => {
          console.log("api erro", err)
        })
      }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
        {apiLoading ? <ApiLoader loading = {apiLoading} /> :
          <View style={{ flex: 1, padding: 16 }}>
          <FlatList
              data={data}
              renderItem={({item}) => <Item items={item} />}
              keyExtractor={(item,index) => item.question_id + index}
              onEndReached={({ distanceFromEnd }) => {
                onScroll()
            }}
          />
          </View>
        }
        </SafeAreaView>
    );
}

const handlePress = (url) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  });
}


const Item = ({items}) =>  (<>
  <TouchableOpacity style={styles.item} onPress = {() => handlePress(items.link)}>
    <Text style={styles.subTitle}>{"Question"}</Text>
    <Text style={styles.title}>{items.title}</Text>
  </TouchableOpacity>
</>);


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#D4D4D4',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  item: {
    backgroundColor: '#f3f3f3',
    padding: 10,
    marginVertical: 5,
    marginHorizontal :2,
    borderRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 14,
    color : "black"
  },
  subTitle : {
    fontSize: 16,
    color : "black",
    fontWeight : "500"
  },
  loaderStyle : {
    flex :1,
    justifyContent : "center",
    alignItems : "center"
  }
});

export default NodeScreen;
