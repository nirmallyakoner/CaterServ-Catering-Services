import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  redirectTo: null,
  isToggle: false,
  status: "idle",
};

export const register = createAsyncThunk(
  "/user/signup",

  async (formData) => {
    let res = await axiosInstance.post(`/user/signup`, formData);

    let resData = res?.data;

    return resData;
  }
);

export const login = createAsyncThunk(
  "/user/signin",

  async (loginData) => {
    let res = await axiosInstance.post(`/user/signin`, loginData);

    let resData = res?.data;

    return resData;
  }
);

export const AuthSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    Token_remove: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("profile_pic");
      localStorage.removeItem("first_name");
      state.isToggle = false;
      state.user = null;
    },

    // Check_Token: (state, { payload }) => {
    //   localStorage.getItem("token");
    //   state.isToggle = true;
    // },

    reset_redirectTo: (state, { payload }) => {
      state.redirectTo = payload;
      console.log(state.redirectTo, "ffffff");
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if (payload.status === 200) {
          toast(payload.message);
          localStorage.setItem("profile_pic", payload.data.profile_pic)
          localStorage.setItem("first_name", payload.data.first_name)
          state.redirectTo = "/login";
        } else {
          toast(payload.message);
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if (payload.status === 200) {
          localStorage.setItem("token", payload.token);
          localStorage.setItem("profile_pic", payload.data.profile_pic)
          localStorage.setItem("first_name", payload.data.first_name)
          state.isToggle = true;
          toast(payload.message);
          state.redirectTo = "/services";
        } else {
          toast(payload.message);
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});
export const { Token_remove, reset_redirectTo, Check_Token } =
  AuthSlice.actions;
