
import { Provider } from 'react-redux';
import { store } from './context/store';
import LoggedNavigation from './navigation/logged/NotLoginNavigation';
import Toast from 'react-native-toast-message';
import NotLoginNavigation from './navigation/logged/NotLoginNavigation';



export default function App() {
  const isLogin = false;
  return (
    <Provider store={store}>
      {isLogin ?
        <LoggedNavigation />
        :
        <NotLoginNavigation />
      }
      <Toast />
    </Provider>
  );
}
