import {MMKVLoader} from 'react-native-mmkv-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import type {StateStorage} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

import {createAppSlice, IAppSlice} from './slices/AppSlice/createAppSlice';
import {createAuthSlice, IAuthSlice} from './slices/AuthSlice/createAuthSlice';

import {PersistStateArray} from './persistState';

interface IStore extends IAppSlice, IAuthSlice {}

const MMKV = new MMKVLoader().withInstanceID('zustand').initialize();

export const useStore = create(
  immer<IStore>(
      persist(
        (set, get, api) => ({
          ...createAppSlice(set, get, api),
          ...createAuthSlice(set, get, api),
        }),
        {
          name: 'reiprofitdial',
          version: 1,
          storage: createJSONStorage(() => MMKV as unknown as StateStorage),
          partialize: state =>
            Object.fromEntries(
              Object.entries(state).filter(([key]) =>
                PersistStateArray.includes(key),
              ),
            ),
        },
      ),
  ),
);
