import { Fragment } from 'react';

type Step = {
  title: string;
  description: string;
};

type Link = {
  label: string;
  note?: string;
};

// A row of boxes joined by labelled arrows. Stacks vertically on small screens.
export function ConceptFlow({ steps, links }: { steps: Step[]; links: Link[] }) {
  return (
    <div className="not-prose my-6 flex flex-col items-stretch gap-2 md:flex-row md:items-center">
      {steps.map((step, i) => (
        <Fragment key={step.title}>
          <div className="flex-1 rounded-xl border bg-fd-card p-4 text-center">
            <p className="font-semibold">{step.title}</p>
            <p className="mt-1 text-sm text-fd-muted-foreground">{step.description}</p>
          </div>
          {i < links.length && (
            <div className="flex flex-col items-center px-1 text-center text-xs text-fd-muted-foreground">
              <span>{links[i].label}</span>
              <span aria-hidden className="text-lg leading-none text-fd-primary">
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </span>
              {links[i].note && <span>{links[i].note}</span>}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
