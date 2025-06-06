import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, RootState, AppStore } from '../store/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector` these are typed hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()