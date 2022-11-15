// `pages/_app.js`
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// // pages/_app.js
// import { Inter } from '@next/font/google'

// // If loading a variable font, you don't need to specify the font weight
// const inter = Inter()

// export default function App({ Component, pageProps }) {
//   return (
//     <main className={inter.className}>
//       <Component {...pageProps} />
//     </main>
//   )
// }