import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ActiveServiceState {
  id: string;
}

const initialState: ActiveServiceState = {
  id: '',
};

export const activeServiceSlice = createSlice({
  name: 'activeService',
  initialState,
  reducers: {
    setActiveService: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    clean: (state) => {
      state.id = '';
    },
  },
});

export const { setActiveService, clean } = activeServiceSlice.actions;

export default activeServiceSlice.reducer;
