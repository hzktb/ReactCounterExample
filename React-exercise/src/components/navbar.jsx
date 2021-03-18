import React, { Component } from "react";

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           NavBar
//           <span className="badge badge-pill badge-secondary m-2">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;

// stateless functional component
//除了可以用class来写我们的渲染函数以外，我们还可以使用一个叫stateless functional component的方式来写。如果说我们要return回去的东西很单一简单的话，就可以用
//要注意的一点就是 props 在sfc （stateless functional component）里的使用是要在箭头函数传一个叫 props 的形参，然后下面用到props的component要把this去掉

//destructure arguments
//因为有些人懒得写 props.xxxxx 的props，所以我们可以利用object destructure 来获取一些props里包含的属性，比如这里我们只需要props里的totalCounters，所以我们可以使用 object destructure 「」大括号
//个人猜测，因为我们这个是 sfc ，所以箭头函数那个形参在react这里面就是拿来传props用的，所以就等于是默认传递进来一个props参数，然后我们通过大括号「」destruct了props，并且拿到那个totalCounters的attribute
//在counters 与 counter里，也使用这个destruct 一下，代码看起来会很简洁
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
