import React from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground, Image, FlatList,SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import { colors, fonts } from '../../styles';

import menuList from './menuItems'


import { Button, RadioGroup, Dropdown, StyledText } from '../../components';

export default class DetailScreen extends React.Component {

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "90%",
          backgroundColor: "#CED0CE",
          margin: "5%"
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <View style={{
        marginTop: 20
      }}
      />
    )

  }
  render() {
    return (
      
      <SafeAreaView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
      >


        <ImageBackground
          source={require('../../../assets/images/background.png')}
          style={styles.profileImage
          }
        >

          <Image
            source={require('../../../assets/images/RNS_nerd.png')}
            style={styles.nerdImage}
          />

          <Text>Siris</Text>
        </ImageBackground>

        
        <SafeAreaView style={{flex: 2}}>
 
          <FlatList
            data={menuList}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
             keyExtractor={((item,index)=>index.toString())}
            renderItem={({ item, index, separators }) => (
              <TouchableOpacity
                onPress={(props) => props.navigation.navigate({ routeName: 'Gallery' })}
                //  onPress={() => this._onPress(item)}
                style={{ backgroundColor: 'white', marginLeft: "5%" }}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}
              >


                <Text>{item.title}</Text>

              </TouchableOpacity>
            )}
          /></SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

  nerdImage: {
    width: 80,
    height: 80,

  },
  container: {
    flex: 1,
  },

  profileImage: {
    flex: 1,
    height: "98%",
    backgroundColor: colors.green,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  componentsSection: {
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  componentSectionHeader: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 20,
    marginBottom: 20,
  },
  demoButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  demoIconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  demoButton: {
    marginTop: 8,
    marginBottom: 8,
  },
  demoItem: {
    marginVertical: 15,
  },
});
