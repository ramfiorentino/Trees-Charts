import { createSlice } from "@reduxjs/toolkit";


/*
    { city: 'Savona', percentage: 83.87, coverKm2: 55, totalKm2: 65 },
    { city: 'Baia Mare', percentage: 83.27, coverKm2: 192, totalKm2: 231 },
    { city: 'Umeå', percentage: 81.71, coverKm2: 1953, totalKm2: 2391 },
    { city: 'Kristiansand', percentage: 78.97, coverKm2: 217, totalKm2: 274 },
    { city: 'Borås', percentage: 77.98, coverKm2: 759, totalKm2: 974 },
*/

const initialState = { 
  // TOP 5 EUROPE
  array1: [
    { city: 'Oslo', percentage: 72, coverKm2: 327, totalKm2: 454 },
    { city: 'Helsinki', percentage: 43.74, coverKm2: 91, totalKm2: 208 },
    { city: 'Stockholm', percentage: 33.89, coverKm2: 71, totalKm2: 210 },
    { city: 'Barcelona', percentage: 25.32, coverKm2: 25, totalKm2: 98 },
    { city: 'Copenhagen', percentage: 16.31, coverKm2: 15, totalKm2: 91 },
  ],
  // TOP 5 SPAIN
  array2: [
    { city: 'Cuenca', treePercentage: 77.33, treeCoverKm: 704, cityKm2: 911 },
    { city: 'Jaén', treePercentage: 72.28, treeCoverKm: 307, cityKm2: 424 },
    { city: 'Linares', treePercentage: 67.47, treeCoverKm: 133, cityKm2: 197 },
    { city: 'Irun', treePercentage: 65.77, treeCoverKm: 27, cityKm2: 42 },
    { city: 'Sagunto', treePercentage: 62.69, treeCoverKm: 83, cityKm2: 132 }
  ], 
};
  
  const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
      setArray1: (state, action) => {
        state.array1 = [...action.payload];
      },
      setArray2: (state, action) => {
        state.array2 = [...action.payload];
      },
    },
  });
  
  export default dataSlice.reducer;
  
  