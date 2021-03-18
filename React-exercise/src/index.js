import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
// import Counters from "./components/counters"; //第一个counter不需要大括号包裹，因为我们在counter.jsx里面已经export了
import App from "./App"; //我们使用一个大的包裹App来包裹包括我们的counters与其他主component

// 跟着另一个tutorial做的小练习;
// function MyInfo() {
//   return;
//   <div>
//     <h1>my name is xxx</h1>
//     <ul>
//       <li></li>
//       <li></li>
//       <li></li>
//     </ul>
//   </div>;
// }
// ReactDOM.render(<MyInfo />, document.getElementById("root"));

// 我们写的react的第一行代码
// const element = <h1>Hello World
// </h1>;
// ReactDOM.render(element, document.getElementById("root"));

//我们这里改成了有一个主体叫做App，而App里面是有navbar 与counters这两个主component。
//我们要navbar的目的是为了让navbar显示我们有几个单一counter component
//但是我们的navbar与counters没有任何关系
//之所以单一counter可以使用props是因为它们与counters是父子关系，但我们的navbar与counters没有关系
// 所以接下来我们就要在App.js里做一步 lifting the states
ReactDOM.render(<App />, document.getElementById("root"));
