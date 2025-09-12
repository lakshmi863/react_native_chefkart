import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

const PaymentScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  
  const selectedDishes = params.selected ? JSON.parse(params.selected) : [];
  
  const totalItems = selectedDishes.length;
  const mockPricePerItem = 9.99; // Example price
  const totalPrice = (totalItems * mockPricePerItem).toFixed(2);

  const handlePayNow = () => {
    Alert.alert(
      "Payment Successful!",
      `You have successfully paid $${totalPrice} for ${totalItems} items.`,
      [{ text: "OK", onPress: () => router.replace('/') }] // Go back to the home screen after paying
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity style={styles.backLink} onPress={() => router.back()}>
          <Text style={styles.backLinkText}>&larr; Back to Menu</Text>
        </TouchableOpacity>
        
        <Text style={styles.ingredientDishNameBig}>Order Summary</Text>
        
        {selectedDishes.map((dish) => (
          <View key={dish.id} style={styles.ingredientRow}>
            <Text style={styles.ingredientRowText}>{dish.name}</Text>
            <Text style={styles.ingredientRowText}>$ {mockPricePerItem}</Text>
          </View>
        ))}

        <View style={[styles.ingredientRow, { borderTopWidth: 1, borderColor: '#ccc', marginTop: 20, paddingTop: 20 }]}>
            <Text style={[styles.ingredientRowText, {fontWeight: 'bold'}]}>Total Price:</Text>
            <Text style={[styles.ingredientRowText, {fontWeight: 'bold'}]}>$ {totalPrice}</Text>
        </View>

      </ScrollView>

      <View style={[styles.summaryBar, { position: 'relative' }]}>
        <TouchableOpacity style={styles.continueBtn} onPress={handlePayNow}>
          <Text style={styles.continueBtnText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;