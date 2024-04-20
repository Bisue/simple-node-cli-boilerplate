import cli, { type CLIOptions } from './cli';

const options = cli.opts<CLIOptions>();

console.log(options);
console.log(cli.args);
