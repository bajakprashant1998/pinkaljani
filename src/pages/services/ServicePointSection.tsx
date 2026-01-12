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
  AreaChartCard,
  LineChartCard,
  ScatterPlot,
  BarChartCard,
  RadarChartCard,
  ComposedChartCard,
  PieChartCard,
  FunnelChart,
  GaugeIndicator,
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
    "area-chart",
    "comparison",
    "line-chart",
    "mini-bar",
    "radar-chart",
    "timeline",
    "scatter-plot",
    "composed-chart",
    "pie-chart",
    "donut",
    "metrics-grid",
    "circular",
    "flow",
    "bar-chart",
    "multi-progress",
    "funnel-chart",
    "gauge-indicator",
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

  // Recharts data
  const areaChartData = [
    { name: "Jan", value: 40 + (index * 5) % 20, value2: 30 + (index * 3) % 15 },
    { name: "Feb", value: 55 + (index * 3) % 15, value2: 45 + (index * 4) % 18 },
    { name: "Mar", value: 70 + (index * 4) % 20, value2: 58 + (index * 2) % 12 },
    { name: "Apr", value: 65 + (index * 2) % 18, value2: 62 + (index * 5) % 15 },
    { name: "May", value: 85 + (index * 6) % 15, value2: 75 + (index * 3) % 20 },
    { name: "Jun", value: 95 + (index * 2) % 5, value2: 88 + (index * 4) % 12 },
  ];

  const lineChartData = [
    { name: "Week 1", traffic: 1200 + index * 100, conversions: 45 + index * 5 },
    { name: "Week 2", traffic: 1800 + index * 150, conversions: 62 + index * 8 },
    { name: "Week 3", traffic: 2400 + index * 200, conversions: 78 + index * 10 },
    { name: "Week 4", traffic: 3200 + index * 250, conversions: 95 + index * 12 },
    { name: "Week 5", traffic: 4100 + index * 300, conversions: 115 + index * 15 },
    { name: "Week 6", traffic: 4800 + index * 350, conversions: 138 + index * 18 },
  ];

  const scatterData = [
    { x: 20 + index * 2, y: 30 + index * 3, z: 200 },
    { x: 40 + index * 3, y: 50 + index * 4, z: 300 },
    { x: 60 + index * 2, y: 45 + index * 2, z: 250 },
    { x: 80 + index * 4, y: 70 + index * 3, z: 350 },
    { x: 55 + index * 3, y: 65 + index * 5, z: 280 },
    { x: 75 + index * 2, y: 85 + index * 2, z: 400 },
  ];

  const radarData = [
    { subject: "SEO", value: 85 + (index * 3) % 15, value2: 95 },
    { subject: "PPC", value: 78 + (index * 4) % 20, value2: 90 },
    { subject: "Content", value: 92 + (index * 2) % 8, value2: 95 },
    { subject: "Social", value: 70 + (index * 5) % 25, value2: 88 },
    { subject: "Email", value: 88 + (index * 3) % 12, value2: 92 },
    { subject: "Analytics", value: 82 + (index * 4) % 18, value2: 90 },
  ];

  const composedData = [
    { name: "Jan", bar: 400 + index * 50, line: 240, area: 200 },
    { name: "Feb", bar: 600 + index * 60, line: 320, area: 280 },
    { name: "Mar", bar: 800 + index * 70, line: 450, area: 380 },
    { name: "Apr", bar: 700 + index * 55, line: 380, area: 350 },
    { name: "May", bar: 900 + index * 80, line: 520, area: 450 },
    { name: "Jun", bar: 1100 + index * 90, line: 680, area: 580 },
  ];

  const pieData = [
    { name: "Organic Search", value: 35 + (index * 2) % 10 },
    { name: "Paid Ads", value: 25 + (index * 3) % 8 },
    { name: "Social Media", value: 20 + (index * 2) % 6 },
    { name: "Direct", value: 15 + (index) % 5 },
    { name: "Referral", value: 5 + (index * 2) % 4 },
  ];

  const rechartsBarData = [
    { name: "Jan", value: 65 + (index * 5) % 20 },
    { name: "Feb", value: 72 + (index * 3) % 18 },
    { name: "Mar", value: 85 + (index * 4) % 15 },
    { name: "Apr", value: 78 + (index * 2) % 12 },
    { name: "May", value: 92 + (index * 6) % 8 },
    { name: "Jun", value: 98 + (index) % 2 },
  ];

  const funnelStages = [
    { label: "Visitors", value: 10000 + index * 500, color: "hsl(var(--primary))" },
    { label: "Leads", value: 2500 + index * 150, color: "hsl(var(--accent))" },
    { label: "Opportunities", value: 800 + index * 50, color: "hsl(199, 89%, 48%)" },
    { label: "Customers", value: 200 + index * 20, color: "hsl(160, 84%, 39%)" },
  ];

  const gaugeValue = 72 + (index * 7) % 28;

  return { 
    type, 
    progressData, 
    comparisonData, 
    barChartData, 
    donutSegments, 
    flowSteps, 
    timelineSteps,
    areaChartData,
    lineChartData,
    scatterData,
    radarData,
    composedData,
    pieData,
    rechartsBarData,
    funnelStages,
    gaugeValue,
  };
};

const ServicePointSection = ({ point, index, color }: ServicePointSectionProps) => {
  const Icon = point.icon;
  const isEven = index % 2 === 0;
  const { 
    type, 
    progressData, 
    comparisonData, 
    barChartData, 
    donutSegments, 
    flowSteps, 
    timelineSteps,
    areaChartData,
    lineChartData,
    scatterData,
    radarData,
    composedData,
    pieData,
    rechartsBarData,
    funnelStages,
    gaugeValue,
  } = getInfographicData(point, index);

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

      // New Recharts-based visualizations
      case "area-chart":
        return (
          <div>
            <AreaChartCard
              data={areaChartData}
              title="Growth Trend Analysis"
              dual={true}
              height={220}
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-muted rounded-xl p-3 text-center">
                <div className="text-lg font-bold text-foreground">+127%</div>
                <div className="text-xs text-muted-foreground">6-Month Growth</div>
              </div>
              <div className="bg-muted rounded-xl p-3 text-center">
                <div className="text-lg font-bold text-foreground">$1.8M</div>
                <div className="text-xs text-muted-foreground">Revenue Added</div>
              </div>
            </div>
          </div>
        );

      case "line-chart":
        return (
          <div>
            <LineChartCard
              data={lineChartData}
              title="Traffic & Conversions"
              lines={[
                { dataKey: "traffic", color: "primary", name: "Traffic" },
                { dataKey: "conversions", color: "accent", name: "Conversions" },
              ]}
              height={220}
            />
          </div>
        );

      case "scatter-plot":
        return (
          <div>
            <ScatterPlot
              data={scatterData}
              title="Campaign Performance Distribution"
              xLabel="Spend ($)"
              yLabel="Conversions"
              bubbles={true}
              height={220}
            />
          </div>
        );

      case "radar-chart":
        return (
          <div>
            <RadarChartCard
              data={radarData}
              title="Service Coverage Analysis"
              dual={true}
              showLegend={true}
              height={280}
            />
          </div>
        );

      case "composed-chart":
        return (
          <div>
            <ComposedChartCard
              data={composedData}
              title="Multi-Channel Performance"
              showBar={true}
              showLine={true}
              showArea={true}
              height={240}
            />
          </div>
        );

      case "pie-chart":
        return (
          <div>
            <PieChartCard
              data={pieData}
              title="Traffic Source Distribution"
              innerRadius={40}
              height={280}
            />
          </div>
        );

      case "bar-chart":
        return (
          <div>
            <BarChartCard
              data={rechartsBarData}
              title="Monthly Performance"
              showLabels={true}
              height={220}
            />
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-muted rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-foreground">98%</div>
                <div className="text-[10px] text-muted-foreground">Peak</div>
              </div>
              <div className="bg-muted rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-foreground">82%</div>
                <div className="text-[10px] text-muted-foreground">Avg</div>
              </div>
              <div className="bg-muted rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-foreground">+23%</div>
                <div className="text-[10px] text-muted-foreground">MoM</div>
              </div>
            </div>
          </div>
        );
      
      case "funnel-chart":
        return (
          <div>
            <FunnelChart
              title="Conversion Funnel"
              stages={funnelStages}
            />
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-muted rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-foreground">2.0%</div>
                <div className="text-[10px] text-muted-foreground">Overall CVR</div>
              </div>
              <div className="bg-muted rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-foreground">+45%</div>
                <div className="text-[10px] text-muted-foreground">vs Last Quarter</div>
              </div>
            </div>
          </div>
        );

      case "gauge-indicator":
        return (
          <div className="space-y-4">
            <GaugeIndicator
              title="Conversion Score"
              value={gaugeValue}
              maxValue={100}
              unit="%"
            />
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-muted rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-foreground">4.2s</div>
                <div className="text-[10px] text-muted-foreground">Load Time</div>
              </div>
              <div className="bg-muted rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-foreground">89</div>
                <div className="text-[10px] text-muted-foreground">PageSpeed</div>
              </div>
              <div className="bg-muted rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-foreground">A+</div>
                <div className="text-[10px] text-muted-foreground">Grade</div>
              </div>
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
