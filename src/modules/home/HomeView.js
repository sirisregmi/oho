import React from 'react';
import {  StyleSheet,  View, StatusBar} from 'react-native';

import { fonts, colors } from '../../styles';
import { Button, Card } from '../../components';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <StatusBar style={styles.Status}></StatusBar>
     <Card 
          name="Siris"
          expiry="11/21"
          bank="visa"
          number="1234 5678 9123 4567"
     />

     <Button
          style={[styles.demoButton, { width: 200, alignSelf: 'center' }]}
          primary
          bordered
          caption="QR"
        />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  Status:{
    backgroundColor:'#112233'
  }
});
