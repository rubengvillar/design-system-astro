import { whichPM } from 'which-pm';
import { existsSync } from 'node:fs';

export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

export async function detectPackageManager(cwd: string = process.cwd()): Promise<PackageManager> {
  try {
    const pm = await whichPM(cwd);
    if (pm?.name && ['npm', 'pnpm', 'yarn', 'bun'].includes(pm.name)) {
      return pm.name as PackageManager;
    }
  } catch {}

  if (existsSync(`${cwd}/pnpm-lock.yaml`)) return 'pnpm';
  if (existsSync(`${cwd}/yarn.lock`)) return 'yarn';
  if (existsSync(`${cwd}/bun.lockb`)) return 'bun';
  return 'npm';
}

export function getInstallCmd(pm: PackageManager, pkgs: string[], isDev: boolean = false): string {
  const devFlag = isDev ? (pm === 'npm' || pm === 'bun' ? '--save-dev' : '-D') : '';
  const installCmd = pm === 'bun' ? 'add' : 'add';

  switch (pm) {
    case 'npm':
      return `npm install ${devFlag} ${pkgs.join(' ')} --legacy-peer-deps`;
    case 'pnpm':
      return `pnpm ${installCmd} ${devFlag} ${pkgs.join(' ')}`;
    case 'yarn':
      return `yarn add ${devFlag} ${pkgs.join(' ')}`;
    case 'bun':
      return `bun add ${devFlag} ${pkgs.join(' ')}`;
  }
}

export function getExecCmd(pm: PackageManager): string {
  return pm === 'npm' ? 'npx' : pm === 'pnpm' ? 'pnpx' : pm === 'bun' ? 'bunx' : 'npx';
}
