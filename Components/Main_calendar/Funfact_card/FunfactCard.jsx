import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const FunfactCard = () => {
  const funFacts = [
    "Did you know that the earliest evidence of alcohol consumption dates back to around 7000-6600 BCE in China, where people drank fermented beverages made from rice, honey, and fruit?",
    "In ancient Egypt, beer was so important that it was used as currency, and workers were often paid with it.",
    "The term 'toast' for drinking to someone's health originated in ancient Rome, where a piece of toasted bread was dropped into wine to improve its flavor.",
    "Wine was considered safer to drink than water in medieval Europe because the alcohol killed most of the harmful bacteria.",
    "The world's strongest beer, 'Snake Venom,' has an alcohol content of 67.5%, making it more potent than most spirits.",
    "Tequila has been shown to aid in weight loss because it contains agavins, which act as dietary fiber and help reduce appetite.",
    "The famous champagne cork pop can travel at speeds up to 25 mph, which is why you should always aim it away from people!",
    "A study found that moderate beer consumption can be beneficial for bone health due to its high levels of dietary silicon.",
    "The phrase 'drunk as a skunk' comes from the fact that skunks are naturally resistant to alcohol, allowing them to consume fermented fruit without getting intoxicated.",
    "In Finland, there is a tradition called 'kalsarikännit,' which means getting drunk at home alone in your underwear—a perfect example of enjoying alcohol in a relaxed setting."
  ];

  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  return (
    <View style={styles.funfactContainer}>
      <Text style={styles.text}>{randomFact}</Text>
    </View>
  )
}

export default FunfactCard
