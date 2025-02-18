import React, {useEffect} from 'react';
import Toast, {useToast} from 'react-native-toast-notifications';
import {getStyles} from './styles';
import {useStore} from '../../zustand';

const ToastNotification = () => {
  const styles = getStyles();
  const {toastMessage, setToastMessage} = useStore(state => state);
  const toast = useToast();

  useEffect(() => {
    if (toastMessage?.message !== '') {
      toast?.show(toastMessage?.message, {
        type: toastMessage?.type,
      });
      setToastMessage({
        message: '',
        type: '',
      });
    }
  }, [toastMessage?.message]);

  return (
    <Toast
      style={styles.mainContainer}
      duration={1500}
      animationDuration={250}
      placement={'top'}
      type={'normal'}
      animationType={'slide-in'}
      offset={50}
      offsetTop={30}
      offsetBottom={40}
    />
  );
};

export default ToastNotification;
