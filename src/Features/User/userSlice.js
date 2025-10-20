import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getCurrentTheme = () => {
  const theme = localStorage.getItem("comfyTheme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};
const initialState = {
  user: getCurrentUser(),
  theme: getCurrentTheme(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user= null;
      localStorage.removeItem("user");
      toast.success("logged out");
    },
    toggleTheme: (state) => {
      state.theme =
        state.theme === themes.winter ? themes.dracula : themes.winter;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("comfyTheme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
