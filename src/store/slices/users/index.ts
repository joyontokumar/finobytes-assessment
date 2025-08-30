import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userData } from "../../../constants/users";
import { UserDTO } from "../../../dtos/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  await delay(4000);
  return userData;
});

interface UsersState {
  loading: boolean;
  users: UserDTO[];
  error: string | null;
}

const initialState: UsersState = {
  loading: false,
  users: [],
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<UserDTO[]>) => {
          state.loading = false;
          state.users = action.payload;
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export default usersSlice.reducer;
