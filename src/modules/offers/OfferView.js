import React, { Component } from "react";
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { StyledText } from '../../components'
import { colors, fonts } from '../../styles';

data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six"
  }
];

export default class OfferScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>


        <Text>Most Popular</Text>

        <FlatList
          horizontal
          data={this.state.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: rowData }) => {
            return (


              <TouchableOpacity
                onPress={() => props.navigation.navigate({ routeName: 'Charts' })}
                style={styles.item}
              >
                <Image
                  source={{ uri: rowData.imageUrl }}
                  style={styles.iconImage}
                />
                <Text style={styles.itemText}>{rowData.title}</Text>
              </TouchableOpacity>



            );
          }}
          keyExtractor={(item, index) => index}
        />


        <Text>Favourites</Text>

        <FlatList
          horizontal
          data={this.state.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: rowData }) => {
            return (


              <TouchableOpacity
                onPress={() => props.navigation.navigate({ routeName: 'Charts' })}
                style={styles.item}
              >
                <Image
                  source={{ uri: rowData.imageUrl }}
                  style={styles.iconImage}
                />
                <Text style={styles.itemText}>{rowData.title}</Text>
              </TouchableOpacity>



            );
          }}
          keyExtractor={(item, index) => index}
        />

        <Text>Dinings</Text>

        <FlatList
          horizontal
          data={this.state.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: rowData }) => {
            return (


              <TouchableOpacity
                onPress={() => props.navigation.navigate({ routeName: 'Charts' })}
                style={styles.item}
              >
                <Image
                  source={{ uri: rowData.imageUrl }}
                  style={styles.iconImage}
                />
                <Text style={styles.itemText}>{rowData.title}</Text>
              </TouchableOpacity>



            );
          }}
          keyExtractor={(item, index) => index}
        />


        <Text>Shoppings</Text>

        <FlatList
          horizontal
          data={this.state.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: rowData }) => {
            return (


              <TouchableOpacity
                onPress={() => props.navigation.navigate({ routeName: 'Charts' })}
                style={styles.item}
              >
                <Image
                  source={{ uri: rowData.imageUrl }}
                  style={styles.iconImage}
                />
                <Text style={styles.itemText}>{rowData.title}</Text>
              </TouchableOpacity>



            );
          }}
          keyExtractor={(item, index) => index}
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.white,
    paddingTop: 1,
  },
  iconImage: {
    marginLeft: 5,
    width: Dimensions.get('window').width / 3 - 10,
  }
  ,
  item: {
    flex: 1,
    height: Dimensions.get('window').height / 4 - 10,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 3,
  },
})