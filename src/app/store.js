import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import newUserReducer from "../features/newUserSlice";
import animationReducer from "../features/animationSlice";
import sidebarReducer from "../features/sidebarSlice";
import phnSidebarReducer from "../features/phnSidebarSlice";
import chatReducer from "../features/chatSlice";
import userDocReducer from "../features/userDocSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    newUser: newUserReducer,
    animation: animationReducer,
    sidebar: sidebarReducer,
    phnSidebar: phnSidebarReducer,
    chat: chatReducer,
    userDoc:userDocReducer
  },
});
