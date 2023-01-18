import { useEffect } from 'react';

import '../styles/globals.css';
import { SSRProvider } from 'react-bootstrap';
import Script from 'next/script';
import '../styles/main.scss';
import Footer from '../component/Common/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../component/Common/Header';
import Head from 'next/head';

// export function init() {
//   var chatbox = document.getElementById('fb-customer-chat');
//   chatbox.setAttribute('page_id', '111236271856541'); // TODO: move to args
//   chatbox.setAttribute('attribution', 'biz_inbox');

//   window.fbAsyncInit = function () {
//     FB.init({
//       xfbml: true,
//       version: 'v11.0',
//     });
//   };

//   (function (d, s, id) {
//     var js,
//       fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s);
//     js.id = id;
//     js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//     fjs.parentNode.insertBefore(js, fjs);
//   })(document, 'script', 'facebook-jssdk');
// }

// export function cleanup() {
//   (function (d, id) {
//     var target = d.getElementById(id);
//     if (target) {
//       target.parentNode.removeChild(target);
//     }
//   })(document, 'facebook-jssdk');

//   delete window.FB;
// }

// export function Facebook1() {

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   console.log('Facebook1');
  //   init();

  //   return () => {
  //     cleanup();
  //   };
  // }, []);
  return (
    <SSRProvider>
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      ></Script> */}
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script>
        {`
        var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "111236271856541");
      chatbox.setAttribute("attribution", "biz_inbox");
      
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v15.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
        `}
      </Script>
      <Header />
      <Component {...pageProps} />

      <Footer />
    </SSRProvider>
  );
}
