import React from 'react';
import {
  ImageBackground,
  Linking,
  Platform,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { getStyles } from './styles';
import Button from '../../components/button';
import { useStore } from '../../zustand';
import { navigate } from '../../utils/navigationUtils';
import { ScreensName, Strings } from '../../theme/strings';
import { ApiEndpoints, Constants } from '../../theme/constants';
import { useTheme } from '../../theme/themeContext';
import { Formik } from 'formik';
import * as yup from 'yup';
import InputField from '../../components/textInput';
import { ISignInForm } from './types';
import Axios from '../../../axiosConfig';

const signInValidationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInScreen = () => {
  const styles = getStyles();
  const { fonts, colors } = useTheme();
  const {
    setIsAuth,
    setAccessToken,
    setIsLoading,
    isLoading,
    setTimezone,
    setRefreshToken,
    setToastMessage,
  } = useStore(state => state);



  const handleLogIn = async (values: ISignInForm) => {
    const apiBody = {
      username: values?.username,
      password: values?.password,
    };
    console.log(JSON.stringify(apiBody, null, 2), 'apiBody');
    try {
      setIsLoading(true);
      const response = await Axios.post(ApiEndpoints.login, apiBody);
      if (response?.data?.success) {
        const resp = await Axios.post(
          ApiEndpoints.getTimezone,
          {},
          {
            headers: {
              Authorization: `Bearer ${response?.data?.access_token}`,
            },
          },
        );
        if (resp?.data?.success) {

          const scopesResp = await Axios.post(
            ApiEndpoints.getScopes,
            {},
            {
              headers: {
                Authorization: `Bearer ${response?.data?.access_token}`,
              },
            },
          );
          if (scopesResp?.data?.success) {
            console.log("Timezone : ", JSON.stringify(resp?.data, null, 2))
            console.log("Timezone : ", resp?.data?.timezone)
            setIsAuth(true);
            setTimezone(resp?.data?.timezone);
            setAccessToken(response?.data?.access_token);
            setRefreshToken(response?.data?.refresh_token);
            navigate(ScreensName.DrawerNavigatorScreen);
            setIsLoading(false);
          } else {
            console.log(resp?.data, 'error in getting scopes');
            setIsLoading(false);
          }
        } else {
          console.log(resp?.data, 'error in getting timezone');
          setIsLoading(false);
        }
      } else {
        console.log(response?.data?.error?.message, 'error in logged in');
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Error:', error);
      if (error && error?.message.indexOf("400") != -1) {
        setToastMessage({
          message: "Invalid Credentials",
          type: 'danger',
        });
      } else {
        setToastMessage({
          message: error?.message || "Something went wrong",
          type: 'danger',
        });
      }
      console.log(JSON.stringify(error, null, 2), 'error in log in');
      setIsLoading(false);
    }
  };

  const submitHandler = (values: ISignInForm) => {
    // handleOAuthLogIn();
    handleLogIn(values);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/gradialBackground.png')}
      style={styles.backgroundStyle}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <View style={styles.mainContainer}>
        <Text style={[fonts.h2Bold, styles.headingStyle]}>
          {Strings.MemberLogin}
        </Text>
        <Text style={[fonts.buttonMedium, styles.subHeadingStyle]}>
          {Strings.TheAllInOneMarketingAndBusinessSoftwareSolution}
        </Text>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={signInValidationSchema}
          onSubmit={values => submitHandler(values)}>
          {({
            handleChange,
            handleSubmit,
            handleReset,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.formContainer}>
              <InputField
                label={Strings.EnterUsername}
                placeholder={Strings.EnterUsername}
                onChangeText={handleChange('username')}
                value={values.username}
                error={touched.username ? errors.username : null}
              />
              <View style={styles.passwordInputView}>
                <InputField
                  label={Strings.Password}
                  placeholder={Strings.EnterPassword}
                  password={true}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  error={touched.password ? errors.password : null}
                  customInputStyle={[styles.passwordInputStyle]}
                />
              </View>
              <Pressable
                style={styles.forgotPasswordButtonStyle}
                onPress={() => {
                  handleReset();
                  navigate(ScreensName.ForgotPasswordScreen);
                }}>
                <Text style={[fonts.button, styles.forgotPasswordTextStyle]}>
                  {Strings.ForgetPassword}
                </Text>
              </Pressable>
              <Button
                title={Strings.SignIn}
                isLoading={isLoading}
                customStyle={[styles.buttonStyle]}
                onPress={() => {
                  setIsAuth(true);
                  setAccessToken("asdasd");
                  navigate(ScreensName.AppStackScreen);
                  // handleSubmit()
                }}
              />
              <Text
                style={[
                  fonts.captionMedium,
                  styles.termsAndConditionsNormalText,
                ]}>
                {Strings.ByLoggingInYouAreAgreeingToOur}
                <Text
                  style={styles.termsAndConditionsHighlightedText}
                  onPress={() =>
                    Linking.openURL(
                      'https://app.profitdial.com/services/account/terms',
                    )
                  }>
                  {Strings.TermsConditions}.
                </Text>
              </Text>
            </View>
          )}
        </Formik>
      </View>
    </ImageBackground>
  );
};

export default SignInScreen;
