import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pointsData } from "../../../constants/points";
import { PointsDTO } from "../../../dtos/points";

export const fetchPoints = createAsyncThunk("points/fetchPoints", async () => {
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  await delay(3000);
  return pointsData;
});

interface PointsState {
  loading: boolean;
  points: PointsDTO[];
  error: string | null;
}

const initialState: PointsState = {
  loading: false,
  points: [],
  error: null,
};

const pointsSlice = createSlice({
  name: "points",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPoints.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPoints.fulfilled,
        (state, action: PayloadAction<PointsDTO[]>) => {
          state.loading = false;
          state.points = action.payload;
        }
      )
      .addCase(fetchPoints.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch points";
      });
  },
});

export default pointsSlice.reducer;
