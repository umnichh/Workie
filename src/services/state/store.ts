// import {configureStore, PayloadAction} from "@reduxjs/toolkit";

// type initialType = {
//   userLogin: string,
//   userPassword: string,
// }
// const initialState : initialType = {
//   userLogin: "",
//   userPassword: "",
// }
// function userReducer(state = initialState, action: PayloadAction<string>) {
//   switch (action.type) {
//     case 'auth/login':
//       return {...state, userLogin: action.payload};
//     case 'auth/password':
//       return {...state, userPassword: action.payload};
//     default:
//       return state;
//   }
// }

// const store = configureStore({ reducer: userReducer});
// export default store;