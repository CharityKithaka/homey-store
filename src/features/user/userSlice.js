import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
  autumn: 'autumn',
  luxury: 'luxury',
};

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};

const getThemeLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.autumn;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.success('Logged out');
    },
    toggleTheme: (state) => {
      const { autumn, luxury } = themes;
      state.theme = state.theme === autumn ? luxury : autumn;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
