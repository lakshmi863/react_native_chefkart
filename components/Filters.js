import React from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

const Filters = ({
  activeCategory,
  onCategoryChange,
  vegOnly,
  setVegOnly,
  nonVegOnly,
  setNonVegOnly,
  selectedDishes,
}) => {
  const getCategoryCount = (category) => {
    return selectedDishes.filter(dish => dish.mealType === category).length;
  };

  return (
    <View style={styles.filtersContainer}>
      
      {/* This <View> is now a flex row thanks to the styles */}
      <View style={styles.categoryTabs}> 
        {categories.map((category) => {
          const count = getCategoryCount(category);
          return (
            <TouchableOpacity
              key={category}
              style={[styles.tabBtn, activeCategory === category && styles.tabBtnActive]}
              onPress={() => onCategoryChange(category)}
            >
              <Text 
                style={[styles.tabText, activeCategory === category && styles.tabTextActive]}
                // Allow font to shrink on very small screens to prevent wrapping
                numberOfLines={1} 
                adjustsFontSizeToFit={true} 
              >
                {`${category} ${count}`}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      
      {/* Veg/Non-Veg Switches */}
      <View style={styles.categoryInfoContainer}>
        <Text style={styles.categoryInfoText}>
          {`${activeCategory}S Selected (${getCategoryCount(activeCategory)})`}
        </Text>
        <View style={styles.toggleContainer}>
          <Switch
            trackColor={{ false: '#767577', true: '#66bb6a' }}
            thumbColor={vegOnly ? '#4caf50' : '#f4f3f4'}
            onValueChange={() => setVegOnly(prev => !prev)}
            value={vegOnly}
          />
          <Switch
            style={{ marginLeft: 10 }}
            trackColor={{ false: '#767577', true: '#ef5350' }}
            thumbColor={nonVegOnly ? '#d32f2f' : '#f4f3f4'}
            onValueChange={() => setNonVegOnly(prev => !prev)}
            value={nonVegOnly}
          />
        </View>
      </View>
    </View>
  );
};

export default Filters;