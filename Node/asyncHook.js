import { createHook } from 'async_hooks';
import { writeSync } from 'fs';

const hook = createHook({
  init(asyncId, type) {
    writeSync(1, `Init: ${type} (ID: ${asyncId})\n`);
  },
  destroy(asyncId) {
    writeSync(1, `Destroy: ${asyncId}\n`);
  }
});

hook.enable();

async function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Data fetched');
      resolve();
    }, 2000);
  });
}

fetchData();
