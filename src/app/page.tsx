/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import ContactSection from "@/components/section/contact-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

function DividerPill({ label }: { label: string }) {
  return (
    <div className="flex items-center w-full">
      <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
      <div className="border bg-primary z-10 rounded-xl px-4 py-1">
        <span className="text-background text-sm font-medium">{label}</span>
      </div>
      <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero" className="scroll-mt-24">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Oi, eu sou o ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" />
                  {DATA.location}
                </p>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.fullName} src={DATA.avatarUrl} className="object-cover" />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <SectionTitle>Sobre</SectionTitle>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
              {DATA.summary.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </BlurFade>
          <div className="grid gap-3 sm:grid-cols-3 pt-2">
            {DATA.focus.map((f, i) => (
              <BlurFade key={f.title} delay={BLUR_FADE_DELAY * 5 + i * 0.05}>
                <div className="group h-full rounded-xl border bg-card/40 p-4 transition-colors hover:border-foreground/25 hover:bg-card">
                  <h3 className="text-sm font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <SectionTitle>Experiência</SectionTitle>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <section id="registros">
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col gap-y-4 items-center">
              <DividerPill label="Registros" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
                Do rack ao certificado
              </h2>
              <p className="text-muted-foreground text-balance text-center">
                Fotos reais do trabalho e da formação.
              </p>
            </div>
          </BlurFade>
          <div className="grid gap-4 sm:grid-cols-2">
            {DATA.gallery.map((item, i) => (
              <BlurFade
                key={item.src}
                delay={BLUR_FADE_DELAY * 9 + i * 0.06}
                inView
                className={cn(i === 0 && "sm:col-span-2")}
              >
                <figure className="group overflow-hidden rounded-xl border bg-card">
                  <div
                    className={cn(
                      "relative overflow-hidden bg-black",
                      i === 0 ? "aspect-video" : "aspect-[4/3]"
                    )}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        "absolute inset-0 h-full w-full grayscale transition duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]",
                        item.fit === "contain" ? "object-contain p-3" : "object-cover"
                      )}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <figcaption className="p-4">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{item.caption}</p>
                  </figcaption>
                </figure>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="scroll-mt-24">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 10} inView>
            <SectionTitle>Formação</SectionTitle>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 11 + index * 0.05}
                inView
              >
                <a
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <div className="size-8 md:size-10 border rounded-full ring-2 ring-border bg-card flex-none grid place-items-center font-mono text-xs text-muted-foreground">
                      {education.school.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                    {education.period}
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 12} inView>
            <SectionTitle>Ferramentas</SectionTitle>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 13 + id * 0.03} inView>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2 transition-colors hover:border-foreground/30">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 pt-4">
        <BlurFade delay={BLUR_FADE_DELAY * 14} inView>
          <ContactSection />
        </BlurFade>
      </section>

      <footer className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {DATA.fullName}
      </footer>
    </main>
  );
}
