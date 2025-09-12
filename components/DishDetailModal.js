import { Link } from 'expo-router';
import React from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

const DishDetailModal = ({ dish, visible, onClose, onAdd, onRemove, isSelected }) => {
  if (!dish) return null;

  return (
    <Modal visible={visible} transparent={true} animationType="fade" onRequestClose={onClose}>
      <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={onClose}>
        <View style={styles.modalContainer}>
          <Image source={{ uri: dish.image }} style={styles.modalImage} />
          <View style={styles.dishNameContainer}>
            <Text style={styles.modalDishName}>{dish.name}</Text>
            <View style={[ styles.vegNonVegIcon, { borderColor: dish.type === 'VEG' ? '#7ED321' : '#D0021B' } ]} />
          </View>
          <Text style={styles.modalDescription}>{dish.description}</Text>
          
          <TouchableOpacity 
            style={[styles.addButton, { position: 'relative', bottom: 0, marginBottom: 15 }]} 
            onPress={() => (isSelected ? onRemove(dish.id) : onAdd(dish.id))}
          >
            <Text style={isSelected ? styles.removeButtonText : styles.addButtonText}>
              {isSelected ? 'Remove' : 'Add +'}
            </Text>
          </TouchableOpacity>
          
          <Link href={`/ingredients/${dish.id}`} asChild>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.ingredientText}>View Ingredients</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default DishDetailModal;