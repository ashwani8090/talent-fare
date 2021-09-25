import {useState, useEffect} from 'react';
import {addEventListener} from '@react-native-community/netinfo';

export default function useConnectionInfo() {
  const [isConnected, setConnection] = useState(true);

  useEffect(() => {
    addEventListener((netInfoState) => {
      setConnection(netInfoState.isConnected);
    });
  }, []);

  return isConnected;
}
