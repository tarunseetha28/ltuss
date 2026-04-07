import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import advisoryVisual from "@/assets/advisory-visual.jpg";
import solutionsVisual from "@/assets/solutions-visual.jpg";
import staffingVisual from "@/assets/staffing-visual.jpg";
import {
  ArrowRight,
  Mail,
  Compass,
  Wrench,
  Users,
  CheckCircle2,
  MessageSquare,
  ClipboardList,
  GitBranch,
  Send,
  Shield,
  Target,
  Eye,
  Layers,
  Activity,
  GraduationCap,
  Building2,
  Briefcase,
  BarChart3,
  Cog,
  Database,
  Network,
  UserCheck,
  Search,
  FileCheck,
  Workflow,
  Zap,
  Globe,
  Award,
} from "lucide-react";

const MAILTO = "mailto:contact@ltuss.com";
const mailto = (subject: string) => `${MAILTO}?subject=${encodeURIComponent(subject)}`;

/* ─── HERO — Insight Global + Accenture ─── */
const Hero = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-foreground">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>

    <div className="container max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Advisory · Solutions · Staffing
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] mb-8 text-primary-foreground font-heading tracking-tight">
            LTUSS
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-lg md:text-xl text-primary-foreground/60 leading-relaxed max-w-xl mb-10 font-light">
            A structured multi-division platform designed to support advisory, operational enablement, and staffing needs across education and organisational ecosystems.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={mailto("General Inquiry")}
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all"
            >
              <Mail className="w-4 h-4" />
              Contact LTUSS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-xs text-primary-foreground/30 self-center">No forms. Just send a quick email.</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-primary-foreground/40">
              Platform in active rollout — Core services operational
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Right visual — Abstract geometric composition */}
      <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
        <FadeIn delay={0.25} direction="left">
          <div className="relative w-full max-w-md aspect-square">
            {/* Geometric shapes */}
            <motion.div
              className="absolute inset-8 border border-primary/20 rounded-2xl"
              animate={{ rotate: [0, 1, 0, -1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-16 bg-primary/5 backdrop-blur-sm rounded-xl border border-primary/10"
              animate={{ rotate: [0, -1, 0, 1, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-24 bg-primary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-heading">3</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-primary/60 mt-1">Divisions</div>
              </div>
            </div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── TRUST STRIP ─── */
const TrustStrip = () => (
  <div className="border-b border-border bg-background">
    <div className="container max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-6">
      {[
        { icon: Shield, label: "Structured Engagement" },
        { icon: MessageSquare, label: "Direct Advisory" },
        { icon: Layers, label: "Multi-Division Platform" },
        { icon: Building2, label: "Institutional Alignment" },
      ].map((item, i) => (
        <FadeIn key={item.label} delay={i * 0.05} direction="none">
          <div className="flex items-center gap-2.5">
            <item.icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
            <span className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground">{item.label}</span>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
);

/* ─── PLATFORM OVERVIEW — IBM / Capgemini ─── */
const PlatformOverview = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4">
          <FadeIn>
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-primary" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Overview</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground leading-tight mb-4">
                Platform Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                LTUSS is built as a unified platform combining three core service areas. The platform provides end-to-end support, from decision-making through execution.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-8 grid md:grid-cols-3 gap-0">
          {[
            {
              icon: Compass,
              title: "Advisory",
              desc: "Education, career, and strategic guidance for individuals and institutions navigating complex pathways.",
              tag: "Guidance",
            },
            {
              icon: Cog,
              title: "Solutions",
              desc: "Tools, systems, and operational support designed to enable efficient execution and delivery.",
              tag: "Enablement",
            },
            {
              icon: Users,
              title: "Staffing",
              desc: "Recruitment and workforce enablement connecting organisations with qualified talent.",
              tag: "Workforce",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12}>
              <div className="relative p-8 h-full border-l border-border group hover:bg-surface-subtle transition-colors">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary/60 mb-4 block">
                  {item.tag}
                </span>
                <item.icon className="w-6 h-6 text-primary mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-3 font-heading text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="mt-6">
                  <a
                    href={mailto(`${item.title} Inquiry`)}
                    className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1.5"
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── ADVISORY — McKinsey editorial ─── */
const Advisory = () => (
  <section className="py-24 md:py-32 bg-surface-subtle relative overflow-hidden">
    {/* Subtle editorial background */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.03] to-transparent" />

    <div className="container max-w-7xl mx-auto px-6 relative">
      <div className="grid lg:grid-cols-12 gap-16">
        {/* Editorial left column */}
        <div className="lg:col-span-7">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Core Capability</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground leading-[1.1] mb-6">
              LTUSS Advisory
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
              Structured guidance for students, professionals, and institutional pathways.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border-l-2 border-primary/20 pl-6 my-8">
              <p className="text-sm text-foreground/80 leading-[1.8]">
                LTUSS Advisory focuses on supporting individuals and organisations navigating complex decision landscapes. Our methodology ensures clarity, accuracy, and alignment with institutional requirements — providing a structured approach where ambiguity typically prevails.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: GraduationCap, text: "International education pathways" },
                { icon: FileCheck, text: "Admissions and application processes" },
                { icon: Briefcase, text: "Career planning and transitions" },
                { icon: Building2, text: "Institution and program selection" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 p-4 bg-background rounded border border-border">
                  <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="inline-flex flex-col items-start gap-2">
              <a
                href={mailto("Advisory Inquiry")}
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all"
              >
                <Mail className="w-4 h-4" />
                Advisory Inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-xs text-muted-foreground">No forms. Just send a quick email.</span>
            </div>
          </FadeIn>
        </div>

        {/* Right — Authority metrics */}
        <div className="lg:col-span-5">
          <FadeIn delay={0.2}>
          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden">
              <img src={advisoryVisual} alt="Advisory framework visualization" loading="lazy" width={1024} height={1024} className="w-full rounded-xl opacity-90" />
            </div>
            <div className="bg-background border border-border rounded-lg p-8">
              <div className="space-y-5">
                {[
                  { label: "Education Pathway Design", strength: "92%" },
                  { label: "Institutional Alignment", strength: "88%" },
                  { label: "Career Strategy", strength: "85%" },
                  { label: "Application Management", strength: "90%" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-foreground">{item.label}</span>
                      <span className="text-xs font-medium text-primary">{item.strength}</span>
                    </div>
                    <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: item.strength }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Advisory interactions are handled through direct consultation, ensuring clarity, accuracy, and alignment with institutional requirements.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

/* ─── SOLUTIONS — ServiceNow / Salesforce productised ─── */
const Solutions = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <FadeIn>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Enablement</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              LTUSS Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tools, systems, and operational support designed to enable efficient execution and delivery across organisational ecosystems.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.15} direction="left">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-xl" />
            <img src={solutionsVisual} alt="Platform architecture diagram" loading="lazy" width={1024} height={1024} className="relative rounded-xl w-full max-w-sm mx-auto" />
          </div>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: Database,
            title: "Operational Systems",
            desc: "Structured frameworks for managing processes, workflows, and organisational operations with precision.",
            tag: "Infrastructure",
          },
          {
            icon: BarChart3,
            title: "Strategic Tools",
            desc: "Decision-support tools built to drive clarity in complex operational and strategic environments.",
            tag: "Analytics",
          },
          {
            icon: Network,
            title: "Integration Support",
            desc: "Seamless connection between existing systems and new operational requirements for unified delivery.",
            tag: "Connectivity",
          },
          {
            icon: Workflow,
            title: "Process Automation",
            desc: "Streamlined workflows reducing manual overhead while maintaining quality and compliance standards.",
            tag: "Efficiency",
          },
          {
            icon: Globe,
            title: "Platform Services",
            desc: "End-to-end platform capabilities supporting the full lifecycle of organisational enablement.",
            tag: "Scale",
          },
          {
            icon: Zap,
            title: "Rapid Deployment",
            desc: "Fast-track implementation methodologies ensuring quick time-to-value for critical initiatives.",
            tag: "Speed",
          },
        ].map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08}>
            <div className="group relative bg-surface-subtle border border-border rounded-lg p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all h-full">
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary/50 mb-3 block">
                {item.tag}
              </span>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold mb-2 font-heading text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <div className="text-center mt-12">
          <a
            href={mailto("Solutions Inquiry")}
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Explore Solutions <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── STAFFING — Robert Half / TEKsystems ─── */
const Staffing = () => (
  <section className="py-24 md:py-32 bg-foreground text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

    <div className="container max-w-7xl mx-auto px-6 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Workforce</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-6">
              LTUSS Staffing
            </h2>
            <p className="text-primary-foreground/60 leading-relaxed mb-8 text-lg font-light">
              Recruitment and workforce enablement connecting organisations with qualified talent — structured, reliable, and built for institutional standards.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-4 mb-10">
              {[
                { icon: UserCheck, title: "Talent Sourcing", desc: "Identifying and qualifying candidates aligned with organisational requirements" },
                { icon: Search, title: "Role Matching", desc: "Precision matching of talent to specific role and project requirements" },
                { icon: Award, title: "Quality Assurance", desc: "Structured vetting and validation ensuring consistently high standards" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
                  <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                    <p className="text-xs text-primary-foreground/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="inline-flex flex-col items-start gap-2">
              <a
                href={mailto("Staffing Inquiry")}
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all"
              >
                <Mail className="w-4 h-4" />
                Staffing Inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-xs text-primary-foreground/30">No forms. Just send a quick email.</span>
            </div>
          </FadeIn>
        </div>

        {/* Visual — Staffing image + Stats */}
        <FadeIn delay={0.2} direction="left">
          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden">
              <img src={staffingVisual} alt="Workforce network visualization" loading="lazy" width={1024} height={1024} className="w-full rounded-xl opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: "3", label: "Core Divisions" },
                { num: "24h", label: "Response Time" },
                { num: "Direct", label: "Engagement Model" },
                { num: "E2E", label: "Workforce Support" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10 text-center">
                  <div className="text-xl font-bold text-primary font-heading mb-0.5">{stat.num}</div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-primary-foreground/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── ENGAGEMENT PROCESS — Enterprise clarity ─── */
const EngagementProcess = () => {
  const steps = [
    { num: "01", title: "Inquiry Received", desc: "Users initiate contact via direct email", icon: Send },
    { num: "02", title: "Requirement Review", desc: "Requests are assessed and categorised", icon: ClipboardList },
    { num: "03", title: "Division Routing", desc: "Inquiry directed to the relevant service area", icon: GitBranch },
    { num: "04", title: "Response & Engagement", desc: "Clear communication and next steps provided", icon: MessageSquare },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Process</span>
              <div className="w-6 h-[2px] bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              How LTUSS Handles Inquiries
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-[1px] bg-border" />

          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.12}>
              <div className="relative text-center px-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-6 relative z-10 bg-background">
                  <step.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-3xl font-bold text-primary/15 font-heading block mb-2">{step.num}</span>
                <h3 className="text-sm font-bold mb-2 font-heading text-foreground">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── OPERATIONAL PRINCIPLES ─── */
const Principles = () => (
  <section className="py-24 md:py-32 bg-surface-subtle">
    <div className="container max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Principles</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground leading-tight mb-4">
              Operational Principles
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every engagement is grounded in a clear set of operational principles designed for institutional confidence.
            </p>
          </FadeIn>
        </div>

        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Shield, title: "Structured Communication", desc: "Consistent, professional approach to all interactions" },
              { icon: Layers, title: "Service Segmentation", desc: "Clear division between advisory, solutions, and staffing" },
              { icon: Target, title: "Accuracy Over Volume", desc: "Focus on precision and quality in every engagement" },
              { icon: Eye, title: "Institutional Alignment", desc: "Designed to meet institutional validation standards" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-5 bg-background rounded-lg border border-border">
                  <item.icon className="w-4 h-4 text-primary mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-sm font-semibold mb-1 text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── PLATFORM STATUS ─── */
const PlatformStatus = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Activity className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">Live Status</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Platform Status</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            The LTUSS platform is currently in its deployment phase.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Core Services", status: "Active", color: "bg-emerald-500" },
              { label: "Advisory", status: "Operational", color: "bg-emerald-500" },
              { label: "Full Platform", status: "In Development", color: "bg-amber-500" },
            ].map((item) => (
              <div key={item.label} className="p-5 bg-surface-subtle rounded-lg border border-border">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">{item.status}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            During this phase, all services are accessible via direct communication channels.
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── FINAL CTA ─── */
const FinalCTA = () => (
  <section className="py-28 md:py-36 bg-foreground relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
    </div>

    <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
      <FadeIn>
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
          Get Started
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-foreground mb-6 leading-tight">
          For Institutional or Advisory Verification
        </h2>
        <p className="text-primary-foreground/50 mb-10 text-lg font-light max-w-lg mx-auto">
          For validation, onboarding, or partnership-related queries.
        </p>

        <div className="inline-flex flex-col items-center gap-3">
          <a
            href={mailto("General Inquiry")}
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all"
          >
            <Mail className="w-4 h-4" />
            Contact LTUSS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <span className="text-xs text-primary-foreground/30">No forms. Just send a quick email.</span>
        </div>

        <p className="mt-10 text-xs text-primary-foreground/25">
          All inquiries are reviewed and responded to within 24 hours.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─── FOOTER ─── */
const Footer = () => (
  <footer className="bg-foreground border-t border-primary-foreground/10">
    <div className="container max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="text-xl font-bold font-heading text-primary-foreground mb-2">LTUSS</p>
          <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/30 mb-4">
            Advisory · Solutions · Staffing
          </p>
          <p className="text-sm text-primary-foreground/40 max-w-sm leading-relaxed">
            A structured platform designed to support decision-making, execution, and workforce enablement.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-primary-foreground/30 mb-4">Divisions</h4>
          <div className="space-y-2.5">
            {["Advisory", "Solutions", "Staffing"].map((div) => (
              <a key={div} href={mailto(`${div} Inquiry`)} className="block text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                {div}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-primary-foreground/30 mb-4">Contact</h4>
          <a href={mailto("General Inquiry")} className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            contact@ltuss.com
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/25">© {new Date().getFullYear()} LTUSS. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-xs text-primary-foreground/25">Platform Active</span>
        </div>
      </div>
    </div>
  </footer>
);

/* ─── PAGE ─── */
const Index = () => (
  <div className="min-h-screen bg-background">
    <Hero />
    <TrustStrip />
    <PlatformOverview />
    <Advisory />
    <Solutions />
    <Staffing />
    <EngagementProcess />
    <Principles />
    <PlatformStatus />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
