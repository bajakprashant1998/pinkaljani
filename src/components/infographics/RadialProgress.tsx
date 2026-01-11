import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface RadialSegment {
  value: number;
  label: string;
  icon?: LucideIcon;
}

interface RadialProgressProps {
  segments: RadialSegment[];
  size?: number;
  color?: string;
}

const RadialProgress = ({
  segments,
  size = 200,
  color = "from-primary to-accent",
}: RadialProgressProps) => {
  const center = size / 2;
  const segmentAngle = 360 / segments.length;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Background circle */}
      <div 
        className="absolute inset-0 rounded-full border-4 border-muted"
        style={{ width: size, height: size }}
      />
      
      {/* Segments */}
      {segments.map((segment, index) => {
        const angle = (index * segmentAngle - 90) * (Math.PI / 180);
        const labelRadius = (size / 2) - 40;
        const x = center + labelRadius * Math.cos(angle);
        const y = center + labelRadius * Math.sin(angle);
        const Icon = segment.icon;

        return (
          <motion.div
            key={segment.label}
            className="absolute"
            style={{
              left: x - 28,
              top: y - 28,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} flex flex-col items-center justify-center shadow-lg`}>
              {Icon ? (
                <Icon className="w-5 h-5 text-white" />
              ) : (
                <span className="text-sm font-bold text-white">{segment.value}%</span>
              )}
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
              <span className="text-xs font-medium text-foreground">{segment.label}</span>
            </div>
          </motion.div>
        );
      })}

      {/* Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-20 h-20 rounded-full bg-card border-2 border-border shadow-md flex flex-col items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-xs text-muted-foreground">Total</span>
          <span className="text-lg font-bold text-foreground">{segments.length}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default RadialProgress;
