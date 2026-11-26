import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contato</span>
      </div>
      <div className="absolute inset-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-5 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Vamos conversar
        </h2>
        <p className="mx-auto max-w-md text-muted-foreground text-balance">
          Aberto a vagas e projetos em redes, NOC, suporte técnico,
          desenvolvimento e dados. O caminho mais rápido é o LinkedIn.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            LinkedIn
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            GitHub
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
