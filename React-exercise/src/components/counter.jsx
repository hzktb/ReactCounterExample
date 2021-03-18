import React, { Component } from "react";
class Counter extends Component {
  // 这是给绑定一个在类模版里的方法的this指向类模版本身时候用的 constructor的例子
  //   constructor() {
  //     super();
  //     this.handleAddOrSubtractIncrement = this.handleAddOrSubtractIncrement.bind(
  //       this
  //     );
  //   }

  //有一个个人猜测的规范就是 我们下面类模版里的方法都叫做 event handlers，所以命名的时候前面都要加handle 除了render
  //写class名字的时候注意的一点是开头字母大写，并且后面有camel case
  state = {
    //这里我们用props来initialize state
    //把这个注释起来是因为我们要用主component来做single source of truth，把单一component变成controlled component了
    // value: this.props.counter.value, //这个props是一个概念，props本身是一个对象object，它里面存着的是一个component的所有attributes，这些attributes以属性property的形象展现。比如说 我们这里的 component是Counter，那Counter里的attribute就是我们的key跟value（这两个attribute在counters.jsx的渲染render里面可以看到）但是由于key是一个特殊的attribute，所以我们props里只能看到value
    imageUrl: "https://picsum.photos/500",

    //如何用react来render一个list
    tags: ["1", "2", "3"], //要注意我们这边render的是一个数组，我们使用map（）来遍历数组 具体写法在下面 （用map（）遍历一个数组来render一个list）
  };

  style = {
    fontSize: 50, //写这个尺寸的时候注意的是我们不需要写px，react会自己给我们加上的
    fontWeight: "normal",
    color: "black",
  };

  getSomeSpaceBetween = {
    height: 50,
  };
  render() {
    // console.log(this.props);
    // 这里我们给classes定义了变量，这样要是其他的元素想用这个的时候就可以直接使用了
    // let classes = "badge m-2 badge-";
    // classes += this.state.count === 0 ? "warning" : "primary";
    // let classes = this.changeTheButtonColorToYellowOrBlue(); //这个方法是用refactor来建立的，把上面的这两行classes的代码包装成了一个方法method在下面。这样看上去render里面的代码就比较美观
    // 另一种方法是直接在className里面调用这个方法也是可以的，记得加this 跟 （）括号调用
    return (
      <div>
        <div>跟着tutorial做的小笔记</div>
        <h4>Counter #{this.props.counter.id}</h4>
        <img src={this.state.imageUrl} alt=""></img>
        <div>
          下面这个span
          element呢，里面使用了bootstrap的一些class，需要注意的一点是声明attribute（也就是我们平常html里面的行内式（写在html
          tag内部的））的时候用的是className，这是因为class这个名字比较敏感，被我们的JS的类模版使用了，所以需要做区分
        </div>
        <p></p>
        <p>
          这边我们这里的className里面用的这个classes是我们在return外面定义的一个string
          let变量，然后我们用了判断来改变这个span的值，如果state里的count等于0的话就变成黄色warning，剩下的就是蓝色primary
        </p>
        <span
          style={this.style}
          className={this.handleChangeTheButtonColorToYellowOrBlue()}
        >
          {this.formatCount()}
        </span>
        <p>
          当我们在写这个style的时候其实有两种写法，一种就是在class内声明一个style的对象，然后在对象里面写想要的属性与属性值，然后在tag里面写上style
          = this.style
          (this.style要用大括号包起来)。另一种方法就是下面这样，直接写，但是要注意的一点就是，我们这个双大括号，是因为其实我们要是平常直接写
          this.style 这些的时候，其实是把整个对象都拿过来了，所以当然的
          也把包裹对象的大括号也给拿过来了，所以双大括号这点要注意一下。还有一个目前没搞懂的是style要这么做，但是旁边的那个
          this.formatCount 就不需要
        </p>
        <button style={{ fontSize: 70 }}>{this.formatCount()}</button>
        <button>一个按钮</button>

        <p style={this.getSomeSpaceBetween}></p>
        <div>
          <h4>用map（）遍历一个数组来render一个list</h4>
          <p>
            我们这边能看到使用的是箭头函数，让我们的state对象里面的tags属性来调用map（）方法来遍历自己，然后设置一个形参tag来传递遍历的结果，然后返回的是一个li，并且里面存着当次遍历的tag
            <br />
            还有一个注意点就是关于每个li的key，这个key是为了让react自己以后如果需要修改某个东西时让react自己去寻找DOM里面的对应元素要用到的。
            我们设置的这个key必须是一个ul里面独一无二的，其他的ul里面的key用相同的也没关系，但是必须要一个ul里面一个li只能有一个key
          </p>
          <ul>
            {this.state.tags.length === 0 && "你的tags里面的内容为空！"}
            {this.renderTags()}
            {this.state.tags.map((tag) => (
              <li key={tag + 1}>{tag}1</li>
            ))}
          </ul>
          <p>
            当我们想给一个方法传 实参argument
            的时候，有两个做法，一个就是另外写一个方法专门获取实参，然后再在这另一个方法里面调用原本想传参数的方法，并且把参数传进去，写法如下:
            <br />
            比如我们原本想传参数的方法叫 handleAddOrSubtractIncrement,
            另一个方法接收参数，并且调用原本方法的方法叫
            doHandleAddOrSubtractIncrement. <br />
            handleAddOrSubtractIncrement = (argument) =》
            (这个括号存的是想执行的代码，但是大括号没法写，用小括号来代替);
            <br />
            doHandleAddOrSubtractIncrement = () =》
            (handleAddOrSubtractIncrement(「 id: 1 」))
            包裹id的这个括号还是不能用大括号，这里用中文的大括号代替
            <br />
            但是我们会使用一种更方便的方式，就是把在行内调用的函数写成箭头函数，比如下面这样
            <br />
            （） =》 this.handleAddOrSubtractIncrement(「 id: 1 」)
            <br />
            为什么使用箭头函数，而不是直接使用 this.handleAddOrSubtract（「id:
            1」）呢？ <br />
            这是因为我们在onClick里面要写的是一个function
            的reference，比如this.handleAddOrSubtract
            是一个renference（注意，我们reference是没有在末尾添加小括号的，因为有了小括号，这就变成了调用这个函数了(还有一点注意的是onClick本身expect的是一个function
            reference或者function本身，而不是调用函数这步操作。函数本身比如：onClick=
            function（）「」， 而function
            reference就是函数的名字）。还有就是如果在onClick=
            写成了调用函数的话，那onClick存的就是调用函数后返回的结果了。所以我们在这个button的onClick要是想传递参数的时候必须要使用箭头函数来做，这样在箭头函数里面就可以传递参数了
          </p>
          <button onClick={() => this.props.onIncrement(this.props.counter)}>
            我是一个按钮,点我的话会给上面的zero加1
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            删除
          </button>
          <p>
            这边删除按钮里的onClick请参考上面的点击就+1的按钮的概念（function
            reference的概念）
          </p>
          <p>
            我们的目的是要删除点击删除按钮后 删除按钮对应的那个Counter
            component，但是我们的Counter component是通过在Counters
            里面遍历了Counters 的 state来达成的，所以我们的 删除
            method要放在Counters component里才对
            <br />
            这里我们就要引入一种做法叫做 raising and handling events。
            这个做法的思路就是：在主Component里渲染的的单一component里的attribute里（Counter）声明一个rasing
            event（通常命名方式以on开头，比如我们这里是为了删除，所以我们就命名为onDelete）用于发出删除的请求给Counters这个主component（由于props的特性，这个attribute其实是存放在了单一component的props里面的）。第二步是在主Component
            Counters这里
            声明一个执行方法（命名就是平常的执行方法的命名方式，以handle开头，这里我们叫做handleDelete），这个执行方法专门负责执行我们的删除某个component的操作。
            <br />
            如何使用呢？：我们可以利用props的特性，可以用来传递我们的方法。做法就是：
            <br />
            1.在主component
            Counters里面渲染Counter的部分添加一个attribute，attribute的名字可以取我们的在counter这边raising
            event的名字（比如onDelete）。
            <br />
            2. 在我们的单一component
            Counter这里，在我们需要调用的地方（比如我们的删除键，点击以后删除，所以我们就需要在删除键里以行内式的方式添加一个onClick的命令来调用）写下命令，并且调用这个component
            Counter
            的props的其中一个attribute就可以了（这里我们的props.onDelete就是做了一个调用的步骤）
            <br />
            这种方法就是因为我们把主component的方法存放在了单独的component的props里面，这样就实现了传递函数/方法的功能
            <br />
            这种操作是很多做UI 这类的库的通用的一种方式，并不是单属于react.
            <br />
          </p>
        </div>
      </div>
    );
  }

  handleChangeTheButtonColorToYellowOrBlue() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  //   handleAddOrSubtractIncrement() {
  //     console.log(
  //       "I'm being pressed and I also will print my this below, and the this is ",
  //       this
  //     ); //这边的this有一个指向问题我们需要考虑。由于调用这个方法的是我们的一个button，所以这个this此时指向的是button，但是我们的目标其实是要指向我们的 类模版 Counter，所以接下来有两种写法，一种是写 Constructor（），然后在里面用bind把Counter的this绑定给我们现在这个方法

  // 1.用Constructor（）的写法，当然 我们写这个constructor的位置肯定是要在类模版的第一行，但是这边看着轻松
  // 用constructor是因为constructor的指向其实就是 类模版本身，所以constructor的this指向的肯定就是类模版了，用这个super（）是因为我们的类模版Counter是一个子类模版，它还有一个叫Component 的父类模版
  // Constructor （）{
  //      super（）;
  //      this.handleAddOrSubtractIncrement = this.handleAddOrSubtractIncrement.bind(this); 我们写在constructor里的this指向的都是类模版本身
  // }

  // 2.第二种写法就是使用 箭头函数， 这种写法非常简单，主要是因为我们利用了箭头函数的一个特性，就是箭头函数的 this 指向的从来都是 父级函数的 this，（类模版本身也是一个函数，一个构造函数）
  // 这里，我们将箭头函数命名为了我们的这个加减的方法，（箭头函数写法就是要在前面写名字，后面才写两个括号的，因为括号是拿来写参数与运行方法用的）。 还有需要注意的是箭头函数的return这部分，因为其实我们如果只是需要return一个简单的运行完成的代码，就不需要写ret·urn了，比如这个console.log
  // handleAddOrSubtractIncrement = () => {
  //      console.log("I'm being pressed and I also will print my this below, and the this is ",
  //          this)
  //  }
  //   }
  //这里我们采用箭头函数的写法来做改变这个方法的this的问题

  // handleAddOrSubtractIncrement = (product) => {
  //   // return console.log("im being pressed, and my this is pointing to ", this);

  //   // 前面的都是解释一些this的指向以及箭头函数，接下来我们来写我们真正要让这个方法做的事，调用这个方法，就让state里的count加1
  //   // 我们这里不能直接写 this.state.value++; 虽然说系统确实给value加了1，但是react并不会做出反应，我们需要手动让react知道我们要重新渲染一下某个属性
  //   // 所以我们就需要用到 setState()，然后在括号里面，我们需要告诉他是state的那个属性 property改变了，并且做什么改变
  //   this.setState({ value: this.state.value + 1 });

  //   //这个是我们的一个传递参数的小技巧，更多细节在按钮那里
  //   console.log(product);
  // };

  //conditionally render 一个list
  renderTags() {
    if (this.state.tags.length === 0) return <p>请输入一些内容到tags</p>;
    return this.state.tags.map((tag) => <li key={tag}> {tag} </li>);
  }
  //这是一些遍历list然后渲染的例子，跟increment没关系

  formatCount() {
    // const { value } = this.state; //把state里的一个叫value的值取过来专门声明为一个常量const
    // console.log(count);
    const { value } = this.props.counter; //跟上面做法一样，只是因为我们把value这个值这一步做成了一个single source of truth，所以我们要从props的counter里面获取了（因为value 存在了主component的 counters的其中一个counter里面了）
    return value === 0 ? "zero" : value; //做一个判断，如果value 值全等于 0 就做对应的输出
  }
}

export default Counter;
