import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  Check,
  CloudRain,
  Compass,
  Footprints,
  Layers,
  Lightbulb,
  Lock,
  Palette,
  ShieldCheck,
  Smartphone,
  MonitorOff,
  Sparkles,
  Sun,
  Users,
  Zap,
} from "lucide-react";

import heroKit from "@/assets/hero-kit-mockup.png";
import kidsPlaying from "@/assets/kids-playing.jpg";
import familyDrawing from "@/assets/family-drawing.jpg";
import missionCards from "@/assets/mission-cards.png";
import kitSpread from "@/assets/kit-spread.png";
import kidEnergy from "@/assets/kid-energy.jpg";
import { CTA, SectionEyebrow } from "@/components/kit/CTA";
import { Faq } from "@/components/kit/Faq";

const TITLE = "KIT ANTI-TÉDIO | Dê uma missão, não um celular";
const DESC =
  "Brincadeiras, desafios e missões prontas para transformar o “tô entediado!” em diversão longe das telas. Kit digital para imprimir em casa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const badges = [
  "Para imprimir em casa",
  "Diversas opções de brincadeiras",
  "Fácil de usar",
  "Para diferentes momentos do dia",
];

const categories = [
  {
    icon: Palette,
    title: "CRIATIVIDADE",
    text: "Desenhos, criação, pintura e desafios artísticos.",
    tone: "bg-accent/10 text-accent",
  },
  {
    icon: Brain,
    title: "DESAFIOS MENTAIS",
    text: "Charadas, lógica, memória, observação e raciocínio.",
    tone: "bg-primary/10 text-primary",
  },
  {
    icon: Compass,
    title: "MISSÕES",
    text: "Desafios que transformam a casa em um verdadeiro campo de aventura.",
    tone: "bg-sun/25 text-primary-deep",
  },
  {
    icon: Footprints,
    title: "MOVIMENTO",
    text: "Brincadeiras para gastar energia e sair do sofá.",
    tone: "bg-grape/10 text-grape",
  },
  {
    icon: Users,
    title: "EM FAMÍLIA",
    text: "Atividades para pais e filhos brincarem juntos.",
    tone: "bg-primary/10 text-primary",
  },
  {
    icon: MonitorOff,
    title: "SEM TELA",
    text: "Ideias para substituir alguns momentos de celular, tablet e TV.",
    tone: "bg-accent/10 text-accent",
  },
];

const moments = [
  { icon: CloudRain, title: "DIA DE CHUVA", text: "“Não dá para sair? Temos uma missão.”" },
  { icon: Smartphone, title: "PEDIU O CELULAR", text: "“Antes da tela, escolha um desafio.”" },
  { icon: Compass, title: "VIAGEM", text: "“Transforme o caminho em uma aventura.”" },
  { icon: Sun, title: "FIM DE SEMANA", text: "“Acabaram as ideias? Abra o Kit.”" },
  { icon: Users, title: "TEMPO EM FAMÍLIA", text: "“Uma atividade para fazer juntos.”" },
  { icon: Zap, title: "MUITA ENERGIA", text: "“Missões para movimentar a criançada.”" },
];

const skills = [
  "Criatividade",
  "Imaginação",
  "Atenção",
  "Raciocínio",
  "Autonomia",
  "Coordenação",
  "Curiosidade",
  "Interação familiar",
];

const items = [
  "KIT ANTI-TÉDIO",
  "MISSÕES INFANTIS",
  "DESAFIOS CRIATIVOS",
  "ATIVIDADES SEM TELA",
  "BRINCADEIRAS EM FAMÍLIA",
  "DESAFIOS DE OBSERVAÇÃO",
  "ATIVIDADES ARTÍSTICAS",
  "CARTELAS DE MISSÕES",
  "SISTEMA DE RECOMPENSAS",
  "MATERIAIS PARA IMPRIMIR",
];

function Index() {
  return (
    <main className="overflow-x-hidden pb-24 lg:pb-0">
      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-primary-deep text-primary-foreground">
        <div className="dotgrid absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pt-8 pb-14 sm:px-8 md:pt-12 md:pb-20">
          <div className="mx-auto mb-8 flex max-w-3xl items-center justify-center gap-2 rounded-full bg-sun px-4 py-2.5 text-center sm:mb-10">
            <p className="eyebrow text-sun-foreground">
              Para pais que já não aguentam ouvir: “tô entediado!”
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
            <div>
              <h1 className="text-[2.1rem] leading-[1.02] sm:text-5xl md:text-6xl">
                SEU FILHO ESTÁ ENTEDIADO?
                <span className="mt-3 block text-sun">DÊ UMA MISSÃO. NÃO UM CELULAR.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                O <strong className="font-extrabold text-primary-foreground">KIT ANTI-TÉDIO</strong>{" "}
                reúne brincadeiras, desafios e atividades prontas para transformar o tempo livre das
                crianças em momentos de diversão, criatividade e descoberta — longe das telas.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3">
                <CTA />
                <p className="eyebrow text-primary-foreground/70">
                  Acesso digital • Receba após a compra
                </p>
              </div>

              <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                {badges.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 rounded-xl bg-primary-foreground/8 px-4 py-3 text-sm font-semibold ring-1 ring-primary-foreground/10"
                  >
                    <Check className="h-4 w-4 shrink-0 text-sun" aria-hidden />
                    <span className="min-w-0">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-6 rounded-[3rem] bg-sun/15 blur-2xl"
                aria-hidden
              />
              <img
                src={heroKit}
                alt="Materiais do Kit Anti-Tédio saindo de uma pasta digital: livretos, cartelas de missões, calendário e adesivos"
                width={1280}
                height={1280}
                className="relative mx-auto w-full max-w-lg drop-shadow-2xl"
              />
              <div className="relative mx-auto -mt-4 w-fit rounded-full bg-accent px-5 py-2.5 text-center text-xs font-extrabold uppercase tracking-widest text-accent-foreground shadow-lg">
                +10 materiais no mesmo kit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- DOR ---------------- */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionEyebrow>A rotina real de quem tem filhos</SectionEyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
              QUANTAS VEZES VOCÊ JÁ OUVIU ISSO HOJE?
            </h2>

            <div className="mt-7 rounded-3xl bg-sun px-6 py-7 shadow-soft">
              <p className="font-display text-2xl font-extrabold text-sun-foreground sm:text-3xl">
                “MANHÊÊÊ, TÔ ENTEDIADO...”
              </p>
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "“Não sei o que fazer...”",
                "“Posso mexer no celular?”",
                "“Não tem nada para fazer!”",
                "“Posso assistir TV?”",
              ].map((q) => (
                <li
                  key={q}
                  className="card-soft px-5 py-4 text-sm font-semibold text-primary-deep sm:text-base"
                >
                  {q}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>Você não precisa passar o dia inventando brincadeiras.</p>
              <p>E também não precisa entregar o celular toda vez que o tédio aparece.</p>
              <p className="font-semibold text-foreground">
                O problema não é falta de vontade dos pais. É falta de ideias prontas.
              </p>
              <p>
                E foi exatamente por isso que criamos o{" "}
                <strong className="text-primary">KIT ANTI-TÉDIO</strong>.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={kidsPlaying}
              alt="Duas crianças brincando de caça ao tesouro no tapete da sala, sem telas"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="card-soft absolute -bottom-6 left-4 max-w-[16rem] p-4 sm:left-8">
              <p className="eyebrow text-accent">Sem tela</p>
              <p className="mt-1 font-display text-base font-extrabold text-primary-deep">
                Uma missão vale mais que 40 minutos de vídeo curto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SOLUÇÃO ---------------- */}
      <section className="bg-secondary/70 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow>A solução</SectionEyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
              E SE VOCÊ TIVESSE UMA NOVA BRINCADEIRA PRONTA PARA CADA MOMENTO DE TÉDIO?
            </h2>
            <p className="mt-6 font-display text-xl font-extrabold text-accent sm:text-2xl">
              Abra. Escolha uma missão. Imprima. Brinque.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <ol className="grid gap-4">
              {[
                { n: "01", t: "ESCOLHA", d: "A criança escolhe uma missão." },
                { n: "02", t: "PREPARE", d: "Separe os materiais indicados." },
                { n: "03", t: "BRINQUE", d: "Comece a aventura." },
              ].map((s) => (
                <li
                  key={s.n}
                  className="card-soft card-soft-hover grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 p-6"
                >
                  <span className="font-display text-3xl font-extrabold text-sun sm:text-4xl">
                    {s.n}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-lg font-extrabold text-primary-deep sm:text-xl">
                      {s.t}
                    </p>
                    <p className="text-sm text-muted-foreground sm:text-base">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <img
              src={missionCards}
              alt="Cartelas de missões do Kit Anti-Tédio em leque"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full drop-shadow-xl"
            />
          </div>

          <div className="mt-12 flex justify-center">
            <CTA size="md">QUERO O KIT ANTI-TÉDIO</CTA>
          </div>
        </div>
      </section>

      {/* ---------------- O QUE EXISTE DENTRO ---------------- */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="max-w-3xl">
          <SectionEyebrow>O que existe dentro</SectionEyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
            NÃO É SÓ UM PDF CHEIO DE ATIVIDADES.
          </h2>
          <p className="mt-4 font-display text-lg font-extrabold text-primary sm:text-2xl">
            É UM KIT DE IDEIAS PARA AQUELES MOMENTOS EM QUE VOCÊ NÃO SABE MAIS O QUE FAZER.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article key={c.title} className="card-soft card-soft-hover p-7">
              <div className={`grid h-14 w-14 place-items-center rounded-2xl ${c.tone}`}>
                <c.icon className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mt-5 text-xl">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {c.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- MOMENTOS DE USO ---------------- */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-primary-foreground/12 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sun" aria-hidden /> Momentos de uso
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
              PARA AQUELA HORA EXATA EM QUE O TÉDIO APARECE.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moments.map((m) => (
              <article
                key={m.title}
                className="rounded-3xl bg-primary-foreground/8 p-7 ring-1 ring-primary-foreground/12 transition-transform duration-200 hover:-translate-y-1 hover:bg-primary-foreground/12"
              >
                <m.icon className="h-7 w-7 text-sun" aria-hidden />
                <h3 className="mt-5 text-lg sm:text-xl">{m.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80 sm:text-base">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BENEFÍCIOS ---------------- */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={familyDrawing}
            alt="Mãe e filha desenhando juntas na mesa da cozinha"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-lift"
          />

          <div>
            <SectionEyebrow>Benefícios</SectionEyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">MAIS DO QUE PASSAR O TEMPO.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              As atividades do Kit são pensadas para brincar de verdade — e, no caminho, podem
              estimular habilidades importantes no dia a dia da criança:
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 text-sm font-semibold text-primary-deep shadow-soft sm:text-base"
                >
                  <Sparkles className="h-4 w-4 shrink-0 text-grape" aria-hidden />
                  <span className="min-w-0">{s}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              O Kit é um material lúdico de brincadeiras. Não substitui acompanhamento pedagógico ou
              de saúde e não promete resultados garantidos.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- VISUALIZAÇÃO DO PRODUTO ---------------- */}
      <section className="bg-secondary/70 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Conteúdo completo</SectionEyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">OLHA O QUE VOCÊ VAI RECEBER</h2>
          </div>

          <img
            src={kitSpread}
            alt="Visão geral dos materiais imprimíveis do Kit Anti-Tédio: livretos, calendário, cartelas, adesivos e atividades"
            width={1600}
            height={1104}
            loading="lazy"
            className="mx-auto mt-10 w-full drop-shadow-xl"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <div
                key={item}
                className="card-soft card-soft-hover grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Check className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="eyebrow text-muted-foreground">
                    Item {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="truncate font-display text-base font-extrabold text-primary-deep">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <CTA size="md">QUERO O KIT ANTI-TÉDIO</CTA>
          </div>
        </div>
      </section>

      {/* ---------------- DIFERENCIAL ---------------- */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>O diferencial</SectionEyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
            POR QUE O KIT ANTI-TÉDIO É DIFERENTE?
          </h2>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div className="card-soft flex flex-col justify-between border-dashed p-7 opacity-80">
            <p className="eyebrow text-muted-foreground">Atividade infantil genérica</p>
            <p className="mt-6 font-display text-xl font-extrabold text-muted-foreground sm:text-2xl">
              “Pegue uma folha e desenhe.”
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Dura cinco minutos. Depois, o tédio volta.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-sun font-display text-lg font-extrabold text-sun-foreground shadow-soft">
              VS
            </span>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-primary-deep p-7 text-primary-foreground shadow-lift">
            <div className="dotgrid absolute inset-0 opacity-50" aria-hidden />
            <div className="relative">
              <p className="eyebrow text-sun">Kit Anti-Tédio</p>
              <p className="mt-6 font-display text-xl font-extrabold sm:text-2xl">MISSÃO #17</p>
              <p className="mt-3 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Você é um explorador secreto. Encontre 5 objetos escondidos pela casa. Depois desenhe
                um mapa do lugar onde encontrou cada um.
              </p>
              <p className="mt-6 text-sm font-semibold text-sun">
                Vira aventura. E a criança pede a próxima.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid items-center gap-8 rounded-3xl bg-card p-6 shadow-soft sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
          <img
            src={kidEnergy}
            alt="Menino pulando em um circuito de almofadas na sala"
            width={1104}
            height={1104}
            loading="lazy"
            className="w-full rounded-2xl object-cover"
          />
          <div>
            <h3 className="text-2xl sm:text-3xl">
              O Kit não entrega tarefas. Entrega missões e experiências.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Cada atividade tem um contexto, um objetivo e uma recompensa. É isso que faz a criança
              querer brincar de novo — sem pedir a tela.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- PROVA SOCIAL ---------------- */}
      <section className="bg-secondary/70 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow>Prova social</SectionEyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">QUEM EXPERIMENTA, ENTENDE.</h2>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              Espaços preparados para você inserir depoimentos reais: prints de WhatsApp,
              comentários, fotos, vídeos e avaliações.
            </p>
          </div>
          <div className="mt-10">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* ---------------- OFERTA ---------------- */}
      <section id="oferta" className="scroll-mt-8 bg-primary-deep py-16 text-primary-foreground md:py-24">
        <div className="dotgrid absolute inset-x-0 h-0" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
              VOCÊ PODE CONTINUAR PROCURANDO O QUE FAZER TODA VEZ QUE O TÉDIO APARECER...
              <span className="mt-4 block text-sun">
                OU PODE TER UM KIT DE MISSÕES PRONTO PARA USAR.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <img
              src={heroKit}
              alt="Kit Anti-Tédio completo com todos os materiais digitais"
              width={1280}
              height={1280}
              loading="lazy"
              className="mx-auto w-full max-w-md drop-shadow-2xl"
            />

            <div className="rounded-4xl bg-card p-7 text-foreground shadow-lift sm:p-9">
              <p className="eyebrow text-accent">Oferta</p>
              <h3 className="mt-3 text-2xl sm:text-3xl">KIT ANTI-TÉDIO</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Acesso digital completo, com todos os materiais para imprimir em casa.
              </p>

              <ul className="mt-6 grid gap-2.5">
                {items.slice(0, 6).map((i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold sm:text-base">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <span className="min-w-0">{i}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
                  <Layers className="h-4 w-4 shrink-0 text-grape" aria-hidden />
                  <span>+ demais materiais listados acima</span>
                </li>
              </ul>

              <div className="mt-7 rounded-2xl bg-muted p-5">
                <p className="eyebrow text-muted-foreground">De</p>
                <p className="font-display text-xl font-extrabold text-muted-foreground line-through">
                  R$ 29,90
                </p>
                <p className="eyebrow mt-3 text-accent">Por</p>
                <p className="font-display text-4xl font-extrabold text-primary-deep sm:text-5xl">
                  R$ 12,90
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Aproveite o preço promocional de lançamento.
                </p>
              </div>

              <div className="mt-7">
                <a
                  href="#"
                  className="cta-base w-full px-6 py-5 text-base sm:text-lg"
                  aria-label="Quero meu Kit Anti-Tédio"
                >
                  QUERO MEU KIT ANTI-TÉDIO
                </a>
                <p className="eyebrow mt-4 flex items-center justify-center gap-2 text-muted-foreground">
                  <Lock className="h-3.5 w-3.5" aria-hidden /> Acesso digital • Pagamento seguro
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- GARANTIA ---------------- */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
        <div className="card-soft grid items-center gap-8 p-7 sm:p-10 md:grid-cols-[auto_minmax(0,1fr)]">
          <div className="mx-auto grid h-32 w-32 shrink-0 place-items-center rounded-full bg-sun text-center shadow-soft">
            <div>
              <ShieldCheck className="mx-auto h-8 w-8 text-sun-foreground" aria-hidden />
              <p className="mt-1 font-display text-2xl font-extrabold text-sun-foreground">7</p>
              <p className="eyebrow text-sun-foreground">dias</p>
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl">
              VOCÊ TEM 7 DIAS PARA CONHECER O KIT.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Você pode acessar e conhecer o material com tranquilidade. Se entender que o KIT
              ANTI-TÉDIO não é para você, basta solicitar o reembolso dentro do prazo informado na
              compra.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-secondary/70 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">DÚVIDAS ANTES DE COMPRAR</h2>
          </div>
          <div className="mt-10">
            <Faq />
          </div>
        </div>
      </section>

      {/* ---------------- CTA FINAL ---------------- */}
      <section className="relative overflow-hidden bg-accent py-20 text-accent-foreground md:py-28">
        <div className="dotgrid absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Lightbulb className="mx-auto h-10 w-10" aria-hidden />
          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl">
            NA PRÓXIMA VEZ QUE VOCÊ OUVIR “TÔ ENTEDIADO...”
          </h2>
          <p className="mt-5 font-display text-4xl font-extrabold sm:text-5xl md:text-6xl">
            VOCÊ JÁ VAI SABER O QUE FAZER.
          </p>
          <p className="mt-6 text-base sm:text-lg">
            Abra o Kit. Escolha uma missão. E deixe a brincadeira começar.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            <a
              href="#oferta"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary-deep px-8 py-5 font-display text-base font-extrabold text-primary-foreground shadow-lift transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto sm:text-lg"
            >
              QUERO O KIT ANTI-TÉDIO
            </a>
            <p className="eyebrow">Seu próximo momento sem tela começa aqui.</p>
          </div>
        </div>
      </section>

      {/* ---------------- RODAPÉ ---------------- */}
      <footer className="bg-primary-deep py-12 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sun">
                <Compass className="h-6 w-6 text-sun-foreground" aria-hidden />
              </span>
              <p className="font-display text-xl font-extrabold">KIT ANTI-TÉDIO</p>
            </div>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
              Produto digital. Dê uma missão, não um celular.
            </p>
          </div>

          <nav className="grid gap-2 text-sm font-semibold md:text-right">
            {["Termos de Uso", "Política de Privacidade", "Contato", "Garantia"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-primary-foreground/80 transition-colors hover:text-sun"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </footer>

      {/* ---------------- CTA FIXO MOBILE ---------------- */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary-foreground/10 bg-primary-deep/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-extrabold text-primary-foreground">
              KIT ANTI-TÉDIO
            </p>
            <p className="truncate text-[0.7rem] text-primary-foreground/70">
              Acesso digital • Pagamento seguro
            </p>
          </div>
          <a
            href="#oferta"
            className="cta-base shrink-0 px-5 py-3.5 text-sm"
            aria-label="Quero o Kit Anti-Tédio"
          >
            QUERO O KIT
          </a>
        </div>
      </div>
    </main>
  );
}
