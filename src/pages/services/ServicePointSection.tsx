import { motion } from "framer-motion";
import { ServicePoint } from "@/data/serviceData";
import { CheckCircle, TrendingUp, Users, Zap, Target, Award } from "lucide-react";
import {
  CircularProgress,
  AnimatedBar,
  MiniBarChart,
  DonutChart,
  MetricCard,
  ComparisonChart,
  FlowDiagram,
  TimelineProgress,
} from "@/components/infographics";

interface ServicePointSectionProps {
  point: ServicePoint;
  index: number;
  color: string;
}

// Generate dynamic infographic data based on service point
const getInfographicData = (point: ServicePoint, index: number) => {
  const chartTypes = [
    "progress-bars",
    "donut",
    "comparison",
    "metrics-grid",
    "mini-bar",
    "circular",
    "timeline",
    "flow",
    "metrics-featured",
    "multi-progress",
  ];
  
  const type = chartTypes[index % chartTypes.length];
  
  const progressData = [
    { label: "Performance", value: 85 + (index * 3) % 15 },
    { label: "Efficiency", value: 78 + (index * 5) % 20 },
    { label: "Quality", value: 92 + (index * 2) % 8 },
    { label: "Growth", value: 88 + (index * 4) % 12 },
  ];

  const comparisonData = [
    { label: "Traffic", before: 35, after: 85 + (index * 2) % 15 },
    { label: "Conversions", before: 28, after: 78 + (index * 3) % 22 },
    { label: "Revenue", before: 42, after: 92 + (index) % 8 },
  ];

  const barChartData = [
    { label: "Q1", value: 65 + (index * 5) % 20 },
    { label: "Q2", value: 72 + (index * 3) % 18 },
    { label: "Q3", value: 85 + (index * 4) % 15 },
    { label: "Q4", value: 95 + (index * 2) % 5 },
  ];

  const donutSegments = [
    { value: 40, color: "primary", label: "Organic" },
    { value: 25, color: "accent", label: "Paid" },
    { value: 20, color: "info", label: "Social" },
    { value: 15, color: "success", label: "Direct" },
  ];

  const flowSteps = [
    { title: "Analyze", icon: Target },
    { title: "Plan", icon: Zap },
    { title: "Execute", icon: TrendingUp },
    { title: "Optimize", icon: Award },
  ];

  const timelineSteps = [
    { title: "Discovery", duration: "Week 1", icon: Target, completed: true },
    { title: "Strategy", duration: "Week 2", icon: Zap, completed: true },
    { title: "Launch", duration: "Week 3-4", icon: TrendingUp, completed: true },
    { title: "Optimize", duration: "Ongoing", icon: Award, completed: false },
  ];

  return { type, progressData, comparisonData, barChartData, donutSegments, flowSteps, timelineSteps };
};

const ServicePointSection = ({ point, index, color }: ServicePointSectionProps) => {
  const Icon = point.icon;
  const isEven = index % 2 === 0;
  const { type, progressData, comparisonData, barChartData, donutSegments, flowSteps, timelineSteps } = getInfographicData(point, index);

  const renderInfographic = () => {
    switch (type) {
      case "progress-bars":
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground mb-4">Performance Metrics</h4>
            {progressData.map((item, i) => (
              <AnimatedBar
                key={item.label}
                label={item.label}
                value={item.value}
                color={color}
                delay={i * 0.15}
              />
            ))}
          </div>
        );
      
      case "donut":
        return (
          <div className="flex flex-col items-center">
            <DonutChart
              segments={donutSegments}
              centerValue="100%"
              centerLabel="Total Reach"
            />
            <div className="grid grid-cols-2 gap-4 mt-6 w-full">
              {donutSegments.map((seg) => (
                <div key={seg.label} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-${seg.color}`} 
                       style={{ backgroundColor: seg.color === 'primary' ? 'hsl(var(--primary))' : 
                                                  seg.color === 'accent' ? 'hsl(var(--accent))' :
                                                  seg.color === 'success' ? 'hsl(160, 84%, 39%)' : 
                                                  'hsl(199, 89%, 48%)' }} 
                  />
                  <span className="text-sm text-muted-foreground">{seg.label}: {seg.value}%</span>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "comparison":
        return (
          <div>
            <h4 className="font-semibold text-foreground mb-4">Before vs After Results</h4>
            <ComparisonChart
              data={comparisonData}
              beforeLabel="Before"
              afterLabel="With Our Service"
              color={color}
            />
          </div>
        );
      
      case "metrics-grid":
        return (
          <div className="grid grid-cols-2 gap-4">
            <MetricCard title="Conversion Rate" value="4.8%" change={32} icon={Target} color={color} />
            <MetricCard title="Avg. Session" value="5:42" change={18} icon={Users} color={color} />
            <MetricCard title="Bounce Rate" value="28%" change={-15} icon={TrendingUp} color={color} />
            <MetricCard title="Page Speed" value="1.2s" change={45} icon={Zap} color={color} />
          </div>
        );
      
      case "mini-bar":
        return (
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quarterly Performance</h4>
            <MiniBarChart data={barChartData} height={140} color={color} />
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-foreground">+156%</div>
                <div className="text-xs text-muted-foreground">YoY Growth</div>
              </div>
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-foreground">$2.4M</div>
                <div className="text-xs text-muted-foreground">Revenue Impact</div>
              </div>
            </div>
          </div>
        );
      
      case "circular":
        return (
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <CircularProgress value={92} label="92%" sublabel="Success Rate" color={color} />
              </div>
              <div className="flex flex-col items-center">
                <CircularProgress value={87} label="87%" sublabel="Client Retention" color={color} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 w-full">
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="text-xl font-bold text-foreground">24hr</div>
                <div className="text-xs text-muted-foreground">Response Time</div>
              </div>
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="text-xl font-bold text-foreground">500+</div>
                <div className="text-xs text-muted-foreground">Projects Done</div>
              </div>
            </div>
          </div>
        );
      
      case "timeline":
        return (
          <div>
            <h4 className="font-semibold text-foreground mb-6">Implementation Timeline</h4>
            <TimelineProgress steps={timelineSteps} currentStep={2} color={color} />
          </div>
        );
      
      case "flow":
        return (
          <div>
            <h4 className="font-semibold text-foreground mb-6">Our Approach</h4>
            <FlowDiagram steps={flowSteps} color={color} variant="vertical" />
          </div>
        );
      
      case "metrics-featured":
        return (
          <div className="space-y-4">
            <MetricCard 
              title="Average ROI Increase" 
              value="340%" 
              change={28} 
              changeLabel="vs industry avg"
              icon={TrendingUp}
              color={color}
              variant="featured"
            />
            <div className="grid grid-cols-2 gap-4">
              <MetricCard title="Time to Value" value="4 wks" variant="compact" />
              <MetricCard title="Cost Savings" value="45%" variant="compact" />
            </div>
          </div>
        );
      
      case "multi-progress":
        return (
          <div className="space-y-6">
            <div className="flex justify-center gap-6">
              <CircularProgress value={95} size={100} label="95%" sublabel="Accuracy" color={color} />
              <CircularProgress value={88} size={100} label="88%" sublabel="Coverage" color={color} />
            </div>
            <div className="space-y-3">
              {progressData.slice(0, 3).map((item, i) => (
                <AnimatedBar
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  color={color}
                  delay={i * 0.15}
                />
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const benefits = [
    "AI-powered analysis and recommendations",
    "Industry best practices implementation",
    "Continuous monitoring and optimization",
    "Clear documentation and reporting",
  ];

  return (
    <motion.div 
      className={`py-16 md:py-20 ${isEven ? "bg-background" : "bg-muted"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-wide">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
          {/* Content */}
          <motion.div 
            className={isEven ? "order-1" : "order-1 lg:order-2"}
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.div>
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
              {benefits.slice(0, 4).map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

          </motion.div>

          {/* Infographic Card */}
          <motion.div 
            className={isEven ? "order-2" : "order-2 lg:order-1"}
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-3xl blur-3xl opacity-20`} />
              <div className="relative bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${color}`} />
                <div className="p-6 md:p-8">
                  {renderInfographic()}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicePointSection;
