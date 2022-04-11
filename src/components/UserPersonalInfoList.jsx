const UserPersonalInfoList = ({ data }) => {
  return (
    <ul className='max-w-fit p-5'>
      {data.map(({ name, age, profession }, index) => (
        <li key={index} className='bg-slate-800 px-10 py-4 mb-5 text-gray-200'>
          <p className='capitalize'>Name: {name}</p>
          <p className='capitalize'>Age: {age}</p>
          <p className='capitalize'>Profession: {profession}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserPersonalInfoList;
