import { userApi } from "../../api/axios";
import { ILoginForm, IUser } from "../../types/user";
import { IUserStore } from "./type";
import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk('user/login', 
  async (user: ILoginForm, {rejectWithValue}) => {
  try {
    return await userApi.login(user);
  } catch (error) {
    return rejectWithValue(error);
  }
})

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (_: void, {rejectWithValue}) => {
    try {
      return await userApi.getUserProfile();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: IUserStore = {
  token: "",
  user : {
    email: "",
    phoneNumber: "",
    avatar: "",
    name: "",
    public_id: "",
    gender: false,
  }
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IUserStore>) =>{
    builder
    .addCase(loginUser.fulfilled, (state: IUserStore, action:PayloadAction<IUser>)=>{
      console.log("user login, save token to local storage");
      state.user = action.payload;
    })
    .addCase(getUserProfile.fulfilled, (state: IUserStore, action:PayloadAction<IUser>)=>{
      console.log("user login, save token to local storage");
      state.user = action.payload;
    })
  }
})

export default userSlice.reducer;