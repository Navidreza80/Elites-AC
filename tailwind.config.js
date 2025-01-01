/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.css",
    "./src/components/login/login.tsx",
    "./src/components/forgetPassword/forgetPassword.tsx"
  ],
  theme: {
    fontFamily: {
      'DannaThin': ['DannaThin'],
      'DannaExtraLight': ['DannaExtraLight'],
      'DannaLight': ['DannaLight'],
      'DannaNormal': ['DannaNormal'],
      'DannaMedium': ['DannaMedium'],
      'DannaDemiBold': ['DannaDemiBold'],
      'DannaBold': ['DannaBold'],
      'DannaExtraBold': ['DannaExtraBold'],
    },
    extend: {},
  },
  plugins: [],
}

