const spinner = "|/-\\|/-\\|";
let delay = 100;
for (let spin of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}    `);
  }, delay);
  delay +=200;
};
setTimeout(() => { console.log('');}, delay);