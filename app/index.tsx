import { useRouter } from 'expo-router'; // <-- Import useRouter
import React, { useMemo, useState } from 'react';
import { SafeAreaView, SectionList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DishCard from '../components/DishCard';
import DishDetailModal from '../components/DishDetailModal';
import Filters from '../components/Filters';
import { dishes as allDishes } from '../data/mockDishes';
import { styles } from '../styles/styles';

const MenuScreen = () => {
  const router = useRouter(); 
  
  
  const [selectedCategory, setSelectedCategory] = useState('STARTER');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDishForModal, setSelectedDishForModal] = useState(null);

  const handleAddDish = (dishId) => {
    const dishToAdd = allDishes.find(d => d.id === dishId);
    if (dishToAdd) setSelectedDishes((prev) => [...prev, dishToAdd]);
  };
  const handleRemoveDish = (dishId) => {
    setSelectedDishes((prev) => prev.filter((dish) => dish.id !== dishId));
  };
  const handleViewMore = (dish) => {
    setSelectedDishForModal(dish);
    setModalVisible(true);
  };
  
  //  ADD a function to handle navigation to payment 
  const handleContinue = () => {
    if (selectedDishes.length === 0) return; 
    
  
    router.push({
      pathname: '/payment',
      params: { selected: JSON.stringify(selectedDishes) }
    });
  };

  
  const dishData = useMemo(() => {
    // ...
    const filteredByCategory = allDishes.filter((dish) => dish.mealType === selectedCategory);
    
    const filteredByDiet = filteredByCategory.filter((dish) => {
      if (vegOnly && !nonVegOnly) return dish.type === 'VEG';
      if (!vegOnly && nonVegOnly) return dish.type === 'NON-VEG';
      return true;
    });

    const filteredBySearch = filteredByDiet.filter((dish) =>
      dish.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const grouped = filteredBySearch.reduce((acc, dish) => {
      const { cuisine } = dish;
      if (!acc[cuisine]) acc[cuisine] = [];
      acc[cuisine].push(dish);
      return acc;
    }, {});
    
    return Object.keys(grouped).map(cuisine => ({ title: cuisine, data: grouped[cuisine] }));
  }, [selectedCategory, searchTerm, vegOnly, nonVegOnly]);
  
  const selectedIds = useMemo(() => selectedDishes.map(d => d.id), [selectedDishes]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        {/* The single search bar is here */}
        <TextInput
            style={styles.searchInput}
            placeholder="Search dish for your party....."
            value={searchTerm}
            onChangeText={setSearchTerm}
        />
      </View>
      
      <SectionList
        // ... (all the props for SectionList)
        sections={dishData}
        keyExtractor={(item, index) => item.id.toString() + index}
        renderItem={({ item }) => (
          <DishCard
            dish={item}
            onAdd={handleAddDish}
            onRemove={handleRemoveDish}
            isSelected={selectedIds.includes(item.id)}
            onViewMore={handleViewMore}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
          </View>
        )}
        ListHeaderComponent={
          <Filters
            activeCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            vegOnly={vegOnly}
            setVegOnly={setVegOnly}
            nonVegOnly={nonVegOnly}
            setNonVegOnly={setNonVegOnly}
            selectedDishes={selectedDishes}
          />
        }
        contentContainerStyle={styles.contentContainer}
      />
      
      {/* ... (The DishDetailModal remains the same) */}
      <DishDetailModal 
        visible={modalVisible}
        dish={selectedDishForModal}
        onClose={() => setModalVisible(false)}
        onAdd={handleAddDish}
        onRemove={handleRemoveDish}
        isSelected={selectedDishForModal ? selectedIds.includes(selectedDishForModal.id) : false}
      />
      
      {selectedDishes.length > 0 && (
        <View style={styles.summaryBar}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total Dish Selected ({selectedDishes.length})</Text>
          </View>
          {/* Update the continue button to use the new handler */}
          <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
            <Text style={styles.continueBtnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MenuScreen;