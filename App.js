import { NativeBaseProvider } from 'native-base';
import { Routes } from './src/routes'
import { SafeAreaView } from 'react-native-safe-area-context'

export default () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
        <Routes />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
