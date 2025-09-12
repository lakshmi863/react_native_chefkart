import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { dishes } from '../../data/mockDishes';
import { styles } from '../../styles/styles';

const IngredientScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const dishId = Number(id);
  const dish = dishes.find((d) => d.id === dishId);

  if (!dish) return null;

  return (
    <SafeAreaView style={styles.ingredientSafeArea}>
      <ScrollView style={styles.ingredientScreen}>
        <View style={styles.ingredientHeader}>
          <TouchableOpacity style={styles.backLink} onPress={() => router.back()}>
            <Text style={styles.backLinkText}>&larr; Ingredient List</Text>
          </TouchableOpacity>
          <Text style={styles.ingredientDishNameBig}>{dish.name}</Text>
          <Text style={styles.ingredientDescription}>{dish.description}</Text>
        </View>
        
        <View style={styles.ingredientBody}>
          <View style={styles.ingredientList}>
            <Text style={styles.ingredientTitle}>Ingredients</Text>
            <Text style={styles.ingredientSubTitle}>For 2 people</Text>
            
            {dish.ingredients.map((item, index) => (
              <View key={index} style={styles.ingredientRow}>
                <Text style={styles.ingredientRowText}>{item.name}</Text>
                <Text style={styles.ingredientRowText}>{item.quantity}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.ingredientImageContainer}>
             <Image 
                source={{ uri: dish.image }}
                style={styles.ingredientDishImage} // Use the new style here
             />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IngredientScreen;