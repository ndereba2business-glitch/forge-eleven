import type { Block } from '@/lib/projects'
import { Figure, Phone } from '@/components/work/Figure'

const pad = (n: number) => String(n).padStart(2, '0')

function Label({ n, children }: { n?: number; children: React.ReactNode }) {
  return (
    <p className="t-meta flex gap-3 text-mute">
      {n !== undefined && <span className="text-ember">{pad(n)}</span>}
      <span>{children}</span>
    </p>
  )
}

export default function CaseStudyBlocks({ blocks }: { blocks: Block[] }) {
  let chapter = 0

  return (
    <div className="flex flex-col gap-[clamp(5rem,10vw,9rem)]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'chapter':
          case 'features':
          case 'list':
            chapter++
        }

        switch (block.type) {
          case 'chapter':
            return (
              <section key={i} className="container-x grid gap-6 md:grid-cols-12">
                <div className="md:col-span-3" data-reveal>
                  <Label n={chapter}>{block.label}</Label>
                </div>
                <div className="md:col-span-8 md:col-start-5">
                  <h2 className="t-h3 max-w-[24ch]" data-reveal>
                    {block.title}
                  </h2>
                  <div className="mt-8 space-y-5 t-body max-w-[62ch] text-mute">
                    {block.body.map((p, j) => (
                      <p key={j} data-reveal style={{ '--delay': `${j * 80}ms` } as React.CSSProperties}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            )

          case 'image':
            return (
              <div key={i} className={block.size === 'full' ? 'container-x' : 'container-x md:px-[calc(var(--gutter)+8.33%)]'}>
                <Figure
                  shot={block.shot}
                  caption={block.caption}
                  sizes={block.size === 'full' ? '(min-width: 1600px) 1600px, 100vw' : '(min-width: 768px) 84vw, 100vw'}
                />
              </div>
            )

          case 'phones':
            return (
              <figure key={i} className="container-x">
                <div className="grain relative overflow-clip bg-ink-2 px-6 py-12 outline outline-1 -outline-offset-1 outline-line md:px-12 md:py-20">
                  <div
                    className={`mx-auto grid items-start gap-5 md:gap-8 ${
                      block.shots.length === 3 ? 'max-w-5xl grid-cols-2 md:grid-cols-3' : 'max-w-3xl grid-cols-2'
                    }`}
                  >
                    {block.shots.map((shot, j) => (
                      <div
                        key={j}
                        className={j === 1 ? 'md:translate-y-12' : j === 2 ? 'hidden md:block' : ''}
                        style={{ '--delay': `${j * 120}ms` } as React.CSSProperties}
                      >
                        <Phone shot={shot} />
                      </div>
                    ))}
                  </div>
                </div>
                {block.caption && <figcaption className="t-meta mt-4 normal-case tracking-normal text-mute">{block.caption}</figcaption>}
              </figure>
            )

          case 'features':
            return (
              <section key={i} className="container-x">
                <div className="grid gap-6 md:grid-cols-12">
                  <div className="md:col-span-3" data-reveal>
                    <Label n={chapter}>{block.label}</Label>
                  </div>
                  <h2 className="t-h3 max-w-[20ch] md:col-span-8 md:col-start-5" data-reveal>
                    {block.title}
                  </h2>
                </div>
                <dl className="mt-12 grid gap-x-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
                  {block.items.map((item, j) => (
                    <div
                      key={j}
                      data-reveal
                      style={{ '--delay': `${(j % 3) * 90}ms` } as React.CSSProperties}
                      className="border-t border-line py-7"
                    >
                      <dt className="text-lg font-medium tracking-[-0.015em]">{item.title}</dt>
                      <dd className="mt-3 text-mute">{item.body}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )

          case 'decision':
            return (
              <div key={i} className="container-x">
                <div className="grid gap-6 border-y border-line py-12 md:grid-cols-12 md:py-16" data-reveal>
                  <p className="t-meta text-ember md:col-span-3">{block.label}</p>
                  <p className="text-[clamp(1.35rem,1rem+1.3vw,2.1rem)] leading-[1.3] tracking-[-0.02em] md:col-span-8 md:col-start-5">
                    {block.text}
                  </p>
                </div>
              </div>
            )

          case 'list':
            return (
              <section key={i} className="container-x grid gap-6 md:grid-cols-12">
                <div className="md:col-span-3" data-reveal>
                  <Label n={chapter}>{block.label}</Label>
                </div>
                <div className="md:col-span-8 md:col-start-5">
                  <h2 className="t-h3 max-w-[22ch]" data-reveal>
                    {block.title}
                  </h2>
                  <ol className="mt-10">
                    {block.items.map((item, j) => (
                      <li key={j} data-reveal className="grid grid-cols-[2.5rem_1fr] gap-2 border-t border-line py-5 text-mute md:grid-cols-[4rem_1fr]">
                        <span className="t-meta pt-1 text-faint">{pad(j + 1)}</span>
                        <span className="max-w-[62ch]">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            )
        }
      })}
    </div>
  )
}
