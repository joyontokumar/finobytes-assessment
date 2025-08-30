import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  token: null,
  role: null,
  permissions: null,
};
const tokenInfoSlice = createSlice({
  name: "token-info",
  initialState,
  reducers: {
    storeTokenInfo(state, action: PayloadAction<any>) {
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
        permissions: action.payload.permissions,
      };
    },
    resetTokenInfo() {
      return initialState;
    },
  },
});
export const { storeTokenInfo, resetTokenInfo } = tokenInfoSlice.actions;
export default tokenInfoSlice.reducer;
