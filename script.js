const logger = () => console.log('hi');

const looper = () => {
  let message = 'I love JS!';
  for (let i = 0; i < 10; i++) {
    console.log(message);
  }
};

const greet = (name) =>{
  let greeting = 'Hello, ' ${name}'!';
  console.log(greeting);
};

const yourName = 'Doug Taylor';

logger('hi');
looper('I love JS!');
greet('Doug');
