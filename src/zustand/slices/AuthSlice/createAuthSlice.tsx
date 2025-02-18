import {StateCreator} from 'zustand';

export interface IAuthSlice {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  refreshToken: string;
  setRefreshToken: (refreshToken: string) => void;
  twilioAccessToken: string;
  setTwilioAccessToken: (twilioAccessToken: string) => void;
  userData: object | null;
  setUserData: (userData: object | null) => void;
  timezone: string;
  setTimezone: (timezone: string) => void;
  resetAuthSlice: () => void;
}

const initialState = {
  isAuth: false,
  accessToken: '',
  refreshToken: '',
  twilioAccessToken: '',
  userData: null,
  timezone: '',
};

export const createAuthSlice: StateCreator<IAuthSlice> = set => ({
  ...initialState,
  setIsAuth: (isAuth): void => {
    set({isAuth});
  },
  setAccessToken: (accessToken): void => {
    set({accessToken});
  },
  setRefreshToken: (refreshToken): void => {
    set({refreshToken});
  },
  setTwilioAccessToken: (twilioAccessToken): void => {
    set({twilioAccessToken});
  },
  setUserData: (userData: object | null): void => {
    set({userData: userData});
  },
  setTimezone(timezone): void {
    set({timezone});
  },
  resetAuthSlice: (): void => {
    set(initialState);
  },
});
