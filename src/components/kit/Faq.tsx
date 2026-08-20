import { Plus } from "lucide-react";

const faq = [
  {
    q: "O Kit é físico?",
    a: "Não. O KIT ANTI-TÉDIO é 100% digital. Você recebe os arquivos para acessar no celular, tablet ou computador e imprimir se quiser.",
  },
  {
    q: "Como recebo o material?",
    a: "O acesso é enviado por e-mail logo após a confirmação do pagamento. Basta baixar os arquivos e começar a usar.",
  },
  {
    q: "Preciso ter impressora?",
    a: "Não é obrigatório. Muitas missões podem ser lidas direto da tela pelo responsável e feitas com o que já existe em casa. A impressão apenas facilita o uso pela criança.",
  },
  {
    q: "Para qual idade é indicado?",
    a: "As atividades foram pensadas principalmente para crianças de 3 a 11 anos, com missões mais simples e mais avançadas dentro do mesmo Kit.",
  },
  {
    q: "Posso imprimir quantas vezes quiser?",
    a: "Sim. Você pode reimprimir os materiais para uso pessoal da sua família quantas vezes precisar.",
  },
  {
    q: "É possível usar as atividades sem imprimir?",
    a: "Sim. Boa parte das brincadeiras, desafios e missões pode ser conduzida apenas lendo a instrução e usando objetos da casa.",
  },
  {
    q: "Preciso comprar materiais caros?",
    a: "Não. As atividades usam itens simples: papel, lápis, tesoura sem ponta, potes, almofadas e objetos comuns do dia a dia.",
  },
  {
    q: "Posso usar com mais de uma criança?",
    a: "Sim. Há missões individuais, em dupla e em família, e você pode usar o mesmo Kit com todos os filhos.",
  },
  {
    q: "Quanto tempo dura cada atividade?",
    a: "Depende da missão. Existem desafios rápidos, de poucos minutos, e atividades mais longas que ocupam boa parte de uma tarde.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Você tem 7 dias para conhecer o material. Se entender que não é para você, basta solicitar o reembolso dentro do prazo informado na compra.",
  },
];

export function Faq() {
  return (
    <div className="mx-auto grid max-w-3xl gap-3">
      {faq.map((item) => (
        <details key={item.q} className="card-soft group overflow-hidden p-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-base font-extrabold text-primary-deep sm:text-lg">
              {item.q}
            </span>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-transform duration-300 group-open:rotate-45">
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <p className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:text-base">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
