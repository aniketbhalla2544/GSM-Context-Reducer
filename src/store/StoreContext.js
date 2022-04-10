import { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

const StoreContext = createContext(null);
const StoreDispatchContext = createContext(null);

export const useStore = () => {
  return useContext(StoreContext);
};

export const useStoreDispatch = () => {
  return useContext(StoreDispatchContext);
};

export function StoreContextProvider({ children }) {
  const [store, dispatch] = useImmerReducer(storeReducer, initialStore);

  return (
    <StoreContext.Provider value={store}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreContext.Provider>
  );
}

function storeReducer(action, state) {
  const { type, payload } = action;

  if (type === 'userPersonalInfo/ADD_USER') {
    return state.userPersonalInfo.data.push(payload);
  }
}

const initialStore = {
  userPersonalInfo: {
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
