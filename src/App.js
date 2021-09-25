import React, { useMemo } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { RawIntlProvider } from 'react-intl';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import createIntl from '@utils/Intl';

const App = () => {
  const locale = 'en';
  const intl = useMemo(() => createIntl(locale), [locale]);

  return (
    <RawIntlProvider value={intl}>
      <SafeAreaProvider>
        <Text>INITIATED</Text>
      </SafeAreaProvider>
    </RawIntlProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
