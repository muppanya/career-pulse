// src/screens/QuizScreen.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const questions = [
  { id: 1, question: "What are your hobbies?", options: ["Tech", "Art", "Sports", "Music"] },
  // Add more questions as needed
];

function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleNextQuestion = (option) => {
    setAnswers([...answers, option]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Finished Quiz', answers); // Here you could navigate to a results screen
    }
  };

  return (
    <View>
      <Text>{questions[currentQuestionIndex].question}</Text>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <Button key={index} title={option} onPress={() => handleNextQuestion(option)} />
      ))}
    </View>
  );
}

export default QuizScreen;
