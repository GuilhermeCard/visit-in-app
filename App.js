import { NativeBaseProvider } from 'native-base';
import {Routes} from './src/routes'

export default () =>  {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
