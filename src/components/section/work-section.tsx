"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function Monogram({ name }: { name: string }) {
  return (
    <div className="size-8 md:size-10 border rounded-full ring-2 ring-border bg-card flex-none grid place-items-center font-mono text-xs text-muted-foreground">
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

export default function WorkSection() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={DATA.work[0].company}
      className="w-full grid gap-6"
    >
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <Monogram name={work.company} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs tabular-nums text-muted-foreground text-right flex-none">
                {work.period === "Atual" && (
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                  </span>
                )}
                <span>{work.period}</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-11 md:ml-13 text-sm text-muted-foreground space-y-3">
            <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
              {work.subtitle}
            </p>
            <p className="text-foreground/85">{work.description}</p>
            <ul className="space-y-1.5 list-disc pl-4 marker:text-muted-foreground/50">
              {work.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border px-2 py-0.5 text-[11px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
