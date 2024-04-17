import { userApi } from "../../api/axios";
import { ILoginForm, IUser } from "../../types/user";
import { IUserStore } from "./type";
import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

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

export const logoutUser = createAsyncThunk("user/logout", async (_: void, {rejectWithValue}) => {
  try {
    return await userApi.logout();
  } catch (error) {
    return rejectWithValue(error);
  }
});

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
      toast.success('Login successfully');
    })
    .addCase(getUserProfile.fulfilled, (state: IUserStore, action:PayloadAction<IUser>)=>{
      console.log("user login, save token to local storage");
      state.user = action.payload;
    })
    .addCase(logoutUser.fulfilled, (state: IUserStore) => {
      state.user = {
        email: "",
        phoneNumber: "",
        avatar: "",
        name: "",
        public_id: "",
        gender: false,
      }
      toast.success('Logout Successfully');
    })
  }
})

export default userSlice.reducer;