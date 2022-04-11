import './App.css';
import AddOneMoreUser from './components/AddOneMoreUser';
import UserPersonalInfoList from './components/UserPersonalInfoList';
import { useStore } from './store/StoreContext';

function App() {
  const store = useStore();
  const usersPersonalInfoData = store.usersPersonalInfo.data;

  return (
    <div className='py-16 px-6'>
      {usersPersonalInfoData ? (
        <>
          <AddOneMoreUser />
          <UserPersonalInfoList data={usersPersonalInfoData} />
        </>
      ) : (
        <h1>Loading UserPersonalInfoList data...</h1>
      )}
    </div>
  );
}

export default App;
