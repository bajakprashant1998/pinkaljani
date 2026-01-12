import { motion } from "framer-motion";

interface FunnelStage {
  label: string;
  value: number;
  color: string;
}

interface FunnelChartProps {
  title: string;
  stages: FunnelStage[];
}

const FunnelChart = ({ title, stages }: FunnelChartProps) => {
  const maxValue = Math.max(...stages.map(s => s.value));
  
  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
      <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
      <div className="space-y-2">
        {stages.map((stage, index) => {
          const widthPercent = (stage.value / maxValue) * 100;
          const conversionRate = index > 0 
            ? ((stage.value / stages[index - 1].value) * 100).toFixed(1)
            : "100";
          
          return (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground">{stage.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-foreground">
                    {stage.value.toLocaleString()}
                  </span>
                  {index > 0 && (
                    <span className="text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                      {conversionRate}%
                    </span>
                  )}
                </div>
              </div>
              <div className="h-8 bg-muted/30 rounded-lg overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${widthPercent}%` }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-lg flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(90deg, ${stage.color}, ${stage.color}dd)`,
                    marginLeft: `${(100 - widthPercent) / 2}%`,
                    marginRight: `${(100 - widthPercent) / 2}%`
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Funnel visualization overlay */}
      <div className="mt-4 flex justify-center">
        <svg width="120" height="80" viewBox="0 0 120 80" className="text-primary/20">
          <motion.path
            d="M10 5 L110 5 L90 75 L30 75 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          {stages.map((_, index) => {
            const y = 5 + (70 / stages.length) * index;
            const leftX = 10 + (20 / stages.length) * index;
            const rightX = 110 - (20 / stages.length) * index;
            return (
              <motion.line
                key={index}
                x1={leftX}
                y1={y}
                x2={rightX}
                y2={y}
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: index * 0.2 }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default FunnelChart;
