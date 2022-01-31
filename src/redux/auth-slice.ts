import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NewUser, CheckUser, User } from "../interfaces/db_interfaces";

const addUser = createAsyncThunk("addUser", async (user: NewUser) => {
  const req = await axios.post("/addUser", user).then((res) => res.data);
  return req;
});

const fetchUser = createAsyncThunk(
  "fetchUser",
  async (credentials: CheckUser) => {
    const req = await axios
      .get("/fetchUser", {
        params: {
          email: credentials.email,
          password: credentials.password,
        },
      })
      .then((res) => res.data);

    return req;
  }
);

export const authSlice = createSlice({
  name: "recipes",
  initialState: { currentUser: {} as User, loggedIn: false, rejected: false },
  reducers: {
    logout: (state) => {
      state.currentUser.username = "";
      state.currentUser.email = "";
      state.loggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loggedIn = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      if (action.payload == null) {
        state.loggedIn = false;
        state.rejected = true;
      } else {
        state.currentUser = action.payload;
        state.loggedIn = true;
        localStorage.setItem("user", state.currentUser.username);
      }
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loggedIn = false;
      state.rejected = true;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
export { addUser, fetchUser };
