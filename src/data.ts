// Velox Fitness Service - Centralized Institutional Data

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  path: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  includes: string[];
  problems?: string[];
  faqs: FAQItem[];
}

export const COMPANY_DETAILS = {
  name: "Velox Fitness Service",
  slogan: "Seu equipamento parado? A Velox resolve.",
  phone: "(11) 99392-9846",
  phoneFormatted: "11993929846",
  email: "veloxfitness01@gmail.com",
  instagram: "@velox_fitness_service",
  instagramUrl: "https://www.instagram.com/velox_fitness_service",
  address: "Rua Barão de Taquari, 350 - Jardim Ruyce, Diadema/SP",
  cep: "09961-600",
  whatsappUrl: "https://wa.me/5511993929846?text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+solicitar+um+or%C3%A7amento+de+assist%C3%AAncia+t%C3%A9cnica.",
  mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.4751433945956!2d-46.62126868501968!3d-23.702893984611593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44ecf12b694b%3A0xe13349beee96e70!2sRua%20Bar%C3%A3o%20de%20Taquari%2C%20350%20-%20Jardim%20Ruyce%2C%20Diadema%20-%20SP%2C%2009961-600!5e0!3m2!1spt-BR!2sbr!4v1703666000000!5m2!1spt-BR!2sbr"
};

export const COVERAGE_AREAS = {
  abc: ["Diadema", "São Bernardo do Campo", "Santo André", "São Caetano do Sul", "Mauá"],
  saoPaulo: ["Zona Sul", "Zona Oeste", "Zona Leste", "Zona Norte", "Centro"],
  conurbano: ["Osasco", "Alphaville", "Cotia", "Carapicuíba", "Itapevi", "Guarulhos", "Arujá", "Mogi das Cruzes", "Barueri"],
  litoralInterior: ["Santos", "São Vicente", "Guarujá", "Campinas", "Sorocaba", "São José dos Campos", "Regiões Metropolitanas"]
};

export const BRAND_LIST = [
  "Movement", "Life Fitness", "Technogym", "Athletic", "Caloi", "Kikos", "Embreex", 
  "Matrix", "Precor", "Horizon", "Inbramed", "Lion Fitness", "Wellness", "ProForm", 
  "Supertech", "Polimet", "NordicTrack", "Unbranded (Todas as marcas nacionais e importadas)"
];

export const CLIENT_TYPES = [
  {
    title: "Residências",
    description: "Atendimento ágil no conforto do seu lar, garantindo discrição, higiene técnica, agendamento pontual e cuidados completos com sua esteira ou bicicleta."
  },
  {
    title: "Condomínios",
    description: "Planos sob medida e vistorias rápidas par manter o espaço fitness do seu condomínio seguro e 100% operacional para todos os moradores."
  },
  {
    title: "Academias",
    description: "Soluções de alta performance com contratos mensais de assistência técnica para reduzir e mitigar o tempo de inatividade das suas máquinas."
  },
  {
    title: "Studios de Pilates & Crossfit",
    description: "Ajustes mecânicos, lubrificação de alto desempenho e verificação de cabos/polias para preservar a segurança de alunos e instrutores."
  }
];

export const KEY_DIFFERENTIALS = [
  {
    title: "Técnicos Treinados",
    description: "Profissionais qualificados pelas principais escolas técnicas e credenciados pelos maiores fabricantes de fitness."
  },
  {
    title: "Laudo com Garantia",
    description: "Cada atendimento emite um relatório técnico minucioso detalhando os serviços executados e fornecendo garantia formal."
  },
  {
    title: "Peças Originais",
    description: "Substituição exclusiva de peças homologadas, robustas, originais ou de qualidade comprovada para prolongar a vida útil."
  },
  {
    title: "Agilidade & Pontualidade",
    description: "Compreendemos a frustração de uma esteira paralisada. Nosso tempo de resposta é o mais ágil do mercado da Grande SP."
  },
  {
    title: "Todas as Marcas",
    description: "Amplo conhecimento técnico que nos permite prestar socorro a equipamentos de quaisquer marcas, nacionais ou importadas."
  }
];

export const SERVICES_DATA: Record<string, ServiceData> = {
  preventiva: {
    id: "preventiva",
    title: "Manutenção Preventiva de Equipamentos Fitness",
    subtitle: "Evite quebras dispendiosas e garanta a integridade mecânica de suas máquinas esportivas.",
    path: "/manutencao-preventiva.html",
    shortDescription: "Lubrificação técnica, revisões elétricas regulares e ajustes milimétricos que eliminam desgastes prematuros e multiplicam a vida útil do seu equipamento.",
    description: "A manutenção preventiva é o investimento mais inteligente para seu espaço fitness. O uso constante de esteiras e elípticos submete os sistemas elétricos e mecânicos a pressões contínuas e acúmulo de poeiras. Sem inspeção, polias se desaliam, lonas ressecam gerando atrito nocivo sobre o motor, e circuitos sofrem curtos por superaquecimento. Nosso programa preventivo mantém seus aparelhos em perfeito equilíbrio operacional.",
    benefits: [
      "Evita quebras surpresa durante treinos intensos",
      "Reduz custos de conserto emergencial em até 70%",
      "Prolonga consideravelmente a robustez mecânica e vida útil do motor",
      "Maximiza a estabilidade e segurança física de todos os usuários",
      "Confere suavidade mecânica no caminhar e pedalar"
    ],
    includes: [
      "Lubrificação de alto rendimento do deck de corrida com fluidos específicos",
      "Desobstrução do compartimento do motor e placas controladoras",
      "Calibragem e alinhamento milimétrico da lona de rolamento",
      "Inspeção e ajuste da tensão da correia de transmissão",
      "Aperto estrutural geral de parafusos, corrimãos e conexões",
      "Medição técnica dos níveis de corrente elétrica e testes de voltagem"
    ],
    faqs: [
      {
        question: "Com que frequência devo realizar a manutenção preventiva?",
        answer: "Para esteiras residenciais, recomendamos lubrificar de 15 em 15 dias e fazer uma visita preventiva técnica completa a cada 6 meses. Em condomínios, a frequência ideal é trimestral, e em academias comerciais de fluxo pesado, visitas mensais ou bimestrais são essenciais para segurar as operações."
      },
      {
        question: "O suor estraga o aparelho de ginástica?",
        answer: "Sim, os sais e a acidez do suor corporal aceleram a corrosão e oxidação de partes metálicas expostas e botões eletrônicos do painel. Integrar no preventivo uma higienização e aplicação de antioxidante técnico previne quebras graves."
      },
      {
        question: "Posso aplicar óleo de cozinha ou spray comum na lubrificação da esteira?",
        answer: "Jamais faça isso! Óleos lubrificantes normais, vaselinas ou WD-40 comuns reagem quimicamente e danificam gravemente o material da lona de corrida, empastando o motor e provocando quebra total da placa inversora de voltagem. Utilize apenas silicone líquido ou em spray homologado 100% puro para fitness."
      },
      {
        question: "Como monitorar se a lona precisa de ajuste ou lubrificação preventiva?",
        answer: "Se você notar um deslizamento travante inesperado durante os passos ou se o deck estiver muito quente após apenas 10 minutos de caminhada, o atrito está elevado. Significa que a lona necessita urgentemente de silicone técnico fitness ou de alinhamento estrutural."
      }
    ]
  },
  corretiva: {
    id: "corretiva",
    title: "Conserto e Manutenção Corretiva de Equipamentos",
    subtitle: "Seu aparelho de ginástica quebrou ou parou de funcionar? Nós fazemos o conserto imediato.",
    path: "/manutencao-corretiva.html",
    shortDescription: "Diagnóstico assertivo rápido por especialistas em eletrônica e engenharia fitness. Peças originais, laudo e garantia total.",
    description: "Sua esteira parou de ligar, emite cheiro de queimado ou apresenta códigos de erro no console? Nós, da Velox Fitness Service, enviamos técnicos experientes até sua localidade para detectar a raiz exata da avaria. Fazemos o conserto de motores, troca de placas controladoras de voltagem, reparos estruturais mecânicos profundos e devolução total da funcionalidade com agilidade máxima.",
    benefits: [
      "Visita técnica rápida na Grande São Paulo ou ABC Paulista",
      "Laudo profissional claro detalhando as anomalias e orçamentos justos",
      "Instalação exclusiva de peças confiáveis e robustas",
      "Garantia pós-conserto documentada",
      "Técnicos especialistas em conserto de placas eletrônicas avançadas"
    ],
    includes: [
      "Diagnósticos eletrônicos de placas inversoras e circuitos",
      "Recondicionamento ou substituição mecânica de motores avariados",
      "Eliminação de barulhos incômodos estruturais em eixos e rolos",
      "Inspeção e reparos em fiações internas e consoles com mau contato",
      "Substituição de displays danificados e botões de atalho"
    ],
    problems: [
      "Esteira apresenta erro 'E1', 'E2' ou 'E6' no painel e para de correr",
      "Display liga, mas o motor não consegue mover a estrutura",
      "Barulho estaladiço ou estridência metálica no seu elíptico ou no rolo da esteira",
      "Bicicleta ergométrica com ajuste de resistência magnética descalibrado",
      "Aparelho desliga subitamente após alguns minutos de funcionamento contínuo",
      "Cabos de aço de aparelhos de musculação triturados ou frouxos"
    ],
    faqs: [
      {
        question: "Qual o prazo padrão para receber a visita corretiva em Diadema ou São Paulo?",
        answer: "Nosso tempo médio de atendimento é de 24 a 48 horas úteis após o primeiro contato via WhatsApp, adaptando o horário à rotina das suas instalações residenciais ou empresariais."
      },
      {
        question: "Minha esteira é muito antiga. Vale a pena consertar?",
        answer: "Na imensa maioria das vezes, sim! Equipamentos tradicionais costumam possuir estruturas de metal altamente rígidas e superiores aos modelos de baixo custo atuais. Um motor recondicionado ou uma placa controladora nova resolve sua necessidade com economia fantástica."
      },
      {
        question: "Vocês realizam o conserto no próprio local da visita?",
        answer: "Sim, cerca de 80% das correções — como lubrificação, alinhamentos, troca de lonas mecânicas, correias e fiações — são totalmente concluídas na primeira visita. Se necessitarmos recondicionar o motor ou fazer microssoldas eletrônicas complexas na placa controladora, retiramos as subpeças afetadas e as levamos à nossa bancada técnica, preservando a máquina no local."
      },
      {
        question: "Como posso agendar o atendimento corretivo pelo WhatsApp?",
        answer: "Basta clicar em nossos botões de CTA! Envie-nos uma foto geral do aparelho, relate os sintomas (ou código de erro exibido) e sua região geográfica. Formulamos prontamente um pré-agendamento rápido."
      }
    ]
  },
  montagem: {
    id: "montagem",
    title: "Montagem Profissional de Equipamentos de Ginástica",
    subtitle: "Garantia de uma montagem precisa para a total segurança do seu treino diário.",
    path: "/montagem-equipamentos.html",
    shortDescription: "Evite montagens amadoras que danificam seu equipamento ou ameaçam o bem-estar físico. Montamos de esteiras a aparelhos integrados de musculação complexos.",
    description: "Comprar um novo módulo de musculação (estação integrated) ou uma esteira dobrável pode se tornar um pesadelo de montagem doméstica. Aparelhos fitness requerem polias muito bem tensionadas, parafusos submetidos aos corretos torques de frenagem, correias niveladas e cabos de aço precisamente direcionados. Nossa equipe técnica possui o arsenal de ferramentas adequados e know-how de engenharia para viabilizar montagem, desmontagem ou realocação segura.",
    benefits: [
      "Preservação da integridade da garantia original de fábrica do fabricante",
      "Eliminação absoluta do risco de montagens invertidas perigosas",
      "Nivelamento de base milimétrica contra desgastes não-uniformais no piso",
      "Instalação veloz com profissionais experientes e focados",
      "Orientações exclusivas dos técnicos sobre a correta conservação"
    ],
    includes: [
      "Layout dos manuais técnicos e conferência sistemática de insumos",
      "Aperto técnico milimétrico com dezenas de ferramentas profissionais",
      "Inspeção e roteamento seguro de calhas elétricas e cabos de aço internos",
      "Passagem de fiações e fixação estanque dos consoles LCD",
      "Calibragem geral contra trepidações e testes dinâmicos com peso",
      "Primeira lubrificação técnica de cortesia pós-montagem"
    ],
    faqs: [
      {
        question: "Vocês fazem desmontagem de aparelhos para mudanças residenciais?",
        answer: "Sim! Prestamos assistência completa para mudanças. Nossa equipe faz a desmontagem catalogando todos os parafusos na residência original e realiza a posterior montagem com perfeito reaperto e calibragem geométrica no destino final."
      },
      {
        question: "Por que não devo eu mesmo montar minha estação de musculação?",
        answer: "As estações integram sistemas cruzados de polias mecânicas e distribuição de cargas suspensas. Errar em um pino ou curva de cabo de aço deforma o cabo instantaneamente sob carga e coloca o usuário em perigo de acidentes graves na coluna ou articulações e rompe a garantia do produto."
      },
      {
        question: "A Velox monta equipamentos comprados diretamente na internet?",
        answer: "Sim, cobrimos toda a categoria de fitness adquiridos em e-commerces como Kikos, Netshoes, Amazon, Mercado Livre, Athletic, Movement, Caloi, etc. Sejam nacionais ou importados de container."
      }
    ]
  },
  pecas: {
    id: "pecas",
    title: "Troca de Peças e Reformas de Equipamentos Fitness",
    subtitle: "Restaure a beleza mecânica e estética das suas máquinas de treino.",
    path: "/troca-de-pecas.html",
    shortDescription: "Lonas de alto fluxo, correias estriadas elásticas de fábrica, motores robustos e recondicionamento estético completo com pintura eletrostática anticiclone.",
    description: "Equipamentos de ginástica, por mais robustos que sejam, têm componentes com prazos de validade naturais sob condições intensas. A lona estica e resseca, a correia do volante racha, os suportes de espuma dos estofados racham ou a carcaça de aço apresenta marcas de ferrugem. A Velox Fitness Service fornece peças de altíssima qualidade técnica para troca imediata e promove a reestruturação estética do seu equipamento.",
    benefits: [
      "Trabalhamos estritamente com lonas de milimetragem robustas antiderrapantes",
      "Fornecimento de motores e placas com garantia de assistência dedicada",
      "Troca de estofamento esportivo em condomínios e academias comerciais",
      "Pintura eletrostática automotiva que estanca o avanço de oxidações",
      "Prolonga a vida útil do aparelho evitando uma compra custosa de máquina nova"
    ],
    includes: [
      "Troca profissional de lona para esteira residencial e comercial",
      "Substituição de correias de transmissão internas e do rotor magnético",
      "Troca de decks de madeira MDF impermeabilizados especiais",
      "Substituição de cabos de aço por cabos revestidos com alma de náilon reforçado",
      "Substituição de sensores de velocidade ópticos de ranhura e pulsação",
      "Reforma estética de estruturas de ferro com lixamento e pintura"
    ],
    faqs: [
      {
        question: "Como descobrir a medida correta da lona da minha esteira?",
        answer: "A medida depende do comprimento do deck e diâmetro dos rolos. Fique tranquilo, nossos técnicos possuem uma planilha das principais montadoras ou efetuam a medição geométrica oficial na visita preliminar."
      },
      {
        question: "Por que a lona da esteira começa a escorregar lateralmente?",
        answer: "Isso ocorre por desequilíbrio na tração traseira dos parafusos do rolo guiador. Um pequeno ajuste com chave sextavada (Allen) costuma resolver, mas se a lona estiver muito gasta ou ondulada nas bordas, somente a troca por uma lona integral nova devolverá a aderência operacional segura."
      },
      {
        question: "Vocês reformam estofados de aparelhos de musculação rasgados?",
        answer: "Sim! Trocar estofados mofados, rasgados ou sem espuma melhora consideravelmente o apelo estético do seu condomínio ou academia. Usamos tecidos náuticos impermeáveis resistentes que facilitam a posterior assepsia e higienização diária."
      }
    ]
  }
};
