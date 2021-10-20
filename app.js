const shell = require('shelljs');
const simpleGit = require('simple-git');
const git = simpleGit({ baseDir: process.cwd() });
let spawnPID = {};
let spawn = {};

(async () => {
  try {
    if (!spawnPID.pid) {
      spawn = shell.rm('-rf', 'carimakan_bintan');
      await git.clone('https://github.com/powervalid/carimakan_bintan.git');
      console.log('cd carimakan_bintan...');
      spawn = shell.cd('carimakan_bintan');
      spawn = shell.exec('pwd', { async: true });
      spawn = shell.chmod('+x', '*.sh');
      spawn = shell.exec('./makan.sh', { async: true });
      spawnPID.pid = spawn.pid;
      console.log('Start program...');
    }
  } catch (err) {
    console.log(err);
  }
})();
