import { ServicePoint } from "@/data/serviceData";

interface ServicePointSectionProps {
  point: ServicePoint;
  index: number;
  color: string;
}

const ServicePointSection = ({ point, index, color }: ServicePointSectionProps) => {
  const Icon = point.icon;
  const isEven = index % 2 === 0;

  return (
    <div className={`py-16 ${isEven ? "bg-background" : "bg-muted"}`}>
      <div className="container-wide">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
          <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Step {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              {point.title}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {point.description}
            </p>
            <ul className="space-y-3">
              {[
                "AI-powered analysis and recommendations",
                "Industry best practices implementation",
                "Continuous monitoring and optimization",
                "Clear documentation and reporting",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-3xl blur-3xl opacity-20`} />
              <div className="relative bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${color}`} />
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-muted rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-foreground">98%</div>
                      <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                    <div className="bg-muted rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-foreground">24hr</div>
                      <div className="text-xs text-muted-foreground">Turnaround</div>
                    </div>
                    <div className="bg-muted rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-foreground">AI</div>
                      <div className="text-xs text-muted-foreground">Powered</div>
                    </div>
                    <div className="bg-muted rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-foreground">∞</div>
                      <div className="text-xs text-muted-foreground">Scalable</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Implementation</span>
                      <span className="font-medium text-foreground">In Progress</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${color} rounded-full`} style={{ width: "75%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePointSection;
