import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image,ImageBackground } from 'react-native';
export default class Kokteyl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.drinks });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (

        
       
      <View style={{ flex: 1, padding: 24 , backgroundColor:"pink"}}>
          
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
         
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={{backgroundColor: "pink"}}>{"\n"}{"\n"}Name{"\n"}{item.strDrink} {"\n"}{"\n"}Instructions{"\n"}{item.strInstructions}
              </Text>
             
            )}
          />
        )}
      </View>
  
    );
  }
};