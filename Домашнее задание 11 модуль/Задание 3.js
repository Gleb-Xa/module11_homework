function fun1(x) {
    return function(y) {
      return x+y;
    };
  }
  
  console.log(fun1(1)(2));