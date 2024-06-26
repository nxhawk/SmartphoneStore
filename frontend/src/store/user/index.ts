import { userApi } from "../../api/axios";
import { ILoginForm, IRegisterForm, IUpdatePasswordForm, IUser } from "../../types/user";
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

export const registerUser = createAsyncThunk('user/register', 
  async (user: IRegisterForm, {rejectWithValue}) => {
  try {
    return await userApi.signup(user);
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

export const updateProfile = createAsyncThunk('user/profile', 
  async (user: FormData, {rejectWithValue}) => {
  try {
    return await userApi.updateProfile(user);
  } catch (error) {
    return rejectWithValue(error);
  }
})

export const changePassword = createAsyncThunk('user/password', 
  async (data: IUpdatePasswordForm, {rejectWithValue}) => {
  try {
    return await userApi.changePassword(data);
  } catch (error) {
    return rejectWithValue(error);
  }
})

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
      state.user = action.payload;
    })
    .addCase(registerUser.fulfilled, ()=>{
      toast.success('Register successfully');
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
    .addCase(updateProfile.fulfilled, ()=>{
      toast.success('Profile Updated Successfully', {
        className: 'w-72'
      });
    })
    .addCase(changePassword.fulfilled, ()=>{
      toast.success('Password updated Successfully', {
        className: 'w-72'
      });
    })
  }
})

export default userSlice.reducer;