import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, basePath, gatewayRepoUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${basePath}/ostiary-logo.png`} alt={appName} className="h-7 w-auto dark:hidden" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${basePath}/ostiary-logo-on-dark.png`} alt={appName} className="hidden h-7 w-auto dark:block" />
        </>
      ),
    },
    githubUrl: gatewayRepoUrl,
  };
}
