import { Platform, StyleSheet } from 'react-native';

const COLORS = {
  primary: '#F5A623', // Orange color from your design
  secondary: '#4A4A4A', // Dark Grey Text
  background: '#F9F9F9',
  white: '#ffffff',
  grey: '#9B9B9B',
  lightGrey: '#EAEAEA',
  green: '#7ED321',
  red: '#D0021B',
  black: '#000000',
};

export const styles = StyleSheet.create({
  // --- Global ---
  container: { flex: 1, backgroundColor: COLORS.background },
  contentContainer: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 150 },
  
 
  headerContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrey,
  },
  searchInput: {
    height: 50,
    fontSize: 16,
    color: COLORS.secondary,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    paddingHorizontal: 15,
  },

  // --- Filters ---
  filtersContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  categoryTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBtnActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  tabText: {
    fontSize: Platform.OS === 'ios' ? 14 : 12,
    color: COLORS.secondary,
    fontWeight: '500',
    textAlign: 'center',
  },
  tabTextActive: {
    color: COLORS.white,
    fontWeight: 'bold'
  },

  // --- Category Info and Toggles (Below the tabs) ---
  categoryInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGrey,
  },
  categoryInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  toggleContainer: { flexDirection: 'row', alignItems: 'center' },
  
  // --- Section Header (e.g., "North Indian") ---
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  
  // --- Horizontal Dish Card ---
  dishCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: 20,
    padding: 10,
    ...Platform.select({
      web: { boxShadow: '0 4px 8px rgba(0,0,0,0.08)' },
      default: { elevation: 3 },
    }),
  },
  dishDetails: {
    flex: 1,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  dishNameContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  dishName: { fontSize: 16, fontWeight: 'bold', color: COLORS.secondary },
  vegNonVegIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 8,
    borderWidth: 1.5,
  },
  dishDescription: {
    fontSize: 20,
    color: COLORS.black,
    marginBottom: 10,
  },
  readMoreText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  ingredientContainer: { flexDirection: 'row', alignItems: 'center' },
  ingredientText: { fontSize: 14, color: COLORS.primary, fontWeight: 'bold' },
  
  // --- Dish Image and Button ---
  imageContainer: { marginLeft: 'auto', justifyContent: 'center', alignItems: 'center' },
  dishImage: { width: 100, height: 100, borderRadius: 12 },
  addButton: {
    position: 'absolute',
    bottom: -15,
    backgroundColor: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 20,
    ...Platform.select({
      web: { boxShadow: '0 4px 8px rgba(0,0,0,0.15)' },
      default: { elevation: 4 },
    }),
  },
  addButtonText: { color: COLORS.primary, fontWeight: 'bold', fontSize: 16 },
  removeButtonText: { color: COLORS.red, fontWeight: 'bold', fontSize: 16 },
  
  // --- Summary Footer ---
  summaryBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: Platform.OS === 'ios' ? 30 : 15,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGrey,
  },
  totalContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  totalText: { fontSize: 18, fontWeight: 'bold', color: COLORS.secondary },
  continueBtn: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueBtnText: { color: COLORS.white, fontSize: 16, fontWeight: 'bold' },
  
  // --- View More Modal ---
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  modalContainer: { backgroundColor: COLORS.white, borderRadius: 12, width: '100%', maxWidth: 340, alignItems: 'center', padding: 20 },
  modalImage: { width: 200, height: 200, borderRadius: 12, marginBottom: 15 },
  modalDishName: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  modalDescription: { fontSize: 14, color: COLORS.grey, textAlign: 'center', marginBottom: 20 },
  
  // --- Ingredient Screen ---
  ingredientScreen: { backgroundColor: COLORS.white },
  ingredientSafeArea: { flex: 1, backgroundColor: COLORS.white },
  ingredientHeader: { padding: 20 }, // Simplified this header
  backLink: { // This is for the back button inside the ingredient header
    marginBottom: 15
  }, 
  backLinkText: { color: COLORS.primary, fontWeight: 'bold', fontSize: 16 },
  ingredientDishNameBig: { fontSize: 24, fontWeight: 'bold' },
  ingredientDescription: { fontSize: 16, color: COLORS.grey, marginTop: 5 },
  ingredientBody: { 
    flexDirection: 'row', 
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopWidth: 1, // Add a separator line
    borderTopColor: COLORS.lightGrey,
    paddingTop: 20
  },
  ingredientList: { flex: 1.5 }, // Give more space to the ingredient list
  ingredientTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  ingredientSubTitle: { fontSize: 16, color: COLORS.grey, marginBottom: 15 },
  ingredientRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: COLORS.lightGrey,},
  ingredientRowText: { fontSize: 16, color: COLORS.secondary },
  
  // UPDATED STYLES FOR THE INGREDIENT IMAGE
  ingredientImageContainer: {
    flex: 1, // Let it take up the remaining space
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ingredientDishImage: { // A new style for the image itself
    width: 150,
    height: 150,
    borderRadius: 12,
    resizeMode: 'cover',
  },

  // --- No Dishes Message ---
  noDishesContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, marginTop: 50 },
  noDishesText: { fontSize: 18, color: COLORS.grey, textAlign: 'center' },
});