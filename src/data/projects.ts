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
}

export const PROJECTS: Project[] = [
  {
    id: "saude-mental",
    title: "Saúde Mental App",
    subtitle: "Redesign centrado em acessibilidade e bem-estar emocional",
    desc: "Redesign completo de um aplicativo de saúde mental com foco em acessibilidade, bem-estar emocional e jornadas personalizadas para diferentes perfis de usuário.",
    tags: ["UX/UI", "Research", "Figma"],
    category: "Mobile",
    color: "#EBA5A5",
    emoji: "🌸",
    year: "2024",
    role: "Lead Designer",
    duration: "4 meses",
    team: "3 pessoas",
    overview: "O aplicativo existente tinha uma taxa de abandono de 72% nos primeiros 7 dias. Usuários relatavam sensação de sobrecarga e falta de conexão emocional com a interface.",
    problem: "Como redesenhar uma experiência digital de saúde mental que seja acolhedora, acessível e personalizada o suficiente para manter o engajamento a longo prazo — sem causar mais ansiedade?",
    solution: "Criamos um sistema de onboarding empático com check-in diário de humor, jornadas adaptativas baseadas no estado emocional do usuário e um design system com alto contraste e suporte a leitores de tela.",
    process: [
      { step: "01", title: "Discovery", desc: "25 entrevistas com usuários, análise de dados de comportamento e benchmarking de 12 apps concorrentes.", icon: "🔍" },
      { step: "02", title: "Research", desc: "Síntese com affinity mapping, criação de 4 personas e mapeamento de jornadas críticas.", icon: "🗺️" },
      { step: "03", title: "Ideação", desc: "3 rodadas de design sprint com stakeholders, wireframes de baixa fidelidade e votação por dot voting.", icon: "💡" },
      { step: "04", title: "Prototipagem", desc: "Protótipo de alta fidelidade no Figma com 48 telas, componentes reutilizáveis e estados de interação.", icon: "🎨" },
      { step: "05", title: "Testes", desc: "Testes de usabilidade com 18 participantes, incluindo pessoas com daltonismo e usuários de leitor de tela.", icon: "🧪" },
      { step: "06", title: "Handoff", desc: "Design system completo com tokens, documentação de acessibilidade e guia de implementação para devs.", icon: "🚀" },
    ],
    metrics: [
      { value: "–68%", label: "Taxa de abandono", sub: "de 72% para 23%" },
      { value: "4.8★", label: "Nota na App Store", sub: "era 3.1 antes do redesign" },
      { value: "+210%", label: "Sessões por semana", sub: "usuários mais engajados" },
      { value: "AA", label: "WCAG compliance", sub: "100% das telas acessíveis" },
    ],
    stakeholders: ["Product Manager", "Psicólogos Consultores", "Engenheiros iOS/Android", "Equipe de Marketing", "Usuários Beta (18 pessoas)"],
    methodologies: ["Design Thinking", "Jobs-to-be-Done", "Atomic Design", "Testes de Usabilidade Moderados", "Design Inclusivo / WCAG 2.1"],
    gallery: ["#F5CEC7", "#EBA5A5", "#FFCA8C", "#FAF5F0", "#EBA5A5", "#F5CEC7"],
  },
  {
    id: "dashboard-educacional",
    title: "Dashboard Educacional",
    subtitle: "Analytics de dados para gestão de escolas públicas",
    desc: "Criação de um dashboard de analytics para gestão de dados educacionais em escolas públicas, guiado por dados reais coletados junto a gestores e professores.",
    tags: ["Data Viz", "UX/UI", "Prototipagem"],
    category: "Web",
    color: "#A4BDA8",
    emoji: "📊",
    year: "2024",
    role: "UX Designer",
    duration: "6 meses",
    team: "5 pessoas",
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
  },
  {
    id: "design-system-fintech",
    title: "Design System Fintech",
    subtitle: "Sistema de design escalável para fintech de jovens adultos",
    desc: "Sistema de design escalável para uma fintech voltada para jovens adultos em início de carreira financeira — do zero ao handoff.",
    tags: ["Design System", "Tokens", "Figma"],
    category: "Sistema",
    color: "#FABB92",
    emoji: "🔧",
    year: "2023",
    role: "Design System Lead",
    duration: "8 meses",
    team: "4 pessoas",
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
  },
  {
    id: "plataforma-voluntariado",
    title: "Plataforma de Voluntariado",
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
  },
];
