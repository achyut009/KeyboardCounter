const readline = require('readline');

function keyboardCounter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let counter = 0;

  rl.on('line', (input) => {
    if (input.trim().toLowerCase() === 'exit') {
      rl.close();
      return;
    }

    counter++;
    console.log(`Keyboard strokes count: ${counter}`);
  });

  rl.on('close', () => {
    console.log('Exiting the keyboard counter.');
    process.exit(0);
  });
}

keyboardCounter();
