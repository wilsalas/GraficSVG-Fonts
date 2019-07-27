import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts';
import * as  shape from 'd3-shape';
import * as Font from 'expo-font';

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
const contentInset = { top: 40, bottom: 20 }

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount()  {
    await Font.loadAsync({
      'Montreal-Regular': require('./assets/fonts/Montreal-Regular.ttf'),
      'Montreal-Bold': require('./assets/fonts/Montreal-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }


  render() {
    return (
      <View style={{ flexDirection: 'row', height: 200, width: '90%' }}>

        <YAxis
          data={data}
          contentInset={contentInset}
          svg={{
            fill: 'green',
            fontSize: 10,
          }}
          numberOfTicks={10}
          formatLabel={value => {
            return `${value} numero `
          }}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16 }}
          data={data}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
          contentInset={contentInset}
        >
          <Grid />
        </LineChart>

        {
          this.state.fontLoaded ? (
            <Text style={{ fontFamily: 'Montreal-Bold', fontSize: 56 }}>
              1'250.5000
             </Text>
          ) : null
        }

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
