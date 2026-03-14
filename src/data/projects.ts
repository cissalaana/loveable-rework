export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

export interface Metric {
  value: string;
  label: string;
  sub: string;
}

export interface SprintContent {
  type: "text" | "bullets" | "image" | "images" | "cards" | "quote" | "metrics" | "personas";
  title?: string;
  text?: string;
  items?: string[];
  image?: string;
  imageCaption?: string;
  images?: { src: string; caption?: string }[];
  cards?: { icon?: string; title: string; desc: string }[];
  metrics?: Metric[];
  personas?: { name: string; age: string; role: string; desc: string; photo?: string; journeyImage?: string }[];
}

export interface Sprint {
  label: string;
  title: string;
  subtitle?: string;
  sections: SprintContent[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  category: string;
  color: string;
  emoji: string;
  year: string;
  role: string;
  duration: string;
  team: string;
  overview: string;
  problem: string;
  solution: string;
  process: ProcessStep[];
  metrics: Metric[];
  stakeholders: string[];
  methodologies: string[];
  gallery: string[];
  research?: string;
  researchInsights?: { title: string; detail: string }[];
  personas?: { name: string; age: string; role: string; desc: string }[];
  designPrinciples?: { title: string; desc: string }[];
  learnings?: string[];
  featuredImage?: string;
  sprints?: Sprint[];
}

export const PROJECTS: Project[] = [
  {
    id: "guardia",
    title: "Guardiã",
    subtitle: "Uma solução ubíqua para aumentar a segurança de mulheres no campus da UFPE",
    desc: "Solução híbrida com app móvel e dispositivo vestível projetados para aumentar a segurança de mulheres no campus da UFPE, permitindo acionamento de emergência em menos de 2 segundos.",
    tags: ["UX/UI", "Mobile", "IoT", "Produto Físico", "Service Design"],
    category: "Mobile",
    color: "#EBA5A5",
    emoji: "🔥",
    year: "2024",
    role: "Product Designer",
    duration: "4 meses",
    team: "5 pessoas",
    overview: "A Guardiã é uma solução híbrida composta por um aplicativo móvel e um dispositivo vestível, um botão de pânico discreto que pode ser usado como pulseira, colar, choker ou fixado à capinha do celular. O sistema permite que usuárias acionem ajuda de forma rápida, discreta e sem depender do celular. Projeto desenvolvido na disciplina de Design de Interfaces Ubíquas (UFPE), alinhado com a ODS 5 da ONU.",
    problem: "Com base na problemática apresentada pela ODS 5 da ONU, que aborda a necessidade de promover a igualdade de gênero e enfrentar as diferentes formas de violência e discriminação contra mulheres, analisamos o contexto do campus da UFPE. Mulheres que circulam pela universidade enfrentam frequentemente situações de insegurança, especialmente em locais com pouca iluminação e baixo fluxo de pessoas. Dados indicam que 85,1% das estudantes não se sentem seguras com as medidas atuais, e cerca de 50% das situações de vulnerabilidade ocorrem fora das áreas centrais, em caminhos e zonas de transição entre prédios.",
    solution: "Criamos uma solução híbrida com um dispositivo vestível, um botão de pânico acionado por duplo clique ou comando de voz, integrado a um aplicativo com rotas compartilhadas em tempo real, mapa colaborativo de segurança e sugestões de trajetos baseadas em dados de ocorrências. Assim, mulheres podem pedir ajuda em menos de dois segundos, mesmo sem acessar o celular, agilizando o acionamento da segurança do campus e aumentando a sensação de segurança nos deslocamentos.",
    process: [
      { step: "01", title: "Escolha da ODS e Missões", desc: "Realizamos uma pesquisa sobre os Objetivos de Desenvolvimento Sustentável (ODS) da ONU a partir de uma excursão promovida pela UFPE. Durante esse processo, escolhemos trabalhar com a ODS 5 – Igualdade de Gênero. A partir dela, selecionamos três objetivos para explorar soluções utilizando tecnologia ubíqua.", icon: "🔍" },
      { step: "02", title: "Pesquisa", desc: "Com base no contexto selecionado, realizamos uma desk research e planejamos uma pesquisa quantitativa e qualitativa aplicada no campus da UFPE para compreender melhor como as mulheres percebem a segurança no local. Também realizamos benchmarking com soluções semelhantes para identificar referências e oportunidades.", icon: "🗺️" },
      { step: "03", title: "Definição", desc: "A partir dos resultados, definimos as necessidades e oportunidades para o desenvolvimento da solução construindo com base na análise de dados um mapa de calor do campus. Desenvolvimento da Persona e Protopersonas e Jornada do usuário. ", icon: "💡" },
      { step: "04", title: "Ideação", desc: "Brainstorming de Funcionalidades para o Produto Físico e Digital; Construção do Fluxograma do Aplicativo; Demonstração Relâmpago de Similares; ", icon: "🌐" },
      { step: "05", title: "Protótipo Físico e Digital", desc: "Protótipo de baixa, média e alta fidelidade no Figma com fluxos completos e protótipo conceitual do dispositivo físico em Blender. Desenvolvimento da Identidade visual Guardiã", icon: "🎨" },
      { step: "06", title: "Entrega", desc: "Desenvolvimento de uma História do Usuário para o Pitch. Impressão 3D de Protótipo. Documentação e Handoff para professor", icon: "✨" },
    ],
    metrics: [
      { value: "74", label: "Respondentes na pesquisa", sub: "estudantes de diferentes cursos" },
      { value: "85,1%", label: "Se sentem inseguras", sub: "com medidas atuais do campus" },
      { value: "97,3%", label: "Se locomovem a pé", sub: "dentro da universidade" },
      { value: "<2s", label: "Tempo de acionamento", sub: "emergência via dispositivo" },
    ],
    stakeholders: ["Estudantes do campus (74 respondentes)", "Seguranças do campus", "Coordenadores de curso", "Técnicos de câmeras da UFPE", "Equipe de projeto (5 integrantes)"],
    methodologies: ["Design Thinking", "Pesquisa Quantitativa e Qualitativa", "Personas e Jornada do Usuário", "Crazy 8s", "Design de Interfaces Ubíquas (UUI)", "Prototipagem em Alta Fidelidade"],
    featuredImage: "/assets/MockupGuardiã3.png",
    gallery: ["/assets/MockupGuardiã.png", "/assets/MockupGuardiã1.png"],
    research: "Antes de propor qualquer solução, realizamos uma pesquisa para entender a experiência real de segurança das mulheres no campus. Aplicamos um questionário online com 74 respostas de estudantes de diferentes cursos, investigando perfil, frequência no campus, meios de locomoção, percepção de segurança e satisfação com medidas existentes. Os dados revelaram que o problema não está apenas nos edifícios, mas nos deslocamentos entre eles — 50% das situações de vulnerabilidade acontecem fora dos centros acadêmicos.",
    researchInsights: [
      { title: "Locomoção a pé", detail: "97,3% das estudantes se locomovem a pé dentro do campus — qualquer solução precisa funcionar para quem está caminhando." },
      { title: "Insegurança generalizada", detail: "85,1% das respondentes não se sentem seguras com as medidas atuais, mesmo sem ter presenciado ocorrências diretamente." },
      { title: "CFCH como área crítica", detail: "43,2% apontaram o CFCH como o local menos seguro — áreas vazias, ruas afastadas e períodos noturnos concentram a maior insegurança." },
      { title: "Subnotificação", detail: "47,3% das estudantes não se sentem à vontade para denunciar casos de assédio ou violência no campus." },
    ],
    personas: [
      { name: "Maria Cecília", age: "21 anos", role: "Persona Principal", desc: "Estudante de Psicologia no 5º período. Faz estágio no HC e caminha sozinha pelo campus, especialmente à noite. Não quer mudar sua rotina — quer se sentir segura enquanto vive a vida que já tem." },
      { name: "Erandir", age: "47 anos", role: "Segurança do campus", desc: "Precisa ser notificado rapidamente em casos de emergência para responder com agilidade." },
      { name: "Márcio", age: "36 anos", role: "Coordenador de curso", desc: "Responsável pela distribuição dos dispositivos e cadastro das estudantes no sistema." },
      { name: "Luiz", age: "40 anos", role: "Técnico de câmeras", desc: "Acessa imagens de segurança para auxiliar na verificação de ocorrências." },
    ],
    designPrinciples: [
      { title: "Desatenção", desc: "O dispositivo funciona de forma independente — em situação de risco, a usuária não precisa desbloquear o celular ou abrir um app." },
      { title: "Fluxo cognitivo", desc: "Interações mínimas para que a usuária mantenha o foco no ambiente ao redor, não na tecnologia." },
      { title: "Sem modelo", desc: "O dispositivo pode ser acionado por voz ou por toque, sem necessidade de navegar menus." },
      { title: "Medo de interação", desc: "O duplo clique evita acionamentos acidentais. Alertas falsos podem ser cancelados em segundos." },
      { title: "Padrões", desc: "O app aprende com o histórico de rotas e sugere caminhos familiares automaticamente." },
    ],
    learnings: [
      "Dados quantitativos mostram a dimensão do problema, mas relatos qualitativos revelam a experiência real das usuárias.",
      "Produtos de segurança precisam funcionar mesmo sob estresse — cada clique a mais é um clique que ela pode não conseguir dar.",
      "Design ubíquo não é sobre tecnologia invisível — é sobre tecnologia que respeita o contexto de quem usa.",
      "Este foi meu primeiro projeto com foco em design de sistemas ubíquos, ampliando minha visão sobre como tecnologia pode se integrar ao cotidiano.",
    ],
    sprints: [
      {
        label: "01. Escolha da ODS e Missões",
        title: "Entendendo o Problema",
        subtitle: "Nesta etapa, realizamos uma excursão pela UFPE para identificar potenciais problemas em sua organização e arquitetura que pudessem ser contemplados por um dos Objetivos de Desenvolvimento Sustentável (ODS). Durante a atividade, conduzida pelo professor Rafael Rattes, observamos diferentes áreas do campus e identificamos diversos locais com baixa iluminação e pouco monitoramento de segurança. Esses espaços também estão associados a relatos recorrentes de ocorrências que afetam a segurança das mulheres, o que despertou o interesse da equipe em investigar mais profundamente essa problemática.                ",
        sections: [
          { type: "text", title: "Escolha da ODS", text: "A partir dessa observação inicial, decidimos direcionar o projeto para a ODS 5 - Igualdade de Gênero, selecionando como norteadores os objetivos 5.1, 5.2 e 5.5. Esses objetivos se relacionam diretamente com a proposta do projeto, que busca contribuir para a redução da sensação de insegurança no campus, promover maior presença e participação das mulheres nos espaços universitários e diminuir os riscos enfrentados diariamente por meio de uma solução que integra produto digital e físico." },
          { type: "images", title: "Registro da Excursão", images: [
            { src: "/assets/AreaGuardia.jpg", caption: "Área do campus com baixa iluminação identificada durante a excursão" },
            { src: "/assets/AreaGuardia2.jpeg", caption: "Mapeamento de áreas críticas do campus UFPE" },
          ]},
          { type: "text", title: "Método Tiles IoT Toolkit", text: "Para definir as missões do projeto e construir a protopersona, utilizamos o Tiles IoT Toolkit — um kit de cartas de design voltado para a criação de soluções que envolvem Internet das Coisas. O toolkit nos auxiliou a mapear de forma estruturada os elementos-chave da solução: quem são os usuários, quais são seus comportamentos, em que contextos interagem com o ambiente e quais tecnologias poderiam ser aplicadas. Com base nessas combinações, formulamos as missões que guiariam o desenvolvimento do projeto e construímos uma protopersona inicial, sintetizando as principais necessidades e dores identificadas durante a excursão e a pesquisa preliminar." },
          { type: "bullets", title: "Missões", items: [
            "Sixth Sense: refere-se à soluções que tragam ao usuário uma sensação de percepção extra, similar a um superpoder. Justamente por isso escolhemos essa missão para nos nortear, desejamos prover às mulheres pela nossa solução empoderamento e por meio dele sua segurança.",
            "Safekeeping: refere-se à soluções que protejam o usuário ou algo valioso para ele. Essa missão se encaixa perfeitamente com a problemática que escolhemos, pois nosso objetivo é justamente criar uma solução que aumente a segurança das mulheres no campus da UFPE.",
            "Habit Changing: refere-se à soluções que incentivem mudanças de comportamento ou hábitos duradouros. Essa missão é relevante para o nosso projeto, pois queremos não apenas criar uma solução tecnológica, mas também promover uma mudança cultural em relação à segurança e à presença das mulheres nos espaços universitários.",
          ]},
          { type: "cards", title: "Aspectos Iniciais do Projeto", cards: [
            { icon: "📍", title: "Projeto Local", desc: "O projeto é focado inicialmente em solucionar a problemática de segurança no campus da UFPE, com possibilidades de expansão futuras." },
            { icon: "👤", title: "Protopersona", desc: "Maria Cecília, negra, estudante de Psicologia, baixa renda, mora em Paulista, departamento que mais frequenta é o CFCH" },
            { icon: "🗺️", title: "Solução Integrada", desc: "Nossa solução necessita ter uma integração forte entre produto e aplicativo, utilizando aspectos da tecnologia ubíqua" },
            { icon: "👥", title: "ODS 5", desc: "Sempre consultar durante o projeto o alinhamento com a ODS 5, foco norteador da solução." },
          ]},
        ],
      },
      {
        label: "02. PESQUISA",
        title: "Compreendendo a Realidade",
        subtitle: "Com base no contexto selecionado, realizamos uma desk research e planejamos uma pesquisa quantitativa e qualitativa aplicada no campus da UFPE para compreender melhor como as mulheres percebem a segurança no local.",
        sections: [
          { type: "text", title: "Desk Research & Benchmarking", text: "Iniciamos o projeto com uma desk research para mapear dados sobre violência de gênero em campus universitários no Brasil e identificamos que 73% das mulheres já mudaram seus hábitos após sofrerem violência durante deslocamentos pela cidade; além disso, uma matéria da Folha de Pernambuco (2023) relata que estudantes da UFPE apontam falta de segurança no campus, enquanto dados do Instituto Patrícia Galvão indicam que 81% das mulheres já sofreram algum tipo de violência em seus deslocamentos urbanos; paralelamente realizamos benchmarking com apps de segurança pessoal e dispositivos vestíveis para identificar referências e oportunidades de diferenciação e observamos que muitas soluções digitais possuem interfaces pouco intuitivas ou foram descontinuadas, enquanto os produtos físicos existentes costumam ser voltados ao público idoso, mas a existência de dispositivos de localização semelhantes reforça a viabilidade técnica da proposta e evidencia uma oportunidade de desenvolver uma solução mais adequada ao contexto e às necessidades de estudantes universitárias." },
          { type: "text", title: "Pesquisa Quantitativa/Qualitativa", text: "Aplicamos um questionário online com 74 respostas de estudantes de diferentes cursos da UFPE para compreender perfil demográfico, frequência no campus, meios de locomoção, percepção de segurança e satisfação com as medidas existentes; além dos dados quantitativos, incluímos perguntas abertas para captar percepções qualitativas sobre a rotina das usuárias, já que o tempo do projeto não permitiu entrevistas aprofundadas; a análise revelou que, ao transitarem por locais considerados perigosos, muitas mulheres adotam estratégias informais de proteção, principalmente avisar para alguém para onde estão indo (25 respostas) e compartilhar a localização em tempo real (19 respostas), indicando que a segurança frequentemente depende de redes de apoio pessoais e que a solução deveria se integrar a esses hábitos já existentes; os dados também mostraram que 97,3% das participantes se deslocam majoritariamente a pé dentro do campus e caminham sozinhas e acompanhadas em proporções semelhantes, além de indicar que a sensação de vulnerabilidade está mais associada aos deslocamentos entre os centros do que aos edifícios em si, especialmente em áreas com pouca movimentação ou iluminação, direcionando o projeto para apoiar a segurança durante trajetos dentro do campus." },
          { type: "bullets", title: "Principais Descobertas", items: [
            "97,3% das estudantes se locomovem a pé dentro do campus",
            "85,1% não se sentem seguras com as medidas atuais de segurança",
            "50% das situações de vulnerabilidade acontecem fora dos centros acadêmicos",
            "47,3% não se sentem à vontade para denunciar casos de assédio ou violência",
            "43,2% apontaram o CFCH como o local menos seguro do campus",
          ]},
          { type: "image", image: "/assets/AreaGuardia3.jpeg", imageCaption: "Área do CFCH identificada como zona crítica de insegurança" },
          { type: "cards", title: "Referências Analisadas", cards: [
            { icon: "📱", title: "Apps de segurança", desc: "Aplicativos como bSafe, Noonlight e Safetipin foram analisados para entender funcionalidades e limitações." },
            { icon: "⌚", title: "Wearables de segurança", desc: "Dispositivos como Revolar e Invisawear serviram de referência para o conceito do botão de pânico vestível." },
            { icon: "🏫", title: "Sistemas de campus", desc: "Soluções de segurança universitária como LiveSafe e Rave Guardian foram estudadas para contexto acadêmico." },
          ]},
          { type: "metrics", title: "Métricas da Pesquisa", metrics: [
            { value: "74", label: "Respondentes", sub: "estudantes de diferentes cursos" },
            { value: "85,1%", label: "Se sentem inseguras", sub: "com medidas atuais do campus" },
            { value: "97,3%", label: "Se locomovem a pé", sub: "dentro da universidade" },
            { value: "<2s", label: "Tempo de acionamento", sub: "emergência via dispositivo" },
          ]},
        ],
      },
      {
        label: "03. DEFINIÇÃO",
        title: "Mapeando o Ecossistema",
        subtitle: "A partir dos resultados da pesquisa, definimos as necessidades e oportunidades para o desenvolvimento da solução, construindo personas, jornadas e os princípios de design ubíquo que guiariam todo o projeto.",
        sections: [
          { type: "text", title: "Mapa de Calor do Campus", text: "Com base nos dados coletados, construímos um mapa de calor do campus identificando as áreas de maior risco e menor percepção de segurança. O mapa revelou que as zonas de transição entre centros acadêmicos concentravam os maiores índices de insegurança, especialmente em horários noturnos." },
          { type: "personas", title: "Personas do Projeto", personas: [
            { name: "Maria Cecília", age: "21 anos", role: "Persona Principal", desc: "Estudante de Psicologia no 5º período. Faz estágio no HC e caminha sozinha pelo campus, especialmente à noite. Não quer mudar sua rotina — quer se sentir segura enquanto vive a vida que já tem." },
            { name: "Erandir", age: "47 anos", role: "Segurança do campus", desc: "Precisa ser notificado rapidamente em casos de emergência para responder com agilidade." },
            { name: "Márcio", age: "36 anos", role: "Coordenador de curso", desc: "Responsável pela distribuição dos dispositivos e cadastro das estudantes no sistema." },
            { name: "Luiz", age: "40 anos", role: "Técnico de câmeras", desc: "Acessa imagens de segurança para auxiliar na verificação de ocorrências." },
          ]},
          { type: "text", title: "Jornada do Usuário", text: "Mapeamos a jornada completa de Maria Cecília com momentos críticos de insegurança, identificando os pontos de dor e oportunidades de intervenção ao longo de seu deslocamento pelo campus.\n\nA jornada revelou que os momentos de maior vulnerabilidade ocorrem durante transições entre centros acadêmicos, especialmente em horários noturnos e em áreas com pouca iluminação." },
          { type: "images", title: "Jornada e Mapeamento", images: [
            { src: "/assets/MockupGuardiã1.png", caption: "Mapeamento de jornada da persona Maria Cecília" },
          ]},
          { type: "bullets", title: "Princípios de Design Ubíquo (UUI)", items: [
            "Desatenção — o dispositivo funciona independente, sem precisar desbloquear o celular",
            "Fluxo cognitivo — interações mínimas para manter o foco no ambiente",
            "Sem modelo — acionamento por voz ou toque, sem navegar menus",
            "Medo de interação — duplo clique evita acionamentos acidentais",
            "Padrões — o app aprende com o histórico de rotas da usuária",
          ]},
        ],
      },
      {
        label: "04. IDEAÇÃO",
        title: "Da Ideia ao Conceito",
        subtitle: "Exploramos soluções através de brainstorming, Crazy 8s e análise de similares, convergindo para uma solução híbrida que combina aplicativo móvel e dispositivo vestível.",
        sections: [
          { type: "text", title: "Brainstorming de Funcionalidades", text: "Realizamos sessões de brainstorming para gerar ideias tanto para o produto digital quanto para o físico. Utilizamos a técnica Crazy 8s para explorar rapidamente múltiplas abordagens de interação, e uma Demonstração Relâmpago de similares para identificar padrões de sucesso no mercado." },
          { type: "text", title: "Construção do Fluxograma", text: "A partir das funcionalidades priorizadas, construímos o fluxograma completo do aplicativo, mapeando todas as telas e interações necessárias. O fluxo principal — do acionamento de emergência à notificação do segurança — foi otimizado para funcionar em menos de 2 segundos." },
          { type: "cards", title: "Funcionalidades Priorizadas", cards: [
            { icon: "🔴", title: "Botão de Pânico", desc: "Duplo clique no dispositivo vestível aciona emergência silenciosamente em menos de 2 segundos." },
            { icon: "🎤", title: "Comando de Voz", desc: "Alternativa ao toque: a palavra-chave 'Guardiã' ativa o modo emergência por voz." },
            { icon: "📡", title: "Rota Compartilhada", desc: "Compartilhamento em tempo real da localização com contatos de confiança durante deslocamentos." },
            { icon: "🔥", title: "Mapa de Calor", desc: "Mapa colaborativo de segurança alimentado por dados de ocorrências e avaliações das estudantes." },
          ]},
          { type: "quote", text: "\"A solução precisa funcionar mesmo quando a usuária está sob estresse — cada clique a mais é um clique que ela pode não conseguir dar.\"" },
        ],
      },
      {
        label: "05. PROTÓTIPO FÍSICO E DIGITAL",
        title: "Materializando a Solução",
        subtitle: "Desenvolvemos protótipos de baixa, média e alta fidelidade no Figma, além do protótipo conceitual do dispositivo físico em Blender, acompanhados da identidade visual completa da Guardiã.",
        sections: [
          { type: "text", title: "Protótipos Digitais", text: "O processo de prototipagem seguiu uma evolução gradual: começamos com wireframes de baixa fidelidade para validar a arquitetura de informação, evoluímos para protótipos de média fidelidade com interações básicas, e finalizamos com o protótipo de alta fidelidade no Figma com fluxos completos e micro-interações." },
          { type: "text", title: "Protótipo do Dispositivo Físico", text: "Paralelamente, modelamos o dispositivo vestível em Blender, explorando diferentes formas e materiais. O botão de pânico foi projetado para ser discreto e versátil — podendo ser usado como pulseira, colar, choker ou fixado à capinha do celular." },
          { type: "text", title: "Identidade Visual", text: "Desenvolvemos a identidade visual completa da Guardiã, incluindo logotipo, paleta de cores, tipografia e elementos gráficos. A marca transmite segurança e acolhimento, usando tons rosados que remetem à feminilidade sem infantilizar." },
          { type: "image", image: "/assets/MockupGuardiã3.png", imageCaption: "Protótipo de alta fidelidade — telas principais do app Guardiã" },
          { type: "cards", title: "Entregas de Prototipagem", cards: [
            { icon: "📱", title: "App em Alta Fidelidade", desc: "Protótipo completo no Figma com todas as telas, fluxos e micro-interações do aplicativo." },
            { icon: "⌚", title: "Dispositivo Vestível 3D", desc: "Modelo conceitual em Blender do botão de pânico com variações de uso (pulseira, colar, choker)." },
            { icon: "🎨", title: "Brand Guidelines", desc: "Manual de identidade visual com logotipo, cores, tipografia e aplicações da marca Guardiã." },
          ]},
        ],
      },
      {
        label: "06. ENTREGA",
        title: "Do Protótipo à Apresentação",
        subtitle: "Finalizamos o projeto com a impressão 3D do protótipo físico, desenvolvimento da história do usuário para o pitch e documentação completa para handoff.",
        sections: [
          { type: "text", title: "História do Usuário", text: "Desenvolvemos uma narrativa envolvente para o pitch final, contando a história de Maria Cecília — desde sua rotina no campus até o momento em que a Guardiã transforma sua experiência de deslocamento. A história conecta dados reais da pesquisa com a solução proposta de forma empática." },
          { type: "text", title: "Impressão 3D", text: "O protótipo conceitual do dispositivo vestível foi materializado através de impressão 3D, permitindo demonstrar fisicamente o produto durante a apresentação. O modelo impresso incluiu as diferentes configurações de uso: pulseira, colar e fixação na capinha do celular." },
          { type: "bullets", title: "Entregas Finais", items: [
            "Protótipo de alta fidelidade no Figma com fluxos completos e interativos",
            "Modelo 3D impresso do dispositivo vestível em escala real",
            "Documentação completa do projeto com pesquisa, personas, jornada e decisões de design",
            "Pitch deck com história do usuário e demonstração da solução",
            "Handoff documentado para o professor com todas as especificações técnicas",
          ]},
          { type: "image", image: "/assets/MockupGuardiã.png", imageCaption: "Apresentação final do projeto com protótipo físico e digital" },
          { type: "quote", text: "\"O dispositivo pode ser usado como pulseira, colar, choker ou fixado à capinha do celular — a discrição é parte fundamental da segurança.\"" },
        ],
      },
    ],
  },
  {
    id: "Redesign Letterboxd",
    title: "Redesign Letterboxd",
    subtitle: "Redesign do Letterboxd, a rede social de cinema, focado em melhorar a experiência de descoberta e engajamento dos usuários",
    desc: "Criação de um dashboard de analytics para gestão de dados educacionais em escolas públicas, guiado por dados reais coletados junto a gestores e professores.",
    tags: ["Mobile", "Redesign", "UX/UI", "Pesquisa com Usuários", "Métricas de Sucesso"],
    category: "Web",
    color: "#202830",
    emoji: "🎬",
    year: "2025",
    role: "UX Designer",
    duration: "4 meses",
    team: "2 pessoas",
    overview: "Gestores de escolas públicas tomavam decisões baseadas em planilhas desatualizadas. A falta de visualização clara de dados levava a alocações erradas de recursos e intervenções pedagógicas tardias.",
    problem: "Como transformar dados educacionais complexos em visualizações acessíveis para gestores com diferentes níveis de letramento digital, de forma que decisões sejam tomadas com mais agilidade e precisão?",
    solution: "Desenvolvemos um dashboard modular com visualizações progressivas — do simples ao complexo — com alertas automáticos para indicadores críticos e relatórios exportáveis em um clique.",
    process: [
      { step: "01", title: "Imersão", desc: "Shadowing de 2 semanas com 8 gestores escolares observando fluxos de trabalho reais.", icon: "👁️" },
      { step: "02", title: "Definição", desc: "Workshop de priorização com MoSCoW para identificar os 12 indicadores mais críticos.", icon: "📋" },
      { step: "03", title: "Arquitetura", desc: "Criação da arquitetura de informação e hierarquia de dados com card sorting.", icon: "🏗️" },
      { step: "04", title: "Visualização", desc: "Exploração de 6 modelos de chart diferentes testados com gestores reais.", icon: "📈" },
      { step: "05", title: "Validação", desc: "Testes A/B entre 2 versões do dashboard com 40 gestores de diferentes perfis.", icon: "⚖️" },
      { step: "06", title: "Escala", desc: "Design system adaptado para alta contraste e modo daltônico. Handoff para time de engenharia.", icon: "📐" },
    ],
    metrics: [
      { value: "–40%", label: "Tempo de decisão", sub: "de 3 dias para 1,8 dia" },
      { value: "93%", label: "Satisfação dos gestores", sub: "NPS de 42 → 71" },
      { value: "12x", label: "Mais rápido", sub: "para gerar relatórios" },
      { value: "340", label: "Escolas impactadas", sub: "no piloto do primeiro ano" },
    ],
    stakeholders: ["Secretaria de Educação", "Diretores de Escola", "Coordenadores Pedagógicos", "Time de Engenharia", "Especialistas em Dados"],
    methodologies: ["Service Design", "Data Visualization (D3.js)", "Card Sorting", "Shadowing", "Design Inclusivo", "Testes A/B"],
    gallery: ["#A4BDA8", "#C7C19D", "#FFCA8C", "#FAF5F0", "#A4BDA8", "#C7C19D"],
    research: "Realizamos um shadowing de 2 semanas acompanhando 8 gestores escolares em seu ambiente de trabalho. Observamos como tomavam decisões, quais ferramentas usavam e onde estavam os maiores gargalos. Complementamos com entrevistas semiestruturadas para entender frustrações, necessidades e expectativas em relação a visualização de dados educacionais.",
    researchInsights: [
      { title: "Planilhas como padrão", detail: "100% dos gestores usavam planilhas manuais como principal ferramenta de análise — gerando atrasos e erros frequentes." },
      { title: "Decisões reativas", detail: "A maioria das intervenções pedagógicas acontecia tarde demais porque os dados não eram acessíveis em tempo real." },
      { title: "Letramento digital variado", detail: "O nível de familiaridade com tecnologia variava enormemente entre gestores, exigindo uma interface progressiva." },
      { title: "Dados dispersos", detail: "Informações estavam espalhadas em 4+ sistemas diferentes, dificultando uma visão unificada." },
    ],
    personas: [
      { name: "Dona Marta", age: "54 anos", role: "Persona Principal", desc: "Diretora de escola pública há 12 anos. Usa planilhas básicas e precisa de visualizações claras para tomar decisões rápidas sobre alocação de recursos." },
      { name: "Prof. Ricardo", age: "38 anos", role: "Coordenador Pedagógico", desc: "Precisa acompanhar indicadores de desempenho dos alunos para planejar intervenções pedagógicas no tempo certo." },
      { name: "Ana Paula", age: "29 anos", role: "Analista da Secretaria", desc: "Consolida dados de múltiplas escolas e precisa gerar relatórios comparativos para tomada de decisão na gestão pública." },
    ],
    designPrinciples: [
      { title: "Progressividade", desc: "A interface revela complexidade gradualmente — do resumo executivo aos dados granulares, sem sobrecarregar o usuário." },
      { title: "Acessibilidade", desc: "Alto contraste, modo daltônico e tipografia ampliada garantem uso por gestores com diferentes necessidades visuais." },
      { title: "Ação imediata", desc: "Alertas automáticos para indicadores críticos reduzem o tempo entre identificar um problema e agir sobre ele." },
      { title: "Exportabilidade", desc: "Relatórios podem ser gerados e exportados em um clique, eliminando o retrabalho manual com planilhas." },
    ],
    learnings: [
      "Shadowing revelou comportamentos que entrevistas sozinhas nunca teriam capturado — como a forma que gestores improvisavam soluções no dia a dia.",
      "Testes A/B com gestores reais mostraram que simplicidade vence sofisticação visual em contextos de baixo letramento digital.",
      "Design inclusivo não é um extra — é um requisito fundamental quando seu público tem perfis tão diversos.",
      "Card sorting com usuários reais reorganizou completamente a hierarquia de informação que havíamos planejado inicialmente.",
    ],
    sprints: [
      {
        label: "01. IMERSÃO",
        title: "Mergulhando no Universo Cinéfilo",
        subtitle: "Shadowing de 2 semanas com 8 gestores escolares e entrevistas semiestruturadas para mapear comportamentos reais.",
        sections: [
          { type: "text", title: "Contexto da Pesquisa", text: "Acompanhamos 8 gestores escolares em seu ambiente de trabalho durante 2 semanas, observando como tomavam decisões, quais ferramentas usavam e onde estavam os maiores gargalos no fluxo de trabalho diário." },
          { type: "bullets", title: "Descobertas do Shadowing", items: [
            "100% dos gestores usavam planilhas manuais como principal ferramenta de análise",
            "Decisões reativas: intervenções pedagógicas aconteciam tarde demais por falta de dados em tempo real",
            "Nível de familiaridade com tecnologia variava enormemente entre gestores",
            "Informações espalhadas em 4+ sistemas diferentes dificultavam uma visão unificada",
          ]},
          { type: "cards", title: "Oportunidades Identificadas", cards: [
            { icon: "📊", title: "Visualização progressiva", desc: "Do simples ao complexo — revelar dados gradualmente conforme a familiaridade do gestor." },
            { icon: "🔔", title: "Alertas automáticos", desc: "Indicadores críticos precisam gerar notificações proativas, não esperar que o gestor descubra." },
           { icon: "📱", title: "Mobile-first", desc: "Gestores passam mais tempo fora do escritório do que dentro — a solução precisa ser mobile." },
          ]},
          { type: "metrics", title: "Métricas da Pesquisa", metrics: [
            { value: "–40%", label: "Tempo de decisão", sub: "de 3 dias para 1,8 dia" },
            { value: "93%", label: "Satisfação dos gestores", sub: "NPS de 42 → 71" },
            { value: "12x", label: "Mais rápido", sub: "para gerar relatórios" },
            { value: "340", label: "Escolas impactadas", sub: "no piloto do primeiro ano" },
          ]},
        ],
      },
      {
        label: "02. DEFINIÇÃO",
        title: "Organizando a Complexidade",
        subtitle: "Workshop de priorização com MoSCoW para identificar os 12 indicadores mais críticos e definir o escopo do produto.",
        sections: [
          { type: "text", title: "Priorização com MoSCoW", text: "Realizamos um workshop com gestores, coordenadores e analistas da secretaria para priorizar os 12 indicadores mais críticos usando a técnica MoSCoW. A participação ativa dos stakeholders garantiu alinhamento entre necessidades reais e viabilidade técnica." },
          { type: "bullets", title: "Indicadores Priorizados (Must Have)", items: [
            "Taxa de frequência diária por turma com alertas de queda",
            "Desempenho médio por disciplina com comparativo histórico",
            "Índice de evasão com previsão baseada em padrões identificados",
            "Relatório exportável em um clique para reuniões com a secretaria",
          ]},
          { type: "quote", text: "\"Se eu pudesse ver só uma coisa pela manhã, seria quem está faltando muito — porque é aí que começa a evasão.\" — Dona Marta, Diretora" },
          { type: "personas", title: "Personas do Projeto", personas: [
            { name: "Dona Marta", age: "54 anos", role: "Persona Principal", desc: "Diretora de escola pública há 12 anos. Usa planilhas básicas e precisa de visualizações claras para tomar decisões rápidas sobre alocação de recursos." },
            { name: "Prof. Ricardo", age: "38 anos", role: "Coordenador Pedagógico", desc: "Precisa acompanhar indicadores de desempenho dos alunos para planejar intervenções pedagógicas no tempo certo." },
            { name: "Ana Paula", age: "29 anos", role: "Analista da Secretaria", desc: "Consolida dados de múltiplas escolas e precisa gerar relatórios comparativos para tomada de decisão na gestão pública." },
          ]},
        ],
      },
      {
        label: "03. ARQUITETURA",
        title: "Estruturando a Informação",
        subtitle: "Criação da arquitetura de informação e hierarquia de dados com card sorting e participação de usuários reais.",
        sections: [
          { type: "text", title: "Card Sorting com Gestores", text: "Conduzimos sessões de card sorting abertas e fechadas com 12 gestores de diferentes perfis para entender como organizam mentalmente os indicadores educacionais. O resultado reorganizou completamente a hierarquia de informação que havíamos planejado inicialmente." },
          { type: "bullets", title: "Decisões de Arquitetura", items: [
            "Dashboard principal com visão resumida dos 4 indicadores críticos (Must Have)",
            "Drill-down progressivo: resumo → detalhes → dados brutos em 3 níveis",
            "Navegação por escola, turma e aluno para diferentes granularidades",
            "Área de alertas com priorização automática por severidade",
          ]},
          { type: "cards", title: "Padrões de Organização Mental", cards: [
            { icon: "📅", title: "Temporal", desc: "Gestores pensam em dados por período — dia, semana, mês e semestre são as unidades naturais." },
            { icon: "👥", title: "Por turma", desc: "A turma é a unidade base de gestão — não o aluno individual nem a escola como um todo." },
            { icon: "🚨", title: "Por urgência", desc: "Gestores querem ver primeiro o que precisa de ação imediata, depois o contexto completo." },
          ]},
        ],
      },
      {
        label: "04. VISUALIZAÇÃO",
        title: "Testando Modelos Visuais",
        subtitle: "Exploração de 6 modelos de chart diferentes testados com gestores reais para encontrar a visualização ideal.",
        sections: [
          { type: "text", title: "Experimentação Visual", text: "Testamos 6 modelos de visualização diferentes — de gráficos de barras tradicionais a treemaps e sparklines — com gestores reais. O objetivo era encontrar o equilíbrio entre riqueza informacional e facilidade de interpretação para públicos com diferentes níveis de letramento digital." },
          { type: "cards", title: "Modelos Testados", cards: [
            { icon: "📊", title: "Barras + Cards", desc: "Cards com número grande + barra de progresso simples. Preferido por 67% dos gestores com baixo letramento digital." },
            { icon: "📈", title: "Line charts", desc: "Gráficos de linha para tendências temporais. Útil para gestores experientes, confuso para iniciantes." },
            { icon: "🔥", title: "Heatmaps", desc: "Mapas de calor para visão comparativa entre turmas. Intuitivo para todos os perfis." },
            { icon: "🎯", title: "Gauges", desc: "Medidores circulares para metas. Visualmente atraentes mas pouco informativos em escala." },
          ]},
          { type: "bullets", title: "Conclusões dos Testes", items: [
            "Cards com números grandes foram preferidos universalmente como primeira camada de informação",
            "Line charts funcionam bem como segunda camada (drill-down) para gestores intermediários",
            "Heatmaps são ideais para comparação entre turmas — intuitivos para todos os perfis",
            "Cores semafóricas (verde/amarelo/vermelho) são o código visual mais compreendido",
          ]},
        ],
      },
      {
        label: "05. VALIDAÇÃO",
        title: "Testando com Quem Usa",
        subtitle: "Testes A/B entre 2 versões do dashboard com 40 gestores de diferentes perfis de letramento digital.",
        sections: [
          { type: "text", title: "Processo de Validação", text: "Conduzimos testes A/B rigorosos entre 2 versões finais do dashboard envolvendo 40 gestores de diferentes perfis. A versão A priorizava gráficos interativos; a versão B priorizava cards com números grandes e alertas. Os resultados foram claros: simplicidade vence sofisticação visual em todos os perfis." },
          { type: "cards", title: "Resultados dos Testes A/B", cards: [
            { icon: "✅", title: "Versão simplificada", desc: "73% dos gestores completaram tarefas mais rápido com a versão de cards simples vs. gráficos complexos." },
            { icon: "♿", title: "Acessibilidade", desc: "Modo de alto contraste e suporte daltônico testados com 8 gestores com necessidades visuais específicas." },
            { icon: "⚡", title: "Time-to-insight", desc: "Tempo médio para encontrar uma informação crítica caiu de 3 minutos para 18 segundos." },
            { icon: "📤", title: "Exportação", desc: "Relatórios que levavam 45 min em planilha agora são gerados em 1 clique — testado e validado." },
          ]},
          { type: "quote", text: "\"Finalmente eu consigo ver tudo o que preciso numa tela só, sem ter que abrir 4 planilhas diferentes.\" — Gestora participante do teste" },
        ],
      },
      {
        label: "06. ESCALA",
        title: "Preparando para o Mundo Real",
        subtitle: "Design system adaptado para alta contraste e modo daltônico, com handoff completo para o time de engenharia.",
        sections: [
          { type: "text", title: "Design System Acessível", text: "Criamos um design system completo adaptado para as necessidades do público-alvo: alto contraste para ambientes com iluminação variada, modo daltônico com padrões texturais além de cores, e tipografia ampliada para gestores com necessidades visuais." },
          { type: "bullets", title: "Entregas para Engenharia", items: [
            "Design system completo com tokens de cor, tipografia e espaçamento",
            "Componentes documentados com estados, variantes e guias de uso",
            "Protótipo interativo no Figma com todos os fluxos e edge cases",
            "Especificações de acessibilidade: WCAG 2.1 AA em todas as telas",
            "Guia de responsividade para adaptação mobile e tablet",
          ]},
          { type: "cards", title: "Impacto do Piloto", cards: [
            { icon: "🏫", title: "340 escolas", desc: "Piloto implementado em 340 escolas públicas no primeiro ano de operação." },
            { icon: "⏱️", title: "–40% tempo de decisão", desc: "Tempo médio de decisão caiu de 3 dias para 1,8 dia com dados em tempo real." },
            { icon: "📊", title: "NPS 71", desc: "Satisfação dos gestores saltou de NPS 42 para 71 após implementação." },
          ]},
        ],
      },
    ],
  },
  {
    id: "Redesign Craigslist",
    title: "Redesign Craigslist",
    subtitle: "Redesign completo do site de classificados mais icônico da internet, focado em usabilidade e modernização visual",
    desc: "Baseado em pesquisa de usuário e análise de dados, o projeto resultou em uma experiência mais intuitiva e eficiente para os usuários.",
    tags: [ "Web", "Design System", "Ergonomia Digital", "Figma", "Redesign"],
    category: "Sistema",
    color: "#7A2486",
    emoji: "✅",
    year: "2025",
    role: "Design System Lead",
    duration: "4 meses",
    team: "3 pessoas",
    overview: "A fintech tinha 3 produtos (app, web e painel admin) com inconsistências visuais severas. Cada time de produto criava componentes do zero, gerando retrabalho e inconsistência na experiência do usuário.",
    problem: "Como criar um design system que unifique 3 produtos distintos, seja adotado pelos times de design e engenharia, e escale com o crescimento da empresa sem se tornar um gargalo?",
    solution: "Construímos um design system orientado a tokens com Figma como fonte da verdade, documentação no Storybook e um processo de governança com contribuições da comunidade interna.",
    process: [
      { step: "01", title: "Auditoria", desc: "Inventário visual completo: 847 componentes únicos identificados em 3 produtos.", icon: "🔬" },
      { step: "02", title: "Fundação", desc: "Definição de tokens de cor, tipografia, espaçamento e elevação com sistema de nomenclatura semântica.", icon: "🏛️" },
      { step: "03", title: "Componentização", desc: "42 componentes atômicos + 28 componentes moleculares seguindo Atomic Design.", icon: "⚛️" },
      { step: "04", title: "Documentação", desc: "Storybook com exemplos interativos, props documentadas e guias de uso para cada componente.", icon: "📖" },
      { step: "05", title: "Adoção", desc: "Workshop de 2 dias com times de design e engenharia. Office hours semanais por 3 meses.", icon: "🤝" },
      { step: "06", title: "Governança", desc: "Criação do processo de RFC (Request for Component) para contribuições e ciclos de versão.", icon: "🗳️" },
    ],
    metrics: [
      { value: "–65%", label: "Tempo de design", sub: "por feature nova" },
      { value: "42→1", label: "Versões de botão", sub: "padronizadas para 1 sistema" },
      { value: "100%", label: "Adoção pelos times", sub: "em 6 meses" },
      { value: "3x", label: "Velocidade de entrega", sub: "de novos componentes" },
    ],
    stakeholders: ["CTO e CPO", "Times de Produto (3 times)", "Engenheiros Frontend", "QA e Acessibilidade", "Marketing e Brand"],
    methodologies: ["Atomic Design", "Design Tokens", "Storybook", "Versionamento Semântico", "Design Critique", "RFC Process"],
    gallery: ["#FABB92", "#FFCA8C", "#F5CEC7", "#FAF5F0", "#FABB92", "#FFCA8C"],
    research: "Realizamos uma auditoria visual completa dos 3 produtos da fintech, catalogando 847 componentes únicos. Entrevistamos designers e engenheiros de cada time para entender como criavam componentes, quais eram as maiores dores de consistência e o que esperavam de um design system centralizado.",
    researchInsights: [
      { title: "847 componentes únicos", detail: "Três produtos tinham centenas de variações duplicadas — 42 versões diferentes de botão foram encontradas." },
      { title: "Retrabalho constante", detail: "Cada time recriava componentes do zero, gastando em média 30% do tempo de design em trabalho repetitivo." },
      { title: "Inconsistência na UX", detail: "Usuários que navegavam entre produtos percebiam interfaces diferentes para as mesmas ações, gerando confusão." },
      { title: "Falta de documentação", detail: "Nenhum componente tinha documentação de uso, levando a implementações incorretas pela engenharia." },
    ],
    personas: [
      { name: "Carla", age: "31 anos", role: "Persona Principal", desc: "Product Designer sênior. Precisa de componentes prontos e documentados para focar em problemas de negócio ao invés de reinventar padrões visuais." },
      { name: "Lucas", age: "27 anos", role: "Engenheiro Frontend", desc: "Implementa as interfaces e precisa de especificações claras, tokens consistentes e componentes reutilizáveis em código." },
      { name: "Fernanda", age: "35 anos", role: "Head de Produto", desc: "Precisa garantir que a experiência seja consistente entre todos os produtos para fortalecer a marca e reduzir custos." },
    ],
    designPrinciples: [
      { title: "Token-first", desc: "Toda decisão visual começa pelos tokens — cores, tipografia e espaçamento são definidos semanticamente antes de qualquer componente." },
      { title: "Composabilidade", desc: "Componentes atômicos se combinam em moléculas e organismos, permitindo flexibilidade sem perder consistência." },
      { title: "Governança aberta", desc: "O processo de RFC permite que qualquer membro do time proponha novos componentes, com critérios claros de aprovação." },
      { title: "Documentação viva", desc: "Cada componente no Storybook inclui exemplos interativos, variantes, props e guias de quando usar (e quando não usar)." },
    ],
    learnings: [
      "Um design system não é um projeto com fim — é um produto vivo que precisa de manutenção, governança e evolução contínua.",
      "A adoção depende mais de relacionamento e suporte do que de qualidade técnica. Office hours semanais foram cruciais.",
      "Começar pelos tokens (não pelos componentes) garantiu que a fundação fosse sólida antes de construir em cima.",
      "O maior desafio não foi criar o sistema — foi convencer os times a abandonar seus componentes locais e adotar o compartilhado.",
    ],
    sprints: [
      {
        label: "01. AUDITORIA",
        title: "Mapeando o Caos Visual",
        subtitle: "Inventário visual completo dos 3 produtos para entender a dimensão do problema de inconsistência.",
        sections: [
          { type: "text", title: "O Inventário", text: "Catalogamos todos os componentes existentes nos 3 produtos da fintech. O resultado foi alarmante: 847 componentes únicos, com 42 versões diferentes de botão e nenhuma documentação de uso. Cada time recriava padrões do zero." },
          { type: "bullets", title: "Principais Achados", items: [
            "42 versões diferentes de botão encontradas entre os 3 produtos",
            "Nenhum componente tinha documentação de uso ou especificação técnica",
            "30% do tempo de design era gasto em trabalho repetitivo — recriando componentes",
            "Usuários percebiam interfaces diferentes para as mesmas ações entre produtos",
          ]},
          { type: "cards", title: "Categorias de Inconsistência", cards: [
            { icon: "🎨", title: "Cores", desc: "34 tons de azul diferentes usados como 'cor primária' entre os produtos." },
            { icon: "🔤", title: "Tipografia", desc: "3 famílias tipográficas diferentes, com 18 variações de tamanho sem padrão." },
            { icon: "📐", title: "Espaçamento", desc: "Nenhum sistema de grid ou escala de espaçamento — valores arbitrários em cada tela." },
          ]},
        ],
      },
      {
        label: "02. FUNDAÇÃO",
        title: "Construindo a Base",
        subtitle: "Definição de tokens semânticos como fundação do sistema — cores, tipografia, espaçamento e elevação.",
        sections: [
          { type: "text", title: "Design Tokens", text: "Optamos por uma abordagem token-first: toda decisão visual começa pelos tokens antes de qualquer componente. Definimos tokens primitivos (valores brutos) e semânticos (contextuais) para cor, tipografia, espaçamento e elevação." },
          { type: "bullets", title: "Decisões Arquiteturais", items: [
            "Tokens primitivos → semânticos: --blue-500 vira --color-action-primary",
            "Escala tipográfica de 8 tamanhos cobrindo 100% dos casos de uso",
            "Sistema de espaçamento em múltiplos de 4px (4, 8, 12, 16, 24, 32, 48, 64)",
            "Figma como fonte da verdade com sincronização automática para código",
          ]},
          { type: "quote", text: "\"Quando você acerta os tokens, os componentes quase se constroem sozinhos.\" — Feedback do time de engenharia após adoção" },
        ],
      },
      {
        label: "03. COMPONENTIZAÇÃO",
        title: "Do Átomo ao Organismo",
        subtitle: "42 componentes atômicos + 28 moleculares seguindo Atomic Design com documentação completa.",
        sections: [
          { type: "text", title: "Atomic Design na Prática", text: "Seguimos Atomic Design para organizar a componentização: átomos (botão, input, badge), moléculas (campo de formulário, card), e organismos (header, sidebar). Cada componente foi construído com variants, estados e propriedades documentadas." },
          { type: "cards", title: "Estrutura de Componentes", cards: [
            { icon: "⚛️", title: "42 Átomos", desc: "Botões, inputs, badges, ícones, tooltips — os blocos fundamentais do sistema." },
            { icon: "🧬", title: "28 Moléculas", desc: "Cards, campos de formulário, menus — combinações de átomos com lógica própria." },
            { icon: "🏗️", title: "12 Organismos", desc: "Headers, sidebars, modais — componentes complexos compostos por moléculas." },
          ]},
          { type: "bullets", title: "Critérios de Componentização", items: [
            "Cada componente deve ser usado em pelo menos 2 dos 3 produtos para justificar sua inclusão",
            "Variants cobrem todos os estados: default, hover, active, disabled, error, loading",
            "Props documentadas com tipos TypeScript e valores padrão",
            "Exemplos de uso correto e incorreto para cada componente",
          ]},
        ],
      },
      {
        label: "04. DOCUMENTAÇÃO",
        title: "Tornando o Sistema Vivo",
        subtitle: "Storybook com exemplos interativos, props documentadas e guias de uso para cada componente.",
        sections: [
          { type: "text", title: "Storybook como Hub Central", text: "Implementamos o Storybook como hub central de documentação do design system. Cada componente tem sua própria página com exemplos interativos, todas as props documentadas, guias de quando usar (e quando não usar), e código pronto para copiar." },
          { type: "bullets", title: "Estrutura da Documentação", items: [
            "Overview com propósito e contexto de uso do componente",
            "Playground interativo com todas as props ajustáveis",
            "Tabela de props com tipos, valores padrão e descrições",
            "Exemplos de composição: como combinar com outros componentes",
            "Do's and Don'ts visuais para cada componente",
            "Changelog com histórico de mudanças e versões",
          ]},
          { type: "cards", title: "Métricas da Documentação", cards: [
            { icon: "📖", title: "70 páginas", desc: "Documentação completa cobrindo todos os componentes, tokens e padrões do sistema." },
            { icon: "🎮", title: "42 playgrounds", desc: "Cada componente atômico tem um playground interativo para experimentação." },
            { icon: "✅", title: "100% tipado", desc: "Todas as props com TypeScript — erros de uso são capturados em tempo de desenvolvimento." },
          ]},
        ],
      },
      {
        label: "05. ADOÇÃO",
        title: "Conquistando os Times",
        subtitle: "Workshop de 2 dias com times de design e engenharia, seguido de office hours semanais por 3 meses.",
        sections: [
          { type: "text", title: "Estratégia de Adoção", text: "A adoção foi o maior desafio do projeto. Cada time tinha seus próprios componentes e resistência natural a mudanças. Planejamos uma estratégia em 3 fases: Workshop de onboarding → Office Hours semanais → Champions internos em cada time." },
          { type: "cards", title: "Processo de Adoção", cards: [
            { icon: "🎓", title: "Workshop de 2 dias", desc: "Treinamento prático com todos os times de design e engenharia para onboarding no sistema." },
            { icon: "☕", title: "Office Hours", desc: "Sessões semanais de suporte por 3 meses — cruciais para resolver dúvidas e resistências." },
            { icon: "🌟", title: "Champions", desc: "Um designer e um engenheiro de cada time como embaixadores internos do sistema." },
            { icon: "📊", title: "Métricas de adoção", desc: "Dashboard de adoção tracking uso de componentes do DS vs. componentes locais por time." },
          ]},
          { type: "bullets", title: "Resultados da Adoção", items: [
            "100% dos 3 times adotaram o design system em 6 meses",
            "Tempo médio de design por feature nova reduziu em 65%",
            "Zero componentes locais criados nos últimos 2 meses do período de adoção",
            "Office hours semanais foram citadas como fator crucial por 100% dos times",
          ]},
          { type: "quote", text: "\"A adoção depende mais de relacionamento e suporte do que de qualidade técnica.\" — Aprendizado-chave do projeto" },
        ],
      },
      {
        label: "06. GOVERNANÇA",
        title: "Sustentando a Evolução",
        subtitle: "Criação do processo de RFC (Request for Component) para contribuições e ciclos de versão.",
        sections: [
          { type: "text", title: "RFC — Request for Component", text: "Para garantir que o design system evolua sem perder consistência, criamos o processo de RFC: qualquer membro de qualquer time pode propor novos componentes ou modificações através de um template estruturado. As propostas passam por revisão do comitê de design system e, se aprovadas, entram no backlog de implementação." },
          { type: "bullets", title: "Processo de RFC", items: [
            "Template padronizado com justificativa de negócio, casos de uso e proposta visual",
            "Revisão pelo comitê (1 designer + 1 engenheiro + 1 product) em até 5 dias úteis",
            "Critérios claros: usado em 2+ produtos, não duplica componente existente, segue tokens",
            "Versionamento semântico: major (breaking), minor (novas features), patch (fixes)",
            "Release notes mensais comunicando todas as mudanças para os times",
          ]},
          { type: "cards", title: "Impacto da Governança", cards: [
            { icon: "🗳️", title: "23 RFCs recebidas", desc: "Em 3 meses de operação, 23 propostas de novos componentes foram submetidas pelos times." },
            { icon: "✅", title: "15 aprovadas", desc: "15 componentes novos incorporados ao sistema seguindo o processo de governança." },
            { icon: "3x", title: "Velocidade", desc: "Velocidade de entrega de novos componentes triplicou com o processo estruturado." },
          ]},
        ],
      },
    ],
  },
  {
    id: "Filtro Aqualis",
    title: "Filtro Aqualis",
    subtitle: "Redesign com foco em engajamento e impacto social",
    desc: "Baseado na Biomimética, o Filtro Aqualis é um sistema de purificação de água inspirado na estrutura dos filtros naturais encontrados em manguezais. O design combina eficiência, sustentabilidade e estética orgânica para oferecer uma solução acessível e de baixo impacto ambiental para comunidades com acesso limitado à água potável.",
    tags: ["Research", "UX", "Testes A/B"],
    category: "Web",
    color: "#C7C19D",
    emoji: "🌿",
    year: "2023",
    role: "UX Researcher & Designer",
    duration: "5 meses",
    team: "2 pessoas",
    overview: "A plataforma tinha 8.000 cadastros mas apenas 12% de ativação — usuários se cadastravam e nunca realizavam uma ação voluntária. O gap entre intenção e ação era o principal desafio.",
    problem: "Como transformar visitantes que têm boa vontade mas pouco tempo em voluntários ativos e recorrentes — removendo fricções e criando motivadores intrínsecos na experiência digital?",
    solution: "Redesenhamos o fluxo de match entre voluntários e causas com algoritmo de compatibilidade, sistema de progresso gamificado e lembretes contextuais baseados na disponibilidade do usuário.",
    process: [
      { step: "01", title: "Research Qualitativo", desc: "30 entrevistas com voluntários ativos, inativos e nunca-ativados para entender barreiras reais.", icon: "🎙️" },
      { step: "02", title: "Análise de Funil", desc: "Mapeamento de drop-off com Hotjar e Google Analytics: 78% do abandono no step de escolha de causa.", icon: "📉" },
      { step: "03", title: "Ideação", desc: "How Might We + Crazy 8s com os stakeholders. 3 conceitos prototipados rapidamente.", icon: "✏️" },
      { step: "04", title: "Teste de Conceito", desc: "Testes de usabilidade com 15 usuários por conceito. Conceito 2 venceu com 87% de preferência.", icon: "🏆" },
      { step: "05", title: "Refinamento", desc: "2 rodadas de iteração baseadas nos feedbacks. Foco em clareza, confiança e momentum.", icon: "🔄" },
      { step: "06", title: "Lançamento", desc: "Roll-out gradual para 20% → 50% → 100% da base com monitoramento em tempo real.", icon: "🎯" },
    ],
    metrics: [
      { value: "+60%", label: "Engajamento geral", sub: "usuários ativos mensais" },
      { value: "12→31%", label: "Taxa de ativação", sub: "cadastro → primeira ação" },
      { value: "+3.2k", label: "Novos voluntários", sub: "ativos em 90 dias" },
      { value: "–44%", label: "Tempo para match", sub: "de 8min para 4.5min" },
    ],
    stakeholders: ["ONG Parceiras (12)", "Coordenadores de Voluntariado", "Time de Produto", "Investidores de Impacto", "Voluntários Beta"],
    methodologies: ["Research Qualitativo", "Funil de Conversão", "Testes A/B", "Gamification Design", "Behavioral Design", "Growth Design"],
    gallery: ["#C7C19D", "#A4BDA8", "#FFCA8C", "#FAF5F0", "#C7C19D", "#A4BDA8"],
    research: "Conduzimos 30 entrevistas em profundidade com três perfis de voluntários: ativos (participam regularmente), inativos (se cadastraram mas pararam) e nunca-ativados (se cadastraram e nunca realizaram nenhuma ação). Complementamos com análise de funil usando Hotjar e Google Analytics para identificar onde exatamente o abandono acontecia.",
    researchInsights: [
      { title: "78% de abandono na escolha", detail: "O step de escolha de causa concentrava a maior taxa de abandono — excesso de opções e falta de orientação travavam os usuários." },
      { title: "Barreira do tempo", detail: "A maioria dos inativos não parou por falta de vontade, mas por perceber que as oportunidades exigiam mais tempo do que tinham." },
      { title: "Falta de feedback", detail: "Voluntários ativos relataram que nunca recebiam retorno sobre o impacto de suas ações, reduzindo a motivação para continuar." },
      { title: "Confiança como fator", detail: "Muitos nunca-ativados não confiavam nas ONGs listadas — faltavam avaliações, depoimentos e transparência sobre como as doações eram usadas." },
    ],
    personas: [
      { name: "Beatriz", age: "26 anos", role: "Persona Principal", desc: "Profissional de marketing com pouco tempo livre. Quer fazer voluntariado mas se sente sobrecarregada pelas opções e não sabe por onde começar." },
      { name: "Renato", age: "34 anos", role: "Voluntário inativo", desc: "Se cadastrou com entusiasmo mas nunca encontrou uma causa que combinasse com suas habilidades e disponibilidade." },
      { name: "Coordenadora Vera", age: "48 anos", role: "ONG parceira", desc: "Precisa de voluntários comprometidos e recorrentes, não de cadastros que nunca se convertem em ação." },
    ],
    designPrinciples: [
      { title: "Match inteligente", desc: "Algoritmo de compatibilidade conecta voluntários a causas com base em habilidades, localização e disponibilidade de horário." },
      { title: "Momentum", desc: "Micro-interações e progresso gamificado mantêm o engajamento — cada pequena ação é celebrada e visível." },
      { title: "Confiança progressiva", desc: "Avaliações, depoimentos e métricas de impacto constroem confiança gradualmente, sem exigir um leap of faith inicial." },
      { title: "Lembretes contextuais", desc: "Notificações baseadas na disponibilidade declarada do usuário, não em horários arbitrários." },
    ],
    learnings: [
      "O gap entre intenção e ação é um problema de design, não de motivação — as pessoas querem ajudar, mas a fricção é grande demais.",
      "Gamification funciona quando reforça motivadores intrínsecos (propósito, progresso, pertencimento), não quando é superficial.",
      "Roll-out gradual (20% → 50% → 100%) permitiu identificar e corrigir problemas antes de impactar toda a base.",
      "Testes de conceito com protótipos rápidos economizaram semanas de desenvolvimento ao validar a direção antes de investir em código.",
    ],
    sprints: [
      {
        label: "01. PESQUISA QUALITATIVA",
        title: "Ouvindo Quem Quer Ajudar",
        subtitle: "30 entrevistas em profundidade com três perfis de voluntários para entender barreiras reais à ação.",
        sections: [
          { type: "text", title: "Três Perfis, Três Histórias", text: "Entrevistamos voluntários ativos (participam regularmente), inativos (pararam após cadastro) e nunca-ativados (nunca realizaram nenhuma ação). Cada perfil revelou barreiras diferentes — mas todos compartilhavam uma coisa: a vontade genuína de ajudar." },
          { type: "bullets", title: "Barreiras por Perfil", items: [
            "Ativos: falta de feedback sobre impacto reduzia motivação para continuar",
            "Inativos: oportunidades exigiam mais tempo do que tinham disponível",
            "Nunca-ativados: excesso de opções e falta de orientação travavam a primeira ação",
            "Todos: falta de confiança nas ONGs listadas — sem avaliações ou transparência",
          ]},
          { type: "quote", text: "\"Eu quero ajudar, mas quando abro o app e vejo 200 causas, eu travo. Não sei por onde começar.\" — Beatriz, 26 anos" },
        ],
      },
      {
        label: "02. ANÁLISE DE FUNIL",
        title: "Onde o Abandono Acontece",
        subtitle: "Mapeamento de drop-off com Hotjar e Google Analytics para identificar os gargalos do funil de conversão.",
        sections: [
          { type: "text", title: "O Funil Quebrado", text: "A análise de funil revelou que 78% do abandono acontecia no step de escolha de causa — o paradoxo da escolha em ação. Complementamos os dados quantitativos com gravações de sessões no Hotjar para entender o comportamento real dos usuários na tela de escolha." },
          { type: "bullets", title: "Dados do Funil", items: [
            "Cadastro → Perfil completo: 64% de conversão (ok)",
            "Perfil → Escolha de causa: apenas 22% de conversão (gargalo crítico)",
            "Escolha de causa → Primeira ação: 89% de conversão (ok após a escolha)",
            "Tempo médio na tela de escolha: 8 minutos (vs. 2 min em telas anteriores)",
          ]},
          { type: "cards", title: "Padrões Observados no Hotjar", cards: [
            { icon: "🔄", title: "Scroll infinito", desc: "Usuários rolavam a lista de causas várias vezes sem clicar — paralisados pela quantidade de opções." },
            { icon: "↩️", title: "Volta ao início", desc: "34% dos usuários voltavam ao topo da lista após rolar até o final — sinal claro de indecisão." },
            { icon: "❌", title: "Abandono silencioso", desc: "A maioria saía sem interagir com nenhuma causa — simplesmente fechavam o app." },
          ]},
        ],
      },
      {
        label: "03. IDEAÇÃO",
        title: "Gerando Soluções Criativas",
        subtitle: "How Might We + Crazy 8s com stakeholders para gerar conceitos que resolvam o paradoxo da escolha.",
        sections: [
          { type: "text", title: "Sessão de Ideação", text: "Reunimos o time de produto, coordenadores de voluntariado e representantes das ONGs parceiras para uma sessão de ideação estruturada. Usamos How Might We para reframing do problema e Crazy 8s para gerar soluções rapidamente." },
          { type: "cards", title: "3 Conceitos Prototipados", cards: [
            { icon: "🎯", title: "Match por quiz", desc: "5 perguntas rápidas para sugerir causas compatíveis com perfil, habilidades e disponibilidade." },
            { icon: "🎮", title: "Jornada gamificada", desc: "Progresso visual com badges, streaks e impacto acumulado para manter engajamento." },
            { icon: "👥", title: "Onboarding social", desc: "Ver o que amigos apoiam e começar por causas validadas pela rede de confiança." },
          ]},
          { type: "quote", text: "\"E se ao invés de mostrar 200 causas, perguntássemos 5 coisas e mostrássemos 3 causas perfeitas?\" — Insight da sessão de How Might We" },
        ],
      },
      {
        label: "04. TESTE DE CONCEITO",
        title: "Validando com Usuários Reais",
        subtitle: "Testes de usabilidade com 15 usuários por conceito para identificar a solução mais promissora.",
        sections: [
          { type: "text", title: "Protocolo de Testes", text: "Testamos os 3 conceitos prototipados com 15 usuários cada, incluindo representantes dos 3 perfis identificados na pesquisa (ativos, inativos e nunca-ativados). Cada sessão incluiu tarefas específicas, think-aloud protocol e questionário pós-teste." },
          { type: "bullets", title: "Resultado dos Testes de Conceito", items: [
            "Conceito 2 (Match + Gamification) venceu com 87% de preferência geral",
            "Quiz de 5 perguntas reduziu tempo de match de 8min para 2min no protótipo",
            "Elemento social foi incorporado como feature secundária ao conceito vencedor",
            "Nunca-ativados tiveram a maior melhora: 0% → 73% de conclusão da primeira ação no protótipo",
          ]},
          { type: "cards", title: "Feedback por Perfil", cards: [
            { icon: "🟢", title: "Ativos", desc: "Adoraram o sistema de progresso e badges — 'finalmente vou poder ver meu impacto acumulado'." },
            { icon: "🟡", title: "Inativos", desc: "O filtro por disponibilidade resolveu a principal barreira — 'agora sim consigo encaixar na rotina'." },
            { icon: "🔴", title: "Nunca-ativados", desc: "O quiz eliminou a paralisia de escolha — 'em 2 minutos já tinha uma causa que faz sentido pra mim'." },
          ]},
        ],
      },
      {
        label: "05. REFINAMENTO",
        title: "Iteração com Propósito",
        subtitle: "2 rodadas de iteração baseadas nos feedbacks, com foco em clareza, confiança e momentum.",
        sections: [
          { type: "text", title: "Foco nas 3 Dimensões", text: "Após os testes de conceito, realizamos 2 rodadas de refinamento focadas em três dimensões: clareza (simplificar textos e reduzir carga cognitiva), confiança (adicionar avaliações, depoimentos e métricas de impacto das ONGs) e momentum (celebrar cada micro-ação do voluntário para manter engajamento)." },
          { type: "cards", title: "Features Refinadas", cards: [
            { icon: "🧠", title: "Match inteligente", desc: "Algoritmo conecta voluntário a causa com base em habilidades, localização e disponibilidade." },
            { icon: "🏅", title: "Sistema de progresso", desc: "Badges, streaks e impacto acumulado visível — cada ação pequena é celebrada." },
            { icon: "⭐", title: "Trust score", desc: "ONGs com avaliações, depoimentos e métricas de impacto para construir confiança." },
            { icon: "🔔", title: "Lembretes contextuais", desc: "Notificações baseadas na disponibilidade declarada, não em horários arbitrários." },
          ]},
          { type: "bullets", title: "Mudanças da Iteração 2", items: [
            "Textos reduzidos em 40% — cada tela comunica uma ideia principal",
            "Trust score das ONGs visível já no card de resultado do match",
            "Animação de celebração após primeira ação concluída",
            "Onboarding de 5 telas reduzido para 3 com informação progressiva",
          ]},
        ],
      },
      {
        label: "06. LANÇAMENTO",
        title: "Roll-out Gradual",
        subtitle: "Lançamento progressivo para 20% → 50% → 100% da base com monitoramento em tempo real.",
        sections: [
          { type: "text", title: "Estratégia de Lançamento", text: "Optamos por um roll-out gradual em 3 fases para minimizar riscos: 20% da base por 2 semanas, depois 50% por mais 2 semanas, e finalmente 100%. Cada fase era monitorada em tempo real com dashboards de métricas-chave e canais de feedback direto com os usuários." },
          { type: "cards", title: "Resultados Finais", cards: [
            { icon: "📈", title: "+60% engajamento", desc: "Usuários ativos mensais cresceram 60% nos primeiros 90 dias após lançamento completo." },
            { icon: "🎯", title: "12% → 31% ativação", desc: "Taxa de ativação (cadastro → primeira ação) mais que dobrou com o novo fluxo." },
            { icon: "👥", title: "+3.2k voluntários", desc: "3.200 novos voluntários ativos nos primeiros 90 dias de operação." },
            { icon: "⏱️", title: "–44% tempo de match", desc: "Tempo para encontrar uma causa compatível caiu de 8min para 4.5min." },
          ]},
          { type: "quote", text: "\"Pela primeira vez eu senti que o app entendeu o que eu quero e quando eu posso ajudar.\" — Voluntária durante beta test" },
        ],
      },
    ],
  },
{
  id: "novo-projeto",
  title: "GestUS",
  subtitle: "Descrição curta",
  desc: "Descrição longa",
  tags: ["Tag1", "Tag2"],
  category: "Categoria",
  color: "#HEXCOLOR",
  emoji: "🚀",
  year: "2024",
  role: "Seu Papel",
  duration: "Duração",
  team: "Equipe",
  overview: "Visão geral",
  problem: "Problema",
  solution: "Solução",
  process: [
    { step: "01", title: "Etapa 1", desc: "Descrição", icon: "🔍" },
    // Adicione mais etapas
  ],
  metrics: [
    { value: "Valor", label: "Label", sub: "Sub" },
    // Adicione mais métricas
  ],
  stakeholders: ["Stakeholder1"],
  methodologies: ["Metodologia1"],
  gallery: ["#COR1", "#COR2"],
}
 
];
