// dev.js
process.env.GENERATE_SOURCEMAP = 'true';
process.env.NODE_ENV = 'development';
process.env.DISABLE_ESLINT_PLUGIN = 'true';

const { spawn } = require('child_process');
const path = require('path');

const TEMPLATE_PATH = path.resolve(__dirname, "./template");
const reactScripts = require.resolve(
  path.resolve(TEMPLATE_PATH, "./node_modules", 'react-scripts/scripts/start.js')
);

const child = spawn('node', [reactScripts], { stdio: 'inherit', cwd: TEMPLATE_PATH });

child.on('close', (code) => {
  process.exit(code);
});