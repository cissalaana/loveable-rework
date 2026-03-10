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
}

export const PROJECTS: Project[] = [
  {
    id: "guardia",
    title: "Guardiã",
    subtitle: "Uma solução ubíqua para aumentar a segurança de mulheres no campus da UFPE",
    desc: "Solução híbrida com app móvel e dispositivo vestível projetados para aumentar a segurança de mulheres no campus da UFPE, permitindo acionamento de emergência em menos de 2 segundos.",
    tags: ["UX Research", "UX/UI", "Mobile", "IoT", "Service Design"],
    category: "Mobile",
    color: "#EBA5A5",
    emoji: "🔥",
    year: "2024",
    role: "UX/UI Designer",
    duration: "4 meses",
    team: "5 pessoas",
    overview: "A Guardiã é uma solução híbrida composta por um aplicativo móvel e um dispositivo vestível, um botão de pânico discreto que pode ser usado como pulseira, colar, choker ou fixado à capinha do celular. O sistema permite que usuárias acionem ajuda de forma rápida, discreta e sem depender do celular. Projeto desenvolvido na disciplina de Design de Interfaces Ubíquas (UFPE), alinhado com a ODS 5 da ONU.",
    problem: "Mulheres que circulam pelo campus da UFPE enfrentam diariamente situações de insegurança, especialmente em áreas com pouca iluminação e baixa movimentação. 85,1% das estudantes não se sentem seguras com as medidas existentes, e 50% das situações de vulnerabilidade acontecem fora dos centros — em caminhos e áreas de transição entre prédios.",
    solution: "Criamos uma solução híbrida com dispositivo vestível (botão de pânico com duplo clique ou comando de voz) e app com rotas compartilhadas em tempo real, mapa de segurança coletivo, rotas recomendadas baseadas em dados de ocorrências e botão de emergência que notifica seguranças próximos com localização em tempo real.",
    process: [
      { step: "01", title: "Pesquisa", desc: "Questionário com 74 respondentes investigando perfil, locomoção, percepção de segurança e satisfação com medidas existentes no campus.", icon: "🔍" },
      { step: "02", title: "Definição", desc: "Criação de persona principal (Maria Cecília) e 3 personas secundárias do ecossistema. Mapeamento da jornada com momentos críticos de insegurança.", icon: "🗺️" },
      { step: "03", title: "Ideação", desc: "Brainstorming, Crazy 8s e análise de similares. Priorização de funcionalidades em alta e média prioridade.", icon: "💡" },
      { step: "04", title: "Design Ubíquo", desc: "Aplicação dos princípios de UUI: desatenção, fluxo cognitivo, sem modelo, medo de interação e padrões de uso.", icon: "🌐" },
      { step: "05", title: "Prototipagem", desc: "Protótipo de alta fidelidade no Figma com fluxos completos e protótipo conceitual do dispositivo físico em Blender.", icon: "🎨" },
      { step: "06", title: "Identidade Visual", desc: "Marca Guardiã com logo (mão + chama), paleta quente com fundo creme acolhedor e tom de voz direto, humano e encorajador.", icon: "✨" },
    ],
    metrics: [
      { value: "74", label: "Respondentes na pesquisa", sub: "estudantes de diferentes cursos" },
      { value: "85,1%", label: "Se sentem inseguras", sub: "com medidas atuais do campus" },
      { value: "97,3%", label: "Se locomovem a pé", sub: "dentro da universidade" },
      { value: "<2s", label: "Tempo de acionamento", sub: "emergência via dispositivo" },
    ],
    stakeholders: ["Estudantes do campus (74 respondentes)", "Seguranças do campus", "Coordenadores de curso", "Técnicos de câmeras da UFPE", "Equipe de projeto (5 integrantes)"],
    methodologies: ["Design Thinking", "Pesquisa Quantitativa e Qualitativa", "Personas e Jornada do Usuário", "Crazy 8s", "Design de Interfaces Ubíquas (UUI)", "Prototipagem em Alta Fidelidade"],
    gallery: ["#EBA5A5", "#F5CEC7", "#FFCA8C", "#FAF5F0", "#EBA5A5", "#F5CEC7"],
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
  },
  {
    id: "Redesign Letterboxd",
    title: "Redesign Letterboxd",
    subtitle: "Redesign do Letterboxd, a rede social de cinema, focado em melhorar a experiência de descoberta e engajamento dos usuários",
    desc: "Criação de um dashboard de analytics para gestão de dados educacionais em escolas públicas, guiado por dados reais coletados junto a gestores e professores.",
    tags: ["Redesign", "UX/UI", "Pesquisa com Usuários", "Métricas de Sucesso"],
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
  },
  {
    id: "Redesign Craigslist",
    title: "Redesign Craigslist",
    subtitle: "Redesign completo do site de classificados mais icônico da internet, focado em usabilidade e modernização visual",
    desc: "Baseado em pesquisa de usuário e análise de dados, o projeto resultou em uma experiência mais intuitiva e eficiente para os usuários.",
    tags: ["Design System", "Ergonomia Digital", "Figma", "Redesign"],
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
  },
  {
    id: "Filtro Aqualis",
    title: "Filtro Aqualis",
    subtitle: "Redesign com foco em engajamento e impacto social",
    desc: "Pesquisa e redesign de uma plataforma de voluntariado, resultando em 60% mais engajamento dos usuários e +3.200 voluntários ativos.",
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
