import Link from "next/link";
import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-[calc(100vh-12rem)] flex flex-col">
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="flex flex-col items-center text-center max-w-md relative">
                    <h1 className="text-[200px] font-semibold font-mono bg-linear-to-b from-primary/30 to-secondary/10 text-transparent bg-clip-text absolute -top-40 left-1/2 -translate-x-1/2 mask-[linear-gradient(to_bottom,black,black_20%,transparent_80%)] tracking-tighter uppercase">
                        404
                    </h1>
                    <h2 className="text-4xl tracking-tight font-semibold text-foreground mb-2">
                        Página não encontrada
                    </h2>
                    <p className="text-muted-foreground mb-8 text-balance tracking-tight font-medium">
                        O endereço não existe ou mudou de lugar.
                    </p>
                    <Link href="/">
                        <Button variant="outline" className="gap-2 cursor-pointer">
                            <Home className="h-4 w-4" />
                            Voltar ao início
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
