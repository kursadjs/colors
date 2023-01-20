import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: '#6366f1',
  soundEffect: null,
  headerStatus: true,
  colorFormat: {
    active: null,
    list: [
      {
        id: 'hex'
      },
      {
        id: 'rgb'
      }
    ]
  },
  colorPallette: [
    { name: 'Crimson', color: '#d90429' },
    { name: 'Blush', color: '#ef233c' },
    { name: 'Fuchsia', color: '#d81159' },
    { name: 'Rose', color: '#FF5DCD' },
    { name: 'Tangerine', color: '#FC4C02' },
    { name: 'Sunset', color: '#FF8200' },
    { name: 'Gold', color: '#FFBF00' },
    { name: 'Pistachio', color: '#C1DF1F' },
    { name: 'Aqua', color: '#44D7A8' },
    { name: 'Meadow', color: '#10b981' },
    { name: 'Jade', color: '#009B77' },
    { name: 'Sapphire', color: '#38bdf8' },
    { name: 'Navy', color: '#6366f1' },
    { name: 'Violet', color: '#7209b7' },
    { name: 'Midnight', color: '#4B0082' },
    { name: 'Burgundy', color: '#66023C' },
    { name: 'Cocoa', color: '#7f5539' },
    { name: 'Olive Green', color: '#BBBE64' },
    { name: 'Lilac', color: '#B4AEF4' },
    { name: 'Sand', color: '#a5a58d' },
    { name: 'Earth', color: '#575A4B' },
    { name: 'Forest', color: '#4B644A' },
    { name: 'Khaki', color: '#606c38' },
    { name: 'Smoke', color: '#B3BAC1' },
    { name: 'Silver', color: '#8C92AC' },
    { name: 'Mercury', color: '#95a5a6' },
    { name: 'Cloudy', color: '#C0C5C1' },
    { name: 'Sky Blue', color: '#85C1E9' },
    { name: 'Lavender', color: '#D2B4DE' },
    { name: 'Cotton Candy', color: '#F5B7B1' },
    { name: 'Rosewood', color: '#F1948A' },
    { name: 'Mustard', color: '#F9D77E' },
    { name: 'Periwinkle', color: '#9FB3C8' },
    { name: 'Moss', color: '#A7D8B9' },
    { name: 'Ecru', color: '#EDD9B6' },
    { name: 'Sepia', color: '#947C6D' }
  ]
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload
    },
    changeSoundEffect: (state, action) => {
      state.soundEffect = action.payload
      localStorage.setItem('soundEffect', action.payload)
    },
    changeColorFormat: (state, action) => {
      state.colorFormat.active = action.payload
      localStorage.setItem('copyFormat', action.payload)
    },
    changeHeaderStatus: (state, action) => {
      state.headerStatus = action.payload
    }
  }
})

export const {
  changeColor,
  changeSoundEffect,
  changeColorFormat,
  changeHeaderStatus
} = settingsSlice.actions

export default settingsSlice.reducer
