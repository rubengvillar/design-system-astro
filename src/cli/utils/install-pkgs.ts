import { execSync } from 'child_process';
import type { PackageManager } from './detect-pm';

export function installPackages(
  pm: PackageManager,
  packages: string[],
  cwd: string = process.cwd(),
  isDev: boolean = false
): void {
  if (packages.length === 0) return;

  const devFlag = isDev
    ? pm === 'npm' || pm === 'bun'
      ? '--save-dev'
      : '-D'
    : '';

  const addCmd = pm === 'npm' ? 'install' : 'add';

  const cmd = `${pm} ${addCmd} ${devFlag} ${packages.join(' ')}`;

  execSync(cmd, {
    cwd,
    stdio: 'inherit',
  });
}

export function execCmd(cmd: string, cwd: string = process.cwd()): void {
  execSync(cmd, { cwd, stdio: 'inherit' });
}
