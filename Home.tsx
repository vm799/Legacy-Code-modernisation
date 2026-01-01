/*
Design Philosophy: Architectural Precision
- Mathematical grid system with visible blueprint lines
- Typography-driven hierarchy with Inter sans-serif
- Refined dark slate palette with cyan accents
- Subtle, purposeful animations (0.2s ease-out)
- Generous negative space for luxury and focus
*/

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set([0]));
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.getAttribute("data-section") || "0");
            setVisibleSections((prev) => new Set(prev).add(sectionIndex));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll("[data-section]").forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background blueprint-grid">
      {/* Hero Section - The Modernization Factory */}
      <section
        data-section="0"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <div
                className={`transition-all duration-700 ${
                  visibleSections.has(0)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="section-number absolute top-0 left-0 -z-10">01</div>
                <p className="text-primary text-sm font-mono tracking-wider mb-6 uppercase">
                  Industrialising Digital Evolution
                </p>
                <h1 className="text-foreground mb-8 max-w-5xl">
                  The Modernisation Factory
                </h1>
                <p className="text-muted-foreground text-2xl max-w-3xl mb-12 leading-relaxed">
                  Transform legacy estate management from a reactive burden into a
                  high-throughput engine that reduces risk and technical debt at scale.
                </p>
                <Button
                  size="lg"
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth text-lg px-8 py-6"
                >
                  Explore the Framework
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - The Legacy Tax */}
      <section
        data-section="1"
        className="py-32 relative"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <div
                className={`transition-all duration-700 delay-100 ${
                  visibleSections.has(1)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="section-number absolute -left-8 -z-10">02</div>
                <p className="text-primary text-sm font-mono tracking-wider mb-6 uppercase">
                  The Cost of Inaction
                </p>
                <h2 className="text-foreground mb-8">The Legacy Tax</h2>
                <p className="text-muted-foreground text-xl leading-relaxed mb-8">
                  Organisations spend the majority of their technology budget maintaining
                  existing systems rather than building new capabilities. This is the
                  hidden tax of technical debt.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3 - The Reality of the Estate */}
      <section
        data-section="2"
        className="py-32 bg-card/50 relative"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <div
                className={`transition-all duration-700 ${
                  visibleSections.has(2)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="section-number absolute right-0 -z-10">03</div>
                <p className="text-primary text-sm font-mono tracking-wider mb-6 uppercase">
                  The Velocity Killer
                </p>
                <h2 className="text-foreground mb-12">The Reality of the Estate</h2>
                <div className="space-y-8">
                  <div className="border-l-2 border-primary/30 pl-8 py-4 transition-smooth hover:border-primary/60">
                    <h3 className="text-foreground mb-3 text-2xl">Undocumented Systems</h3>
                    <p className="text-muted-foreground">
                      Critical business logic exists only in the minds of developers who
                      may no longer be with the organisation.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-8 py-4 transition-smooth hover:border-primary/60">
                    <h3 className="text-foreground mb-3 text-2xl">Monolithic Architecture</h3>
                    <p className="text-muted-foreground text-lg">
                      Tightly coupled systems where a single change can cascade into
                      unexpected failures across the entire platform.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-8 py-4 transition-smooth hover:border-primary/60">
                    <h3 className="text-foreground mb-3 text-2xl">Dead Libraries</h3>
                    <p className="text-muted-foreground text-lg">
                      Dependencies on unsupported frameworks and libraries that create
                      security vulnerabilities and compatibility issues.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-8 py-4 transition-smooth hover:border-primary/60">
                    <h3 className="text-foreground mb-3 text-2xl">Tribal Knowledge</h3>
                    <p className="text-muted-foreground text-lg">
                      Operational procedures that exist nowhere in documentation, making
                      maintenance risky and training nearly impossible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - The Factory Framework */}
      <section
        data-section="3"
        className="py-32 relative"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <div
                className={`transition-all duration-700 ${
                  visibleSections.has(3)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="section-number absolute left-0 -z-10">04</div>
                <p className="text-primary text-sm font-mono tracking-wider mb-6 uppercase">
                  A Unified Approach
                </p>
                <h2 className="text-foreground mb-8">The Factory Framework</h2>
                <p className="text-muted-foreground text-xl leading-relaxed mb-16 max-w-4xl">
                  Rather than treating each legacy application as a unique problem, the
                  Modernisation Factory establishes a unified intake funnel that
                  systematically processes applications through standardised pathways.
                </p>
                <div className="relative">
                  <div className="flex flex-col items-center gap-8">
                    <div className="w-full max-w-2xl">
                      <div className="bg-card border border-border p-8 transition-smooth hover-lift hover:border-primary/50">
                        <p className="text-center text-foreground text-xl font-medium">
                          Wide Intake Funnel
                        </p>
                        <p className="text-center text-muted-foreground mt-2">
                          All applications enter through a single standardized process
                        </p>
                      </div>
                    </div>
                    <div className="h-16 w-px bg-gradient-to-b from-primary/50 to-transparent"></div>
                    <div className="w-full max-w-xl">
                      <div className="bg-card border border-border p-6 transition-smooth hover-lift hover:border-primary/50">
                        <p className="text-center text-foreground text-lg font-medium">
                          Automated Discovery & Triage
                        </p>
                      </div>
                    </div>
                    <div className="h-16 w-px bg-gradient-to-b from-primary/50 to-transparent"></div>
                    <div className="w-full max-w-md">
                      <div className="bg-card border border-border p-6 transition-smooth hover-lift hover:border-primary/50">
                        <p className="text-center text-foreground text-lg font-medium">
                          Streamlined Assembly Lines
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Intake: The Digital X-Ray */}
      <section
        data-section="4"
        className="py-32 bg-card/50 relative"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <div
                className={`transition-all duration-700 ${
                  visibleSections.has(4)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="section-number absolute right-0 -z-10">05</div>
                <p className="text-primary text-sm font-mono tracking-wider mb-6 uppercase">
                  Automated Discovery
                </p>
                <h2 className="text-foreground mb-8">Intake: The Digital X-Ray</h2>
                <p className="text-muted-foreground text-xl leading-relaxed mb-12 max-w-4xl">
                  Using AI-driven discovery tools and static analysis, we map the complete
                  dependency network of each application without requiring input from
                  original developers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-background/50 border border-border p-8 transition-smooth hover-lift hover:border-primary/50">
                    <div className="text-primary mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-foreground mb-4 text-xl">Dependency Mapping</h3>
                    <p className="text-muted-foreground">
                      Leveraging eBPF and static analysis to identify all internal and
                      external dependencies, data flows, and integration points.
                    </p>
                  </div>
                  <div className="bg-background/50 border border-border p-8 transition-smooth hover-lift hover:border-primary/50">
                    <div className="text-primary mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-foreground mb-4 text-xl">Technical Health Score</h3>
                    <p className="text-muted-foreground">
                      Automated assessment of code quality, security vulnerabilities,
                      performance bottlenecks, and architectural complexity.
                    </p>
                  </div>
                  <div className="bg-background/50 border border-border p-8 transition-smooth hover-lift hover:border-primary/50">
                    <div className="text-primary mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-foreground mb-4 text-xl">Business Value Analysis</h3>
                    <p className="text-muted-foreground">
                      Quantifying the strategic importance of each application based on
                      usage patterns, revenue impact, and operational criticality.
                    </p>
                  </div>
                  <div className="bg-background/50 border border-border p-8 transition-smooth hover-lift hover:border-primary/50">
                    <div className="text-primary mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-foreground mb-4 text-xl">Risk Assessment</h3>
                    <p className="text-muted-foreground">
                      Identifying compliance gaps, security exposures, and operational
                      risks that require immediate attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - The Triage Engine */}
      <section
        data-section="5"
        className="py-32 relative"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <div
                className={`transition-all duration-700 ${
                  visibleSections.has(5)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="section-number absolute left-0 -z-10">06</div>
                <p className="text-primary text-sm font-mono tracking-wider mb-6 uppercase">
                  Intelligent Classification
                </p>
                <h2 className="text-foreground mb-8">The Triage Engine</h2>
                <p className="text-muted-foreground text-xl leading-relaxed mb-16 max-w-4xl">
                  Based on the digital x-ray results, each application is automatically
                  categorised using the 6 R's framework, determining the optimal
                  modernisation pathway.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-card border-l-4 border-primary p-6 transition-smooth hover-lift">
                    <h3 className="text-foreground mb-3 text-xl font-semibold">Retire</h3>
                    <p className="text-muted-foreground text-sm">
                      Applications with minimal usage and low business value are
                      decommissioned to reduce maintenance burden.
                    </p>
                  </div>
                  <div className="bg-card border-l-4 border-primary p-6 transition-smooth hover-lift">
                    <h3 className="text-foreground mb-3 text-xl font-semibold">Retain</h3>
                    <p className="text-muted-foreground text-sm">
                      Stable, low-risk systems that don't justify modernisation investment
                      remain as-is with monitoring.
                    </p>
                  </div>
                  <div className="bg-card border-l-4 border-primary p-6 transition-smooth hover-lift">
                    <h3 className="text-foreground mb-3 text-xl font-semibold">Rehost</h3>
                    <p className="text-muted-foreground text-sm">
                      Lift-and-shift to cloud infrastructure without code changes,
                      improving scalability and reducing costs.
                    </p>
                  </div>
                  <div className="bg-card border-l-4 border-primary p-6 transition-smooth hover-lift">
                    <h3 className="text-foreground mb-3 text-xl font-semibold">Replatform</h3>
                    <p className="text-muted-foreground text-sm">
                      Minimal modifications to leverage cloud-native services while
                      preserving core architecture.
                    </p>
                  </div>
                  <div className="bg-card border-l-4 border-primary p-6 transition-smooth hover-lift">
                    <h3 className="text-foreground mb-3 text-xl font-semibold">Refactor</h3>
                    <p className="text-muted-foreground text-sm">
                      Restructure and optimise code to improve maintainability and
                      performance without changing functionality.
                    </p>
                  </div>
                  <div className="bg-card border-l-4 border-primary p-6 transition-smooth hover-lift">
                    <h3 className="text-foreground mb-3 text-xl font-semibold">Rearchitect</h3>
                    <p className="text-muted-foreground text-sm">
                      Complete redesign for high-value strategic assets, moving to modern
                      architecture patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Assembly Line A: Encapsulation */}
      <section
        data-section="6"
        className="py-32 bg-card/50 relative"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6">
              <div
                className={`transition-all duration-700 ${
                  visibleSections.has(6)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="section-number absolute right-0 -z-10">07</div>
                <p className="text-primary text-sm font-mono tracking-wider mb-6 uppercase">
                  Assembly Line A
                </p>
                <h2 className="text-foreground mb-8">Encapsulation</h2>
                <p className="text-muted-foreground text-xl leading-relaxed mb-8">
                  For stable legacy systems that work but can't be easily modified, we
                  wrap them in modern APIs and sidecars, treating them as black boxes.
                </p>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/50 pl-6">
                    <h3 className="text-foreground mb-2 text-lg font-medium">
                      Anti-Corruption Layers
                    </h3>
                    <p className="text-muted-foreground">
                      We don't just bridge code; we protect the new world from the old
                      world's schemas and data models.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-6">
                    <h3 className="text-foreground mb-2 text-lg font-medium">
                      API Gateway Pattern
                    </h3>
                    <p className="text-muted-foreground">
                      Modern REST or GraphQL interfaces that abstract away the complexity
                      of legacy protocols and data formats.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-6">
                    <h3 className="text-foreground mb-2 text-lg font-medium">
                      Sidecar Services
                    </h3>
                    <p className="text-muted-foreground">
                      Companion services that add observability, security, and resilience
                      without touching legacy code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex items-center">
              <div
                className={`transition-all duration-700 delay-300 ${
                  visibleSections.has(6)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <div className="bg-background/50 border border-primary/30 p-12 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                  <div className="relative">
                    <div className="text-center mb-8">
                      <div className="inline-block bg-card border border-border px-8 py-4">
                        <p className="text-foreground font-mono text-sm">Legacy Core</p>
                      </div>
                    </div>
                    <div className="flex justify-center gap-4 mb-8">
                      <div className="h-16 w-px bg-primary/50"></div>
                      <div className="h-16 w-px bg-primary/50"></div>
                      <div className="h-16 w-px bg-primary/50"></div>
                    </div>
                    <div className="text-center">
                      <div className="inline-block bg-primary/10 border border-primary px-8 py-4">
                        <p className="text-primary font-mono text-sm">Modern API Layer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - Assembly Line B: Refactor */}
      <section
        data-section="7"
        className="py-32 relative"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 flex items-center">
              <div
                className={`transition-all duration-700 delay-300 ${
                  visibleSections.has(7)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="bg-card border border-border p-8">
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">COBOL / Java 6</span>
                      <ArrowRight className="text-primary" size={20} />
                      <span className="text-primary">Cloud Native</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">Monolith</span>
                      <ArrowRight className="text-primary" size={20} />
                      <span className="text-primary">Microservices</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">On-Premise</span>
                      <ArrowRight className="text-primary" size={20} />
                      <span className="text-primary">Kubernetes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">Manual Deploy</span>
                      <ArrowRight className="text-primary" size={20} />
                      <span className="text-primary">CI/CD Pipeline</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
              <div
                className={`transition-all duration-700 ${
                  visibleSections.has(7)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="section-number absolute left-0 -z-10">08</div>
                <p className="text-primary text-sm font-mono tracking-wider mb-6 uppercase">
                  Assembly Line B
                </p>
                <h2 className="text-foreground mb-8">Refactor</h2>
                <p className="text-muted-foreground text-xl leading-relaxed mb-8">
                  Automated code conversion and library updates transform applications to
                  modern frameworks and cloud-native architectures.
                </p>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/50 pl-6">
                    <h3 className="text-foreground mb-2 text-lg font-medium">
                      Automated Code Translation
                    </h3>
                    <p className="text-muted-foreground">
                      AI-powered tools convert legacy languages to modern equivalents while
                      preserving business logic and behavior.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-6">
                    <h3 className="text-foreground mb-2 text-lg font-medium">
                      Library Modernisation
                    </h3>
                    <p className="text-muted-foreground">
                      Systematic replacement of deprecated dependencies with supported
                      alternatives, including automated testing.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-6">
                    <h3 className="text-foreground mb-2 text-lg font-medium">
                      Strangler Fig Pattern
                    </h3>
                    <p className="text-muted-foreground">
                      Incremental migration that ensures zero-downtime cutovers by
                      gradually replacing functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 - Assembly Line C: Rebuild */}
      <section
        data-section="8"
        className="py-32 bg-card/50 relative"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6">
              <div
                className={`transition-all duration-700 ${
                  visibleSections.has(8)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="section-number absolute right-0 -z-10">09</div>
                <p className="text-primary text-sm font-mono tracking-wider mb-6 uppercase">
                  Assembly Line C
                </p>
                <h2 className="text-foreground mb-8">Rebuild</h2>
                <p className="text-muted-foreground text-xl leading-relaxed mb-8">
                  For high-value strategic assets, we employ Domain-Driven Design to
                  completely rearchitect applications with modern patterns.
                </p>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/50 pl-6">
                    <h3 className="text-foreground mb-2 text-lg font-medium">
                      Domain-Driven Design
                    </h3>
                    <p className="text-muted-foreground">
                      Modeling business domains explicitly to create maintainable,
                      evolvable architectures aligned with business needs.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-6">
                    <h3 className="text-foreground mb-2 text-lg font-medium">
                      Event-Driven Architecture
                    </h3>
                    <p className="text-muted-foreground">
                      Decoupled systems that communicate through events, enabling
                      scalability and resilience.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-6">
                    <h3 className="text-foreground mb-2 text-lg font-medium">
                      Abstracting the Data Layer
                    </h3>
                    <p className="text-muted-foreground">
                      Clean separation between business logic and data persistence,
                      enabling technology flexibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex items-center">
              <div
                className={`transition-all duration-700 delay-300 ${
                  visibleSections.has(8)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-card border border-primary/30 transition-smooth hover:border-primary hover:bg-primary/5"
                      style={{
                        transitionDelay: `${i * 50}ms`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 - Quality Control */}
      <section
        data-section="9"
        className="py-32 relative"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <div
                className={`transition-all duration-700 ${
                  visibleSections.has(9)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="section-number absolute left-0 -z-10">10</div>
                <p className="text-primary text-sm font-mono tracking-wider mb-6 uppercase">
                  The QA Gate
                </p>
                <h2 className="text-foreground mb-8">Quality Control</h2>
                <p className="text-muted-foreground text-xl leading-relaxed mb-16 max-w-4xl">
                  Every application passes through rigorous automated testing, security
                  scanning, and compliance validation before deployment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-card border border-border p-8 transition-smooth hover-lift hover:border-primary/50">
                    <h3 className="text-foreground mb-4 text-xl">Automated Testing</h3>
                    <p className="text-muted-foreground mb-6">
                      Comprehensive regression suites ensure functional parity with legacy
                      systems.
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Unit tests for all business logic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Integration tests for APIs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>End-to-end user flows</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border p-8 transition-smooth hover-lift hover:border-primary/50">
                    <h3 className="text-foreground mb-4 text-xl">Security Scanning</h3>
                    <p className="text-muted-foreground mb-6">
                      Continuous vulnerability assessment and remediation throughout the
                      pipeline.
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Static code analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Dependency vulnerability checks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Penetration testing</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border p-8 transition-smooth hover-lift hover:border-primary/50">
                    <h3 className="text-foreground mb-4 text-xl">SRE Observability</h3>
                    <p className="text-muted-foreground mb-6">
                      Full instrumentation for monitoring, logging, and incident response.
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Distributed tracing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Metrics and alerting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Log aggregation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11 - The ROI of Industrialization */}
      <section
        data-section="10"
        className="py-32 bg-card/50 relative"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <div
                className={`transition-all duration-700 ${
                  visibleSections.has(10)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="section-number absolute right-0 -z-10">11</div>
                <p className="text-primary text-sm font-mono tracking-wider mb-6 uppercase">
                  Measurable Impact
                </p>
                <h2 className="text-foreground mb-8">The ROI of Industrialisation</h2>
                <p className="text-muted-foreground text-xl leading-relaxed mb-16 max-w-4xl">
                  The Modernisation Factory transforms technical debt from a growing
                  liability into a managed, continuously improving asset.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="text-center">
                    <h3 className="text-foreground mb-3 text-xl">Velocity</h3>
                    <p className="text-muted-foreground">
                      Faster feature delivery through standardised, maintainable
                      architectures
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-foreground mb-3 text-xl">Cost Reduction</h3>
                    <p className="text-muted-foreground">
                      Lower maintenance costs through automation and cloud-native
                      infrastructure
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-foreground mb-3 text-xl">Talent Retention</h3>
                    <p className="text-muted-foreground">
                      Engineers prefer working on modern tech stacks, reducing turnover
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12 - Phase 1: The Pilot */}
      <section
        data-section="11"
        className="py-32 relative"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <div
                className={`transition-all duration-700 ${
                  visibleSections.has(11)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="section-number absolute left-0 -z-10">12</div>
                <p className="text-primary text-sm font-mono tracking-wider mb-6 uppercase">
                  Call to Action
                </p>
                <h2 className="text-foreground mb-8">Phase 1: The Pilot</h2>
                <p className="text-muted-foreground text-xl leading-relaxed mb-12">
                  Begin with a 90-day pilot programme targeting three applications that
                  represent different modernisation pathways. This proves the framework's
                  effectiveness while building organisational capability.
                </p>
                <div className="bg-card border border-primary/50 p-12 mb-12">
                  <h3 className="text-foreground mb-8 text-2xl text-center">
                    Pilot Programme Timeline
                  </h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-24 text-primary font-mono text-sm">
                        Week 1-2
                      </div>
                      <div className="flex-1 border-l-2 border-primary/30 pl-6">
                        <h4 className="text-foreground mb-2 font-medium">
                          Application Selection
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Identify three candidate applications representing different
                          complexity levels and business criticality.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-24 text-primary font-mono text-sm">
                        Week 3-4
                      </div>
                      <div className="flex-1 border-l-2 border-primary/30 pl-6">
                        <h4 className="text-foreground mb-2 font-medium">
                          Discovery & Triage
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Run automated discovery tools, map dependencies, and assign
                          modernisation pathways.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-24 text-primary font-mono text-sm">
                        Week 5-10
                      </div>
                      <div className="flex-1 border-l-2 border-primary/30 pl-6">
                        <h4 className="text-foreground mb-2 font-medium">
                          Modernisation Execution
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Execute the appropriate assembly line process for each
                          application with continuous testing.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-24 text-primary font-mono text-sm">
                        Week 11-12
                      </div>
                      <div className="flex-1 border-l-2 border-primary/30 pl-6">
                        <h4 className="text-foreground mb-2 font-medium">
                          Validation & Rollout
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Final quality gates, production deployment, and measurement of
                          success metrics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth text-lg px-12 py-6"
                  >
                    Start the Pilot Programme
                  </Button>
                  <p className="text-muted-foreground text-sm mt-6">
                    Transform your legacy estate into a strategic asset
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6">
              <h3 className="text-foreground text-2xl mb-4 font-display font-semibold">
                The Modernisation Factory
              </h3>
              <p className="text-muted-foreground">
                Industrialising digital evolution through systematic, scalable
                modernisation processes.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6 flex items-center justify-end">
              <p className="text-muted-foreground text-sm">
                © 2026 The Modernisation Factory. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
