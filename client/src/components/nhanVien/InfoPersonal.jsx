import React from 'react';
import { useSelector } from 'react-redux';
import Info from '../Info';

const InfoPersonal = () => {
  const user = useSelector(state => state?.auth?.currentData?.user)

  return (
    <>
      <Info
        user={user}
      />
    </>
  );
}

export default InfoPersonal