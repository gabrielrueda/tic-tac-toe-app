import React, { useState } from 'react';
import { Dimensions } from 'react-native';

module.exports = {
    text: 'play',
    hello: 'world',
    defaultFont: "cornerstone",
    colour: {
      darkGreen:"#067146",
      lightGreen: "#1AC999",
      lightBlue: "#B1DEDE",
    },
    width: Dimensions.get('window').width,
    border: {
      width: 3,
      radius: 10,
    },
  };
