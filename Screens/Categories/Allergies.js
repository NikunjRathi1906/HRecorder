import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default class Allergy extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
        <SafeAreaView>
          <ScrollView>
            <Text>Allergy</Text>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }
}