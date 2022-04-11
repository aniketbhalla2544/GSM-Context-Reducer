import { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

const StoreContext = createContext(null);
const StoreDispatchContext = createContext(null);

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("can't access store out of provider");
  }
  return store
};

export const useStoreDispatch = () => {
  const storeDispatch = useContext(StoreDispatchContext);
  if (!storeDispatch) {
    throw new Error("can't access store out of provider");
  }
  return storeDispatch
};

function storeReducer(state, action) {
  const { type, payload } = action;
  if (type === 'usersPersonalInfo/ADD_USER') {
    state.usersPersonalInfo.data.push(payload);
    return void state;
  }
}

const initialStore = {
  usersPersonalInfo: {
    data: [
      {
        name: 'aniket',
        age: '24',
        profession: 'Front-End Web Developement',
      },
      {
        name: 'noushad',
        age: '22',
        profession: 'Front-End Web Developement',
      },
      {
        name: 'abhishek',
        age: '24',
        profession: 'Bookkeeping',
      },
    ],
  },
};

export function StoreContextProvider({ children }) {
  const [store, storeDispatch] = useImmerReducer(storeReducer, initialStore);

  return (
    <StoreContext.Provider value={store}>
      <StoreDispatchContext.Provider value={storeDispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreContext.Provider>
  );
}



