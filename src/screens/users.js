import React from 'react'
import {View, Text, Image, SafeAreaView ,ImageBackground,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiConfig } from '../components/info'
import songs from './data';
import styles1 from './styles1';

class Users extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      details: []
    }
  }
  usersList = (detail,idx) => {
    return (
      <SafeAreaView key={idx}>
        <TouchableOpacity
          style={styles1.listView}>
          <View style={{flexDirection:"row"}}>
          <Image
              source={require('../images/profile.jpg')}
              style={{
                  height:100,
                  width:100
              }}
          />
          <View style={{
              //flexDirection:"row",
              paddingLeft:"10%",
              paddingTop:20
          }}>
              <Text style={{
                  fontWeight:"bold"
              }}>{detail.email}</Text>
              
              <Text style={{
              fontWeight:"bold",
              color:"#916BBF",
              paddingLeft:"15%"
          }}>
              {detail.name} 
          </Text>
          </View>
          </View>
      </TouchableOpacity>
    </SafeAreaView>
    )
  }
  async componentDidMount() {
    const value = await AsyncStorage.getItem('email')
    //console.log(value);
    let data = {
      email: value
    }
    axios
     .post(apiConfig.baseUrl+'/users', data)
     .then(res => {
       this.setState({
         details: res.data
       });
     })
     .catch(err => {
       console.log(err);
     })
  }
  render() {
    return(
        <ScrollView style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
          {
            this.state.details.map((val,idx) => {
              return this.usersList(val,idx);
            })
          }
        </ScrollView>
    )
  }
}
export default Users;