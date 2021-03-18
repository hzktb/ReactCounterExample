import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //我们这部分做的是如何把多个component组合起来，composing components

  //这里我们是遍历了5次counters，然后下面render了5次的counter
  //   state = {
  //     counters: [
  //       //我们这里还引入了一个props的概念
  //       //这个props是一个概念，props本身是一个对象object，它里面存着的是一个component的所有attributes，这些attributes以属性property的形象展现。比如说 我们这里的 component是Counter，那Counter里的attribute就是我们的key跟value（这两个attribute在counters.jsx的渲染render里面可以看到）但是由于key是一个特殊的attribute，所以我们props里只能看到value
  //       { id: 1, value: 2 },
  //       { id: 2, value: 5 },
  //       { id: 3, value: 0 },
  //       { id: 4, value: 6 },
  //       { id: 5, value: 0 },
  //     ],
  //   };
  //   handleReset = () => {
  //     const counters = this.state.counters.map((c) => {
  //       c.value = 0;
  //       return c;
  //     });
  //     this.setState({ counters });
  //   };
  //   handleIncrement = (counter) => {
  //     //这里的counter形参获取的是我们在counter component里传递的this.props.counter这个实参
  //     // console.log(counter);
  //     //这里，我们不要去直接改变state里的counters的值，而是要把counters拷贝到一个常量const上去，然后改这个常量，之后再把常量setState上传给state来做更新
  //     const counters = [...this.state.counters]; //深拷贝了state的counters的第一层并且以数组形式赋值给了一个新counter常量
  //     //注意！！！ spread operator ... 只能深拷贝第一层的数据，当有nested data存在的时候，深层的数据无法被深拷贝，只会被浅拷贝。这里我们的数据就是复杂数据，一层数组下面还有对象存在，并且这个对象里有多个属性
  //     const index = counters.indexOf(counter); //用indexOf方法，来分辨参数对应着新counters数组里的哪个counter，并且返回那个对应counter在新counters数组里的index（位置）
  //     counters[index] = { ...counter }; // 将新的counters数组里的第index个拿来让counter形参赋值（深拷贝了一下这个形参，然后才赋的值），这个形参是从counter component获取来的，所以这个counter形参是可以辨别出是那个counter component调用的这个handle方法。
  //     counters[index].value++; //这一步才是给value increment加一的步骤，前面两步都是为了深拷贝然后赋值的操作
  //     this.setState({ counters });

  //     //这个increment的做法思路分析：
  //     // 1.按raising and handling event那样先声明好方法
  //     // 2.删除掉单一counter component 里的state 数据，因为我们要使用主component的state数据来改变单一component的数据
  //     // 3.在handle方法里声明一个新counters，这个counters接收深拷贝主component的state的counters的第一层（就是一堆对象，个人猜测就是一堆大括号，没有实际意义，因为大括号里面的内容的地址与原本的counters的对象的地址相同，所以深层数据是浅拷贝了）
  //     // 4.取出新counters数组中被点击的那个counter（counter[某数值]），让他等于扩展后的形参counter。此时这个被点击的counter[某数值]里存放的就是深拷贝下来的state的counters的其中一个counter里的两个属性了（id与value）
  //     // 5.给counter[某数值]做+1操作
  //     // 6.更新主component的state
  //     // 7.index的获取是通过判断箭头函数里的形参对应着state.counters里的第几个，然后再返回给index 常量
  //   };
  //   handleDelete = (counterId) => {
  //     // console.log("event handler called", counterId);
  //     // 给我们的handleDelete 添加执行程序
  //     // 因为是删除state里counters的其中一个对象，我们可以通过id的方式来辨别是那个id的删除按钮被点击了
  //     // 接下来就是如何判断删除的是counters里的哪一个couter了。我们的思路是使用filter（），给filter里面传递我们想要删除掉的那个 counter 的 id 来过滤出我们想删掉的counter。
  //     // 由于filter返回的是一个挑选完后的数组，所以我们需要声明一个const来接这个数组
  //     const counters = this.state.counters.filter((c) => c.id != counterId); //判断条件为：只要是c这个形参里的id不等于我们的形参counterId（这个counterId存的是我们在Counter那边获取的this.props.counters.id）就可以被存到新的counter array里。换种说法就是 只要符合了这个不等于的条件的，才能通过。
  //     //现在我们的新counters有了，下一步就是更新我们的state里的counters了
  //     this.setState({ counters: counters }); //前面的是我们的原本的counters，后面的是我们的新的counters，如果我们的前后两个都是一样的名字，可以直接用 this.setState（「counters」） 也是可以的
  //     //以上的这个删除某个counter可以总结为这几个步骤
  //     //1. 先声明raise and handling event，也就是我们的主component counters 部分的 handleDelete 与在 主component下counter元素里的onDelete的attribute 和 在单component counter 那边的onClick里的 props.onDelete
  //     //2. 在handleDelete里添加执行事件，也就是我们的判断删除条件，分为一下两步
  //     //a. 声明一个const来获取 filter 过滤后的数组结果，filter的过滤条件为当前遍历的counter的id不等于我们点击的那个counter的id，符合这个条件的就都能通过。
  //     //b. 使用setState来更新我们的state. 注意，如果旧属性跟新属性名字相同，可以掠过 冒号：直接写名字就好了，但是要记住大括号的使用

  render() {
    // destructure arguments 部分
    // 先来object destruct一下我们的props
    const { onDelete, onIncrement, onReset, counters } = this.props;
    //然后下面本来需要写this.props的地方都不需要再写了，直接使用上面我们拆解过的attribute就好了
    //counter.jsx也可以写，不过我懒了，而且tutorial也没写，所以我就不写了
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          重置
        </button>
        {counters.map((
          counter //此处的每遍历一次的counters 形参为 counter
        ) => (
          <Counter
            key={counter.id} //此处获取的是当前遍历一次的counter的id，所以每个遍历的counter 的id 都是不一样的
            // value={counter.value}
            // id={counter.id}
            counter={counter} //这个counter里面就包含了id与value了
            //这里我们可以简化一下我们的代码，因为我们未来如果往state的counters里又添加其他的属性，那我们还要来这里添加新的attribute。还不如直接在这里设置一个叫做counter的attribute直接接收map遍历的形参counter里的所有属性，这样就不需要重新添加新的attribute了，以后想使用属性的话就是在counter.jsx那边写成 this.props.counter.xxx就可以了
            onDelete={onDelete} //详细的rasing and handling event做法在counter里面有记录
            onIncrement={onIncrement}
            onReset={onReset}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
