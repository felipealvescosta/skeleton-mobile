import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {ProfileSkeleton} from './src/components/skeletons/profile';
import {Profile} from './src/components/profile';

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      {isLoading ? <ProfileSkeleton /> : <Profile />}
    </>
  );
};
export default App;
