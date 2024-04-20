import { Command } from 'commander';

export interface CLIOptions {
  option1: boolean;
  option2: string;
}

const cli = new Command();

cli.option('-o1, --option1', 'The option 1.');
cli.option('-o2, --option2 <char>', 'The option 2.');
cli.parse(process.argv);

export default cli;
