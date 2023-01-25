function createIncrement() {
    let count = 0;
    function increment() {
      count++;
    }
    let message = `Count is ${count}`;
    function log() {
      console.log(message);
    }
    return [increment, log];
  }
  const [increment, log] = createIncrement();
  increment();
  increment();
  increment();
  log(); // What is logged? => Count is 0

//why?

/* message variable was initialized when count was 0 so, message is referring to the old instance of count even if the count is incremented hence we are getting "count is 0".
But if message variable is declared inside the log function then the output would be "count is 3".*/