import { useImmerReducer } from 'use-immer';
import { useStoreDispatch } from '../store/StoreContext';

const initialObj = {
  name: '',
  age: '',
  profession: '',
};

function addUserReducer(state, action) {
  const { type, payload } = action;
  if (type === 'ADD_NAME') {
    state.name = payload;
    return void state;
  } else if (type === 'ADD_AGE') {
    state.age = payload;
    return void state;
  } else if (type === 'ADD_PROFESSION') {
    state.profession = payload;
    return void state;
  } else {
    return state;
  }
}

const AddOneMoreUser = () => {
  const [newUserInfo, dispatch] = useImmerReducer(addUserReducer, initialObj);
  const storeDispatch = useStoreDispatch();

  const addNewUserHandler = (e) => {
    e.preventDefault();
    storeDispatch({ type: 'usersPersonalInfo/ADD_USER', payload: newUserInfo });
  };

  return (
    <form onSubmit={addNewUserHandler}>
      <div>
        <label htmlFor=''>Enter name: </label>
        <input
          value={newUserInfo.name}
          type='text'
          className='border mb-4'
          name=''
          id=''
          onChange={(e) =>
            dispatch({ type: 'ADD_NAME', payload: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor=''>Enter age: </label>
        <input
          value={newUserInfo.age}
          type='text'
          className='border mb-4'
          name=''
          id=''
          onChange={(e) =>
            dispatch({ type: 'ADD_AGE', payload: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor=''>Enter profession: </label>
        <input
          value={newUserInfo.profession}
          type='text'
          className='border mb-4'
          name=''
          id=''
          onChange={(e) =>
            dispatch({ type: 'ADD_PROFESSION', payload: e.target.value })
          }
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default AddOneMoreUser;
