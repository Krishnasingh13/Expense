import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import InputField from '../../components/formik/InputField';
import Google_icon from '../../assets/google_icon.png';

import {Formik} from 'formik';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const SignInScreen = ({navigation}) => {
  const [secure, setSecure] = useState(true);

  const handleSubmit = val => {
    console.log('values', val);
  };

  return (
    <SafeAreaView className="w-full h-full bg-white p-4 font-inter">
      <View className="mx-auto mt-2">
        <Text className="text-sm font-medium text-black text-center">
          Hey there,
        </Text>
        <Text className="text-lg font-semibold text-black text-center mt-1">
          Welcome Back
        </Text>
      </View>
      <View>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => handleSubmit(values)}>
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <InputField
                name="email"
                handleChange={handleChange('email')}
                handleBlur={handleBlur('email')}
                values={values.email}
                errors={errors.email}
                touched={touched.email}
                placeHolder="Email"
                iconName={'mail'}
              />

              <InputField
                name="password"
                handleChange={handleChange('password')}
                handleBlur={handleBlur('password')}
                values={values.password}
                errors={errors.password}
                touched={touched.password}
                placeHolder="Password"
                type="password"
                secure={secure}
                setSecure={setSecure}
                iconName={'lock'}
              />
              <Text className="text-right text-violet-100 font-semibold text-[12px] mt-1 mr-4">
                Forgot Password ?
              </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleSubmit}
                className="w-full bg-violet-100 rounded-xl flex items-center justify-center py-3.5 mt-5">
                <Text className=" text-white text-center text-base font-semibold">
                  Sign In
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          )}
        </Formik>

        <Text className="my-3 text-black text-sm text-center font-semibold">
          Or with
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          // onPress={() => navigation.navigate('SignUpScreen')}
          className="w-full border border-violet-20 rounded-xl flex flex-row items-center justify-center py-3.5">
          <Image
            source={Google_icon}
            alt="google icon"
            style={{height: '100%', resizeMode: 'contain'}}
          />
          <Text className=" text-black text-center text-base font-semibold ml-2">
            Sign In With Google
          </Text>
        </TouchableOpacity>
        <View className="flex flex-row items-center justify-center">
          <Text className="my-3 text-black text-sm text-center font-semibold">
            Don’t have an account yet ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text className="text-violet-100 text-sm text-center font-semibold ml-1">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
