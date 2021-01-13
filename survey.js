const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];
rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  answers.push(name);
  rl.question("What's an activity you like doing? ", (activity) => {
    answers.push(activity);
    rl.question('What do you listen to while doing that? ', (music) => {
      answers.push(music);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        answers.push(meal);
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          answers.push(food);
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            answers.push(sport);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              answers.push(superpower);
              console.log(`${answers[0]} likes ${answers[1]} while listening to ${answers[2]}, devouring ${answers[3]} for ${answers[4]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]} `);
              rl.close();
            });
          });
        });
      });
    });
  });
});

