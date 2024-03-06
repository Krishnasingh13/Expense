import {
  View,
  Text,
  Pressable,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from 'react-native-vector-icons/FontAwesome6';
import FocusAwareStatusBar from '../../hooks/useStatusBar';
import DropDownPicker from 'react-native-dropdown-picker';
import Attachment from '../../assets/icons/attachment_icon.svg';
import Camera from '../../assets/icons/camera_icon.svg';
import Gallery from '../../assets/icons/gallery_icon.svg';
import RBSheet from 'react-native-raw-bottom-sheet';

import {Formik} from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/formik/InputField';

const initialValues = {
  amount: '',
  category: '',
  description: '',
  attachment: '',
};

const validationSchema = Yup.object().shape({
  amount: Yup.string().required('Amount is required'),
  category: Yup.string().required('Catrgory is required'),
  description: Yup.string().required('Description is required'),
  attachment: Yup.string().required('Attachment is required'),
});

const IncomeScreen = ({navigation}) => {
  const refRBSheet = useRef();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#FCFCFC',
          borderRadius: 32,
          height: 70,
        },
      });
  }, [navigation]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Pear', value: 'pear'},
  ]);

  return (
    <SafeAreaView className="w-full h-full bg-white font-inter">
      <FocusAwareStatusBar
        translucent={true}
        hidden={false}
        barStyle={'dark-content'}
        backgroundColor={'#00A86B'}
      />
      <View className="w-full h-full bg-green-100">
        <View className="p-4 flex flex-row items-center">
          <Pressable onPress={() => navigation.goBack()} className="pr-4 py-4">
            <BackIcon name="chevron-left" color={'#fff'} size={20} />
          </Pressable>
          <View className="flex-1 flex flex-row items-center justify-center pr-3">
            <Text className="text-lg font-semibold text-white">Income</Text>
          </View>
        </View>
        <View className="flex-1 flex items-center h-full justify-end">
          <View className="w-full">
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
                  <View className="px-4">
                    <Text className="text-lg font-semibold text-light-40">
                      How much ?
                    </Text>
                    <View className="flex flex-row items-center">
                      <Text className="text-[64px] font-semibold text-light-80">
                        $
                      </Text>
                      <TextInput
                        placeholder="0"
                        className="text-[70px] font-semibold text-light-80 py-0 w-full placeholder:text-light-80"
                      />
                    </View>
                  </View>

                  <View className=" w-full bg-light-100 h-fit px-4 pb-10 rounded-t-[32px] mt-3">
                    <View className="mt-4">
                      <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder={'Category'}
                        dropDownDirection="BOTTOM"
                        dropDownContainerStyle={{
                          borderColor: '#F7F9FA',
                          padding: 8,
                        }}
                        style={{
                          borderColor: '#F7F9FA',
                          padding: 8,
                        }}
                      />
                    </View>

                    <InputField
                      name="description"
                      handleChange={handleChange('description')}
                      handleBlur={handleBlur('description')}
                      values={values.description}
                      errors={errors.description}
                      touched={touched.description}
                      placeHolder="Description"
                      style={{
                        marginTop: 5,
                        backgroundColor: '#fff',
                        borderWidth: 1,
                        paddingHorizontal: 0,
                        borderColor: '#F7F9FA',
                      }}
                    />

                    <TouchableOpacity
                      // className="w-full flex items-center justify-center flex-row py-2"
                      onPress={() => refRBSheet.current.open()}
                      className="w-full border-light-60 border-dotted border flex items-center justify-center flex-row rounded-xl px-4 py-2.5 mt-5 mb-3">
                      <Attachment />
                      <Text className="text-base text-black">
                        Add attachment
                      </Text>
                    </TouchableOpacity>

                    <RBSheet
                      ref={refRBSheet}
                      closeOnDragDown={true}
                      closeOnPressMask={true}
                      customStyles={{
                        wrapper: {
                          backgroundColor: '#00000020',
                          paddingTop: 0,
                        },
                        draggableIcon: {
                          backgroundColor: '#EEE5FF',
                          paddingTop: 0,
                        },
                        container: {
                          height: 180,
                          backgroundColor: '#fff',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 32,
                          paddingBottom: 10,
                        },
                      }}>
                      <View className="p-4 flex flex-row items-end justify-center gap-5">
                        <View className=" bg-violet-20 w-[35%] flex items-center justify-center rounded-xl py-5">
                          <Camera />
                          <Text className="text-base font-semibold text-violet-100 mt-1">
                            Camera
                          </Text>
                        </View>
                        <View className=" bg-violet-20 w-[35%] flex items-center justify-center rounded-xl py-5">
                          <Gallery />
                          <Text className="text-base font-semibold text-violet-100 mt-1">
                            Gallery
                          </Text>
                        </View>
                      </View>
                    </RBSheet>

                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={handleSubmit}
                      className="w-full bg-violet-100 rounded-xl flex items-center justify-center py-3.5 mt-3">
                      <Text className=" text-white text-center text-base font-semibold">
                        Continue
                      </Text>
                    </TouchableOpacity>
                  </View>
                </KeyboardAvoidingView>
              )}
            </Formik>
          </View>

          {/* <View className="w-full h-fit bg-light-100 mt-5 rounded-t-[32px] px-4 relative overflow-hidden pb-20">
            <View className="mt-4">
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={'Category'}
                dropDownDirection="BOTTOM"
                placeholderStyle={{
                  color: '#91919F',
                }}
                dropDownContainerStyle={{
                  borderColor: '#F7F9FA',
                }}
                style={{
                  borderColor: '#F7F9FA',
                }}
              />
            </View>

            <TextInput
              className=" py-5 px-3 text-sm  text-[#3a3a3a] flex-1 border border-light-80 rounded-lg mt-3"
              name="text"
              placeholder="Email"
              placeholderTextColor={'#3a3a3a'}
            />

            <TouchableOpacity
              activeOpacity={0.8}
              className="w-full bg-violet-100 rounded-xl flex items-center justify-center py-3.5 mt-3">
              <Text className=" text-white text-center text-base font-semibold">
                Continue
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IncomeScreen;
