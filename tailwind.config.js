/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/screens/*.{js,jsx,ts,tsx}',
    './src/components/formik/*.{js,jsx,ts,tsx}',
    './src/components/*.{js,jsx,ts,tsx}',
    './src/screens/onboarding/*.{js,jsx,ts,tsx}',
    './src/screens/home/*.{js,jsx,ts,tsx}',
    './src/screens/transaction/*.{js,jsx,ts,tsx}',
    './src/screens/budget/*.{js,jsx,ts,tsx}',
    './src/screens/stack/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        'dark-25': '#7A7E80',
        'dark-50': '#464A4D',
        'dark-75': '#161719',
        'dark-100': '#0D0E0F',

        'light-20': '#E3E5E5',
        'light-40': '#F2F4F5',
        'light-60': '#F7F9FA',
        'light-80': '#FCFCFC',
        'light-100': '#FFFFFF',

        'violet-20': '#EEE5FF',
        'violet-40': '#D3BDFF',
        'violet-60': '#B18AFF',
        'violet-80': '#8F57FF',
        'violet-100': '#7F3DFF',

        'red-20': '#FDD5D7',
        'red-40': '#FDA2A9',
        'red-60': '#FD6F7A',
        'red-80': '#FD5662',
        'red-100': '#FD3C4A',

        'green-100': '#CFFAEA',
        'green-100': '#93EACA',
        'green-100': '#65D1AA',
        'green-100': '#2AB784',
        'green-100': '#00A86B',

        'yellow-20': '#FCEED4',
        'yellow-40': '#FCDDA1',
        'yellow-60': '#FCCC6F',
        'yellow-80': '#FCBB3C',
        'yellow-100': '#FCAC12',

        'blue-20': '#BDDCFF',
        'blue-40': '#8AC0FF',
        'blue-60': '#57A5FF',
        'blue-80': '#248AFF',
        'blue-100': '#0077FF',
      },
    },
  },
  plugins: [],
};
