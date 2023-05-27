import React from "react";
import { View } from "react-native";

const FlexedDimensionBasics = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
    </View>
  )
};

const FixedDimensionBasics = () => {
  return (
    <View>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue'
        }}
      />
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'skyblue'
      }}
      />
      <View style={{
        width: 150,
        height: 150,
        backgroundColor: 'steelblue',
      }} />
    </View>
  )
};

const PercentageDimensionsBasic = () => {
  return (
    <View style={{ height: '100%' }}>
      <View
        style={{
          height: '15%',
          backgroundColor: 'powderblue'
        }}
      />
      <View
        style={{
          width: '66%',
          height: '35%',
          backgroundColor: 'skyblue',
        }}
      />
      <View style={{
        width: '33%',
        height: '50%',
        backgroundColor: 'steelblue',
      }}
      />
    </View>
  );
};
export default PercentageDimensionsBasic;