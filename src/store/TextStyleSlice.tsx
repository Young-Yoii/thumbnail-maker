import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type textStyleState = {
  color: string;
  shadow: boolean;
  titleSize: number;
  subTitleSize: number;
  descriptionSize: number;
};

const initialState: textStyleState = {
  color: '#ffffff',
  shadow: false,
  titleSize: 45,
  subTitleSize: 25,
  descriptionSize: 20,
};

export const textStyleSlice = createSlice({
  name: 'textStyle',
  initialState,
  reducers: {
    changeColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    setFontColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    setShadow(state) {
      state.shadow = !state.shadow;
    },
    setTitleSize(state, action: PayloadAction<number>) {
      state.titleSize = action.payload;
    },
    setSubTitleSize(state, action: PayloadAction<number>) {
      state.subTitleSize = action.payload;
    },
    setDescriptionSize(state, action: PayloadAction<number>) {
      state.descriptionSize = action.payload;
    },
    resetTextStyle(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { changeColor, setFontColor, setShadow, setTitleSize, setSubTitleSize, setDescriptionSize, resetTextStyle } = textStyleSlice.actions;
export default textStyleSlice.reducer;
