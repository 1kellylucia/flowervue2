import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 初始化 Firebase, 从云控制台辅助


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAN3C77mdndXvGloz1_llXGPVliJXdLSLY",
  authDomain: "fourth-elixir-224713.firebaseapp.com",
  databaseURL: "https://fourth-elixir-224713.firebaseio.com",
  projectId: "fourth-elixir-224713",
  storageBucket: "fourth-elixir-224713.appspot.com",
  messagingSenderId: "284175350879"
};
firebase.initializeApp(config);


// 共享状态对象，即任何vue组件
// 可以访问
export const store = {
  ballsInFeed: null,
  currentUser: null,
  writeBall: (message) => console.log(message)
};
// 引用balls
const ballsCollection = firebase.firestore().collection('balls');
// onSnapshot 在数据改变时执行
// 在底层的firestore集合中进行更改
// 它将通过一个引用数组传递给
// 与你的查询匹配的文档
ballsCollection
  .orderBy('createdOn', 'desc')
  .limit(5)
  .onSnapshot((ballsRef) => {
    const balls = [];
    ballsRef.forEach((doc) => {
      const ball = doc.data();
      ball.id = doc.id;
      balls.push(ball);
    });
    console.log('Received Balls feed:', balls);
    store.ballsInFeed = balls;
  });
firebase.auth().onAuthStateChanged((user) => {
  store.currentUser = user;
});

