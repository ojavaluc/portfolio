import { Icons } from "@/components/icons";
import { HomeIcon, BriefcaseIcon, GraduationCapIcon, MailIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import type { ComponentType } from "react";

type Skill = { name: string; icon?: ComponentType<{ className?: string }> };

const LINKEDIN = "https://www.linkedin.com/in/lucas-freitas-ba3113226";
const GITHUB = "https://github.com/ojavaluc";

const skills: Skill[] = [
  { name: "MikroTik RouterOS" },
  { name: "Zabbix" },
  { name: "Grafana" },
  { name: "The Dude" },
  { name: "OLT / GPON" },
  { name: "Python", icon: Python },
  { name: "Pandas" },
  { name: "OpenCV" },
  { name: "YOLOv8" },
  { name: "Flask" },
  { name: "JavaScript" },
  { name: "React", icon: ReactLight },
  { name: "Node.js", icon: Nodejs },
  { name: "Java", icon: Java },
  { name: "PostgreSQL", icon: Postgresql },
  { name: "SQLite" },
  { name: "Docker", icon: Docker },
  { name: "Linux" },
  { name: "Git" },
  { name: "FFmpeg" },
];

export const DATA = {
  name: "Lucas Freitas",
  fullName: "Lucas Alves de Freitas",
  initials: "LF",
  url: "https://lucasfullstack.com.br",
  location: "Minas Gerais, Brasil",
  role: "Supervisor de Suporte e Redes · Ciência de Dados (UFMS)",
  description:
    "Cuido de rede e de gente num provedor de internet. Escrevo Python e JavaScript para tirar trabalho repetido do caminho e estudo Ciência de Dados na UFMS.",
  summary: [
    "Comecei atendendo cliente no 0800 de um provedor de internet. De lá fui para o diagnóstico de rede, depois para o NOC, e hoje supervisiono a equipe de suporte e redes da Msolnet. Isso me deu uma visão de ponta a ponta: do roteador de borda até a pessoa do outro lado da linha que só quer a internet de volta.",
    "Fiz o CS50 de Harvard, concluí Análise e Desenvolvimento de Sistemas na Newton Paiva e estou no bacharelado em Ciência de Dados da UFMS. Uso isso no dia a dia para montar painéis, automatizar triagem e medir o que a operação faz.",
  ],
  avatarUrl: "/img/perfil-lucas.jpg",
  focus: [
    {
      title: "Redes e NOC",
      text: "MikroTik, OLTs, enlaces ópticos e wireless, monitoramento com Zabbix, Grafana e The Dude.",
    },
    {
      title: "Gestão e atendimento",
      text: "Equipe técnica, KPIs, SLA e TMA, escalonamento N1 → N2/N3 e campo.",
    },
    {
      title: "Código e dados",
      text: "Python, JavaScript e SQL para automação, APIs REST, análise com Pandas e visão computacional.",
    },
  ],
  skills,
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Início" },
    { href: "#work", icon: BriefcaseIcon, label: "Experiência" },
    { href: "#education", icon: GraduationCapIcon, label: "Formação" },
    { href: "#contact", icon: MailIcon, label: "Contato" },
  ],
  contact: {
    linkedin: LINKEDIN,
    github: GITHUB,
    social: [
      { name: "LinkedIn", url: LINKEDIN, icon: Icons.linkedin },
      { name: "GitHub", url: GITHUB, icon: Icons.github },
    ],
  },
  work: [
    {
      company: "Msolnet",
      subtitle: "Provedor de internet · Turmalina/MG",
      title: "Supervisor de Suporte e Redes",
      period: "Atual",
      description:
        "Lidero o suporte técnico e o monitoramento de rede (NOC). Acompanho SLA, TMA e qualidade e entro no técnico quando o problema pede.",
      highlights: [
        "Monitoramento e troubleshooting em MikroTik CCR/CRS, OLTs, switches e enlaces ópticos e wireless.",
        "Coordenação de incidentes que derrubam centenas ou milhares de clientes, junto com N2/N3, infraestrutura e campo até normalizar.",
        "Treinamento da equipe, distribuição de demanda e montagem de painéis e alertas no Zabbix e no Grafana.",
      ],
      tags: ["Liderança técnica", "KPIs e SLA", "MikroTik", "Zabbix", "Grafana", "Gestão de incidentes"],
    },
    {
      company: "Bizz Internet",
      subtitle: "Provedor de internet · Diamantina/MG",
      title: "Especialista em SAC e Suporte Técnico",
      period: "Anterior",
      description:
        "Atendimento e suporte técnico ao cliente final pelo 0800 e WhatsApp, com foco em resolver no primeiro contato.",
      highlights: [
        "Diagnóstico de rede óptica e Wi-Fi, configuração de ONUs e roteadores.",
        "Condução de casos sensíveis do começo ao fim, incluindo mediação de conflito.",
        "Fiz parte da equipe quando a Bizz foi indicada ao Prêmio Reclame AQUI, a primeira provedora do Vale do Jequitinhonha a chegar lá.",
      ],
      tags: ["Atendimento (CX)", "Troubleshooting", "FCR", "Prêmio Reclame AQUI"],
    },
  ],
  gallery: [
    {
      src: "/img/msolnet-noc-infraestrutura.jpg",
      alt: "Rack com roteadores MikroTik Cloud Core Router na Msolnet",
      title: "Core da rede na Msolnet",
      caption: "Roteadores MikroTik CCR, switches CRS 10G e distribuição óptica acompanhados pelo NOC.",
      fit: "cover",
    },
    {
      src: "/img/bizz-equipe-premio-ra.jpg",
      alt: "Equipe da Bizz Internet comemorando a indicação ao Prêmio Reclame AQUI",
      title: "Equipe Bizz · Prêmio Reclame AQUI",
      caption: "Indicação inédita para um provedor do Vale do Jequitinhonha.",
      fit: "cover",
    },
    {
      src: "/img/certificado-harvard-cs50.jpg",
      alt: "Certificado CS50x da Harvard University emitido para Lucas Alves de Freitas",
      title: "CS50x · Harvard",
      caption: "Certificado verificado, novembro de 2024.",
      fit: "contain",
    },
  ],
  education: [
    {
      school: "UFMS",
      href: "https://www.ufms.br",
      degree: "Bacharelado em Ciência de Dados · em andamento",
      period: "2026 – 2029",
    },
    {
      school: "Centro Universitário Newton Paiva",
      href: "https://www.newtonpaiva.br",
      degree: "Análise e Desenvolvimento de Sistemas",
      period: "2023 – 2026",
    },
    {
      school: "Harvard University · edX",
      href: "https://cs50.harvard.edu/x/",
      degree: "CS50x: Introduction to Computer Science",
      period: "2024",
    },
  ],
};
