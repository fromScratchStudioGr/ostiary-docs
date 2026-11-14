import Link from 'next/link';
import { appName, basePath, gatewayRepoUrl } from '@/lib/shared';

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${basePath}/ostiary-logo.png`} alt={appName} className="mb-8 w-full max-w-sm dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${basePath}/ostiary-logo-on-dark.png`} alt={appName} className="mb-8 hidden w-full max-w-sm dark:block" />
      <h1 className="mb-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        You run it, you control it, <span className="text-fd-primary">you own it.</span>
      </h1>
      <p className="mb-2 max-w-xl text-lg">
        A fast, simple and secure gateway between your applications and AI model providers
        such as OpenAI, Anthropic, Google Gemini and DeepSeek.
      </p>
      <p className="mb-8 max-w-xl text-fd-muted-foreground">
        Your applications use keys of their own. Ostiary holds the real provider keys, sends
        each request on, and records what every request costs.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/docs"
          className="rounded-lg bg-fd-primary px-5 py-2.5 font-medium text-fd-primary-foreground"
        >
          Get started
        </Link>
        <a
          href={gatewayRepoUrl}
          className="rounded-lg border px-5 py-2.5 font-medium hover:bg-fd-accent"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
