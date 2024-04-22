// src/screens/SuggestionScreen.js
import React from 'react';
import { View, Text } from 'react-native';

function SuggestionScreen({ route }) {
  const { userAnswers } = route.params;
  // Based on userAnswers, fetch and display relevant career suggestions
  return (
    <View>
      <Text>Your suggested careers based on your answers:</Text>
      {/* Map through suggestions and display them */}
    </View>
  );
}

export default SuggestionScreen;
