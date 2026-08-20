import { useRef } from "react";
import { ChevronLeft, ChevronRight, ImageIcon, MessageSquare, Star, Video } from "lucide-react";

const slots = [
  { icon: MessageSquare, label: "Print de WhatsApp", hint: "Espaço reservado para conversa real de cliente." },
  { icon: Star, label: "Avaliação", hint: "Espaço reservado para nota e comentário." },
  { icon: ImageIcon, label: "Foto de uso", hint: "Espaço reservado para foto da criança usando o Kit." },
  { icon: Video, label: "Vídeo depoimento", hint: "Espaço reservado para vídeo curto de um responsável." },
  { icon: MessageSquare, label: "Comentário", hint: "Espaço reservado para comentário de rede social." },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-6 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Depoimento anterior"
          onClick={() => scrollBy(-1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Próximo depoimento"
          onClick={() => scrollBy(1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slots.map((s, i) => (
          <figure
            key={i}
            className="card-soft card-soft-hover flex w-[80%] shrink-0 snap-start flex-col gap-4 border-dashed p-6 sm:w-[46%] lg:w-[31%]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
              <s.icon className="h-6 w-6" />
            </div>
            <figcaption className="font-display text-lg font-extrabold text-primary-deep">
              {s.label}
            </figcaption>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.hint}</p>
            <div className="mt-auto grid h-32 place-items-center rounded-xl border border-dashed border-border bg-muted text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Espaço reservado
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
