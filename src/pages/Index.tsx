import FadeIn from "@/components/FadeIn";
import heroAbstract from "@/assets/hero-abstract.jpg";
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
} from "lucide-react";

const MAILTO = "mailto:contact@ltuss.com";
const mailto = (subject: string) => `${MAILTO}?subject=${encodeURIComponent(subject)}`;

const SectionWrapper = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

const CTAButton = ({ subject, label = "Contact LTUSS" }: { subject: string; label?: string }) => (
  <div className="inline-flex flex-col items-start gap-2">
    <a
      href={mailto(subject)}
      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
    >
      <Mail className="w-4 h-4" />
      {label}
      <ArrowRight className="w-4 h-4" />
    </a>
    <span className="text-xs text-muted-foreground">No forms. Just send a quick email.</span>
  </div>
);

/* ─── HERO ─── */
const Hero = () => (
  <section className="min-h-[85vh] flex items-center bg-background relative overflow-hidden">
    <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <FadeIn>
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">
          Advisory · Solutions · Staffing
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6 text-foreground font-heading">
          LTUSS
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
          A structured multi-division platform designed to support advisory, operational enablement, and staffing needs across education and organisational ecosystems.
        </p>
        <CTAButton subject="General Inquiry" />
        <p className="mt-6 text-xs text-text-tertiary max-w-md">
          This platform is currently in active rollout. Core services are operational via direct engagement.
        </p>
      </FadeIn>
      <FadeIn delay={0.2} direction="left" className="hidden md:block">
        <div className="relative">
          <div className="absolute -inset-8 bg-primary/5 rounded-3xl blur-2xl" />
          <img
            src={heroAbstract}
            alt="Abstract geometric pattern"
            width={960}
            height={960}
            className="relative rounded-2xl opacity-60"
          />
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── TRUST STRIP ─── */
const TrustStrip = () => (
  <div className="bg-surface-subtle">
    <div className="container max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-8 md:gap-16">
      {["Structured Engagement", "Direct Advisory", "Multi-Division Platform", "Institutional Alignment"].map((item) => (
        <FadeIn key={item} delay={0.05} direction="none">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">{item}</span>
        </FadeIn>
      ))}
    </div>
  </div>
);

/* ─── PLATFORM OVERVIEW ─── */
const PlatformOverview = () => (
  <SectionWrapper>
    <FadeIn>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-foreground">Platform Overview</h2>
      <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
        LTUSS is built as a unified platform combining three core service areas:
      </p>
    </FadeIn>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { icon: Compass, title: "Advisory", desc: "Education, career, and strategic guidance" },
        { icon: Wrench, title: "Solutions", desc: "Tools, systems, and operational support" },
        { icon: Users, title: "Staffing", desc: "Recruitment and workforce enablement" },
      ].map((item, i) => (
        <FadeIn key={item.title} delay={i * 0.1}>
          <div className="bg-surface-subtle rounded-lg p-8 group hover:bg-primary/5 transition-colors">
            <item.icon className="w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold mb-2 font-heading text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        </FadeIn>
      ))}
    </div>
    <FadeIn delay={0.3}>
      <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
        The platform is designed to provide end-to-end support, from decision-making through execution.
      </p>
    </FadeIn>
  </SectionWrapper>
);

/* ─── ADVISORY ─── */
const Advisory = () => (
  <SectionWrapper className="bg-surface-subtle">
    <div className="grid md:grid-cols-2 gap-16 items-start">
      <FadeIn>
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3">Core Capability</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-foreground">LTUSS Advisory</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Structured guidance for students, professionals, and institutional pathways.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8">
          LTUSS Advisory focuses on supporting individuals and organisations navigating complex pathways with clarity, accuracy, and alignment with institutional requirements.
        </p>
        <CTAButton subject="Advisory Inquiry" />
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="space-y-4">
          {[
            "International education pathways",
            "Admissions and application processes",
            "Career planning and transitions",
            "Institution and program selection",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 bg-background rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
          <p className="text-xs text-muted-foreground pt-2 pl-1">
            Advisory interactions are handled through direct consultation, ensuring clarity, accuracy, and alignment with institutional requirements.
          </p>
        </div>
      </FadeIn>
    </div>
  </SectionWrapper>
);

/* ─── OPERATIONAL READINESS ─── */
const OperationalReadiness = () => (
  <SectionWrapper>
    <FadeIn>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-foreground">Service Readiness</h2>
      <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        LTUSS is currently operating through a direct engagement model, with:
      </p>
    </FadeIn>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {[
        { icon: Mail, label: "Inquiry-based intake (via email)" },
        { icon: ClipboardList, label: "Manual qualification and routing" },
        { icon: GitBranch, label: "Structured response workflows" },
        { icon: MessageSquare, label: "Advisory and consultation delivery" },
      ].map((item, i) => (
        <FadeIn key={item.label} delay={i * 0.08}>
          <div className="flex items-start gap-3 p-5 rounded-lg border border-border">
            <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
            <span className="text-sm text-foreground leading-snug">{item.label}</span>
          </div>
        </FadeIn>
      ))}
    </div>
    <FadeIn delay={0.3}>
      <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
        This ensures that all engagements are handled professionally and with full context, even during platform rollout.
      </p>
    </FadeIn>
  </SectionWrapper>
);

/* ─── PLATFORM STRUCTURE ─── */
const PlatformStructure = () => (
  <SectionWrapper className="bg-surface-subtle">
    <FadeIn>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-foreground">Multi-Division Architecture</h2>
      <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
        The LTUSS platform is structured into three divisions:
      </p>
    </FadeIn>
    <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
      {[
        { icon: Compass, title: "Advisory", desc: "Guidance and decision support" },
        { icon: Wrench, title: "Solutions", desc: "Tools and system enablement" },
        { icon: Users, title: "Staffing", desc: "Talent and workforce support" },
      ].map((item, i) => (
        <FadeIn key={item.title} delay={i * 0.1}>
          <div className="bg-background p-8 text-center">
            <item.icon className="w-6 h-6 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold mb-1 font-heading text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        </FadeIn>
      ))}
    </div>
    <FadeIn delay={0.3}>
      <p className="mt-8 text-sm text-muted-foreground text-center max-w-lg mx-auto">
        Each division operates independently while remaining connected under a unified framework.
      </p>
    </FadeIn>
  </SectionWrapper>
);

/* ─── ENGAGEMENT PROCESS ─── */
const EngagementProcess = () => {
  const steps = [
    { num: "01", title: "Inquiry Received", desc: "Users initiate contact via direct email", icon: Send },
    { num: "02", title: "Requirement Review", desc: "Requests are assessed and categorised", icon: ClipboardList },
    { num: "03", title: "Division Routing", desc: "Inquiry is directed to the relevant service area", icon: GitBranch },
    { num: "04", title: "Response & Engagement", desc: "Clear communication and next steps are provided", icon: MessageSquare },
  ];

  return (
    <SectionWrapper>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-heading text-foreground">How LTUSS Handles Inquiries</h2>
      </FadeIn>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <FadeIn key={step.num} delay={i * 0.1}>
            <div className="relative">
              <span className="text-5xl font-bold text-primary/10 font-heading">{step.num}</span>
              <step.icon className="w-5 h-5 text-primary mb-3 mt-2" strokeWidth={1.5} />
              <h3 className="text-base font-semibold mb-1 font-heading text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
};

/* ─── PROFESSIONAL POSITIONING ─── */
const ProfessionalPositioning = () => (
  <SectionWrapper className="bg-surface-subtle">
    <FadeIn>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 font-heading text-foreground">Operational Principles</h2>
    </FadeIn>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-8">
      {[
        { icon: Shield, label: "Structured communication approach" },
        { icon: Layers, label: "Clear service segmentation" },
        { icon: MessageSquare, label: "Direct advisory interaction model" },
        { icon: Target, label: "Focus on accuracy and clarity over volume" },
        { icon: Eye, label: "Designed for institutional alignment" },
      ].map((item, i) => (
        <FadeIn key={item.label} delay={i * 0.06}>
          <div className="flex items-center gap-3">
            <item.icon className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
            <span className="text-sm text-foreground">{item.label}</span>
          </div>
        </FadeIn>
      ))}
    </div>
  </SectionWrapper>
);

/* ─── PLATFORM STATUS ─── */
const PlatformStatus = () => (
  <SectionWrapper>
    <div className="max-w-2xl">
      <FadeIn>
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-4 h-4 text-primary" strokeWidth={1.5} />
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Live Status</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-foreground">Platform Status</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          The LTUSS platform is currently in its deployment phase, with:
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="space-y-3 mb-8">
          {[
            "Core services active",
            "Advisory interactions operational",
            "Full platform interface under development",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          During this phase, all services are accessible via direct communication channels.
        </p>
      </FadeIn>
    </div>
  </SectionWrapper>
);

/* ─── FINAL CTA ─── */
const FinalCTA = () => (
  <SectionWrapper className="bg-foreground">
    <div className="text-center max-w-xl mx-auto">
      <FadeIn>
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/50 mb-3">
          Institutional & Advisory Verification
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-primary-foreground">
          For Institutional or Advisory Verification
        </h2>
        <p className="text-primary-foreground/70 mb-8 leading-relaxed">
          For validation, onboarding, or partnership-related queries:
        </p>
        <div className="inline-flex flex-col items-center gap-2">
          <a
            href={mailto("General Inquiry")}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Contact LTUSS
            <ArrowRight className="w-4 h-4" />
          </a>
          <span className="text-xs text-primary-foreground/40">No forms. Just send a quick email.</span>
        </div>
        <p className="mt-8 text-xs text-primary-foreground/40">
          All inquiries are reviewed and responded to within 24 hours.
        </p>
      </FadeIn>
    </div>
  </SectionWrapper>
);

/* ─── FOOTER ─── */
const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-lg font-bold font-heading text-foreground mb-1">LTUSS</p>
          <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
            Advisory · Solutions · Staffing
          </p>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            A structured platform designed to support decision-making, execution, and workforce enablement.
          </p>
        </div>
        <div className="flex gap-4">
          {["Advisory Inquiry", "Solutions Inquiry", "Staffing Inquiry"].map((subject) => (
            <a
              key={subject}
              href={mailto(subject)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {subject.replace(" Inquiry", "")}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-xs text-text-tertiary">© {new Date().getFullYear()} LTUSS. All rights reserved.</p>
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
    <OperationalReadiness />
    <PlatformStructure />
    <EngagementProcess />
    <ProfessionalPositioning />
    <PlatformStatus />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
