import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'User',
  initialState: {

    userData: null,

  },

  reducers: {
   
    UserData: (state, action) => {
      state.value = action.payload
    },
  },
  
})

export const { userData } = userSlice.actions

export default userSlice.reducer