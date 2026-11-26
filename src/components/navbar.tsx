import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

const iconClass =
  "rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors";

function DockLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          aria-label={label}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          <DockIcon className={iconClass}>{children}</DockIcon>
        </a>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={8}
        className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm"
      >
        <p>{label}</p>
        <TooltipArrow className="fill-primary" />
      </TooltipContent>
    </Tooltip>
  );
}

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/80 backdrop-blur-3xl shadow-[0_0_24px_2px] shadow-white/5">
        {DATA.navbar.map((item) => (
          <DockLink key={item.href} href={item.href} label={item.label}>
            <item.icon className="size-full" />
          </DockLink>
        ))}
        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />
        {DATA.contact.social.map((social) => (
          <DockLink key={social.name} href={social.url} label={social.name} external>
            <social.icon className="size-full" />
          </DockLink>
        ))}
      </Dock>
    </div>
  );
}
