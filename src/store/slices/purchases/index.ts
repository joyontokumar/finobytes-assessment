import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { purchasesData } from "../../../constants/purchases";
import { PurchasesDTO } from "../../../dtos/purchases";

export const fetchPurchases = createAsyncThunk(
  "purchases/fetchPurchases",
  async () => {
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    await delay(3000);
    return purchasesData;
  }
);

interface PurchaseState {
  loading: boolean;
  purchases: PurchasesDTO[];
  error: string | null;
}

const initialState: PurchaseState = {
  loading: false,
  purchases: [],
  error: null,
};

const purchasesSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPurchases.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPurchases.fulfilled,
        (state, action: PayloadAction<PurchasesDTO[]>) => {
          state.loading = false;
          state.purchases = action.payload;
        }
      )
      .addCase(fetchPurchases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch purchases";
      });
  },
});

export default purchasesSlice.reducer;
