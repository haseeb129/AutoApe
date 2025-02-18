import {StateCreator} from 'zustand';

export interface IAppSlice {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  appLoader: boolean;
  setAppLoader: (appLoader: boolean) => void;
  toastMessage: object;
  setToastMessage: (toastMessage: object) => void;
}

const initialState = {
  isLoading: false,
  appLoader: false,
  toastMessage: {
    message: '',
    type: '',
  },
};

export const createAppSlice: StateCreator<IAppSlice> = set => ({
  ...initialState,
  setIsLoading: (isLoading): void => {
    set({isLoading});
  },
  setAppLoader: (appLoader): void => {
    set({appLoader});
  },
  setToastMessage(toastMessage): void {
    set({toastMessage});
  },
});
