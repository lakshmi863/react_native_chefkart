import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

const DishCard = ({ dish, onAdd, onRemove, isSelected, onViewMore }) => {
  return (
    <View style={styles.dishCard}>
      <View style={styles.dishDetails}>
        <View style={styles.dishNameContainer}>
          <Text style={styles.dishName}>{dish.name}</Text>
          <View style={[
              styles.vegNonVegIcon, 
              { borderColor: dish.type === 'VEG' ? '#7ED321' : '#D0021B', backgroundColor: dish.type === 'VEG' ? '#7ED32120' : '#D0021B20' }
            ]} />
        </View>
        <Text style={styles.dishDescription} numberOfLines={2}>{dish.description}</Text>
        <Link href={`/ingredients/${dish.id}`} asChild>
            <TouchableOpacity style={styles.ingredientContainer}>
              <Text style={styles.ingredientText}>Ingredient</Text>
            </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => onViewMore(dish)}>
          <Image source={{ uri: dish.image }} style={styles.dishImage} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => (isSelected ? onRemove(dish.id) : onAdd(dish.id))}
        >
          <Text style={isSelected ? styles.removeButtonText : styles.addButtonText}>
            {isSelected ? 'Remove' : 'Add +'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DishCard;