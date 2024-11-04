import { configureStore } from '@reduxjs/toolkit'
import Userdata from '../src/Slice/SliceUser'

export default configureStore({
  reducer: {
    info: Userdata,
  },
})