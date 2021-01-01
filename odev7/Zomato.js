import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Zomato extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rest: null
       
        }
        this.state = {
          
            dailymenu: null
        }
    }


    


    componentDidMount() {

        fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=17870890"
            , {
                method: 'GET',
                headers: {
                    "user-key": "25d4937fdc89e948387f6e22fafec17f"
                }
            })
            .then(r => {
                return r.json();
            })
            .then(res => {
                this.setState({ rest: res });
            }).catch(e => {
                console.warn("error zomato : ", e);
            });

            fetch("https://developers.zomato.com/api/v2.1/dailymenu?res_id=17870890"
            , {
                method: 'GET',
                headers: {
                    "user-key": "25d4937fdc89e948387f6e22fafec17f"
                }
            })
            .then(r => {
                return r.json();
            })
            .then(res => {
                this.setState({ dailymenu: res });
            }).catch(e => {
                console.warn("error zomato : ", e);
            });
    }

    render() {

        

        if (!this.state.rest) {
            return null;
        }
        if (!this.state.dailymenu) {
            return null;
        }
        return (
            <View>
            <Text>Restaurant : {this.state.rest.name}</Text>
            
            <Text>Adres : {this.state.rest.location.address}</Text>
           
            <Text>Pahalılık derecesi : {this.state.rest.price_range}</Text>

            <Text>Para birimi : {this.state.rest.currency}</Text>

            <Text>İki kişilik ortalama ücret : {this.state.rest.average_cost_for_two}</Text>

            <Text>Günlük menü :  {this.state.dailymenu.message}</Text>


            <Text>İyi Günler Dileriz.</Text>

            </View>
        );
    }
}