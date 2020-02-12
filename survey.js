const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your nickname? ', (nickname) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite? ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (favFood) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? ', (superpower) => {
            console.log(`You can call me ${nickname}. I like ${activity} and I like to listen to ${music} while at it. My favorite meal is ${meal}, I'm a sucker for ${favFood}. On the weekends I like to play ${sport}. My secret superpower is ${superpower}!\n`);
            console.log(`Thank you for using Fun Profile Generator!`)
            rl.close();
            })
          })
        })
      })
    })
  })
});