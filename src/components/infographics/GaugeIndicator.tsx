import { motion } from "framer-motion";

interface GaugeIndicatorProps {
  title: string;
  value: number;
  maxValue?: number;
  unit?: string;
  thresholds?: {
    low: number;
    medium: number;
    high: number;
  };
}

const GaugeIndicator = ({ 
  title, 
  value, 
  maxValue = 100, 
  unit = "%",
  thresholds = { low: 33, medium: 66, high: 100 }
}: GaugeIndicatorProps) => {
  const percentage = (value / maxValue) * 100;
  const rotation = (percentage / 100) * 180 - 90; // -90 to 90 degrees
  
  const getColor = () => {
    if (percentage <= thresholds.low) return "hsl(var(--destructive))";
    if (percentage <= thresholds.medium) return "hsl(var(--warning, 45 93% 47%))";
    return "hsl(var(--primary))";
  };

  const getStatus = () => {
    if (percentage <= thresholds.low) return "Needs Improvement";
    if (percentage <= thresholds.medium) return "Good";
    return "Excellent";
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
      <h4 className="text-sm font-semibold text-foreground mb-4 text-center">{title}</h4>
      
      <div className="relative w-40 h-24 mx-auto">
        {/* Background arc */}
        <svg className="w-full h-full" viewBox="0 0 160 90">
          {/* Gray background arc */}
          <path
            d="M 20 80 A 60 60 0 0 1 140 80"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="12"
            strokeLinecap="round"
          />
          
          {/* Colored segments */}
          <motion.path
            d="M 20 80 A 60 60 0 0 1 60 26"
            fill="none"
            stroke="hsl(var(--destructive) / 0.3)"
            strokeWidth="12"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.path
            d="M 60 26 A 60 60 0 0 1 100 26"
            fill="none"
            stroke="hsl(45 93% 47% / 0.3)"
            strokeWidth="12"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.path
            d="M 100 26 A 60 60 0 0 1 140 80"
            fill="none"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="12"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          
          {/* Active progress arc */}
          <motion.path
            d="M 20 80 A 60 60 0 0 1 140 80"
            fill="none"
            stroke={getColor()}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray="188.5"
            initial={{ strokeDashoffset: 188.5 }}
            animate={{ strokeDashoffset: 188.5 - (percentage / 100) * 188.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        
        {/* Needle */}
        <motion.div
          className="absolute bottom-0 left-1/2 origin-bottom"
          style={{ width: 4, height: 50, marginLeft: -2 }}
          initial={{ rotate: -90 }}
          animate={{ rotate: rotation }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{ background: `linear-gradient(to top, ${getColor()}, ${getColor()}88)` }}
          />
          <div 
            className="absolute bottom-0 left-1/2 w-3 h-3 -ml-1.5 rounded-full"
            style={{ backgroundColor: getColor() }}
          />
        </motion.div>
        
        {/* Center circle */}
        <div className="absolute bottom-0 left-1/2 w-6 h-6 -ml-3 bg-card rounded-full border-2 border-border shadow-lg" />
      </div>
      
      {/* Value display */}
      <motion.div 
        className="text-center mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="text-3xl font-bold" style={{ color: getColor() }}>
          {value}{unit}
        </div>
        <div className="text-xs text-muted-foreground mt-1">{getStatus()}</div>
      </motion.div>
      
      {/* Legend */}
      <div className="flex justify-center gap-4 mt-4 text-[10px]">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-destructive" />
          <span className="text-muted-foreground">Low</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full" style={{ background: "hsl(45 93% 47%)" }} />
          <span className="text-muted-foreground">Medium</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-muted-foreground">High</span>
        </div>
      </div>
    </div>
  );
};

export default GaugeIndicator;
