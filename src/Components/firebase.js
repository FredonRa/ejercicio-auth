import firebase from 'firebase/app'
import 'firebase/auth';

const app = {
    apiKey: "AIzaSyC-ALCjOuyL0dxzrKZTgaSoShcMX-EZhFg",
    authDomain: "app-trabajo-grupo.firebaseapp.com",
    databaseURL: "https://app-trabajo-grupo.firebaseio.com",
    projectId: "app-trabajo-grupo",
    storageBucket: "app-trabajo-grupo.appspot.com",
    messagingSenderId: "52997719722",
    appId: "1:52997719722:web:080bf63c2780547327f2d3"
};

firebase.initializeApp(app);

const authentication = firebase.auth();
export default{app, authentication};