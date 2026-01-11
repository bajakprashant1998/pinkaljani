import { motion } from "framer-motion";

interface DonutSegment {
  value: number;
  color: string;
  label: string;
}

interface DonutChartProps {
  segments: DonutSegment[];
  size?: number;
  strokeWidth?: number;
  centerLabel?: string;
  centerValue?: string;
}

const DonutChart = ({
  segments,
  size = 160,
  strokeWidth = 24,
  centerLabel,
  centerValue,
}: DonutChartProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const total = segments.reduce((acc, seg) => acc + seg.value, 0);
  
  let accumulatedOffset = 0;

  const colorMap: Record<string, string> = {
    primary: "hsl(var(--primary))",
    accent: "hsl(var(--accent))",
    secondary: "hsl(var(--secondary))",
    muted: "hsl(var(--muted-foreground))",
    success: "hsl(160, 84%, 39%)",
    warning: "hsl(45, 93%, 47%)",
    info: "hsl(199, 89%, 48%)",
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {segments.map((segment, index) => {
          const segmentLength = (segment.value / total) * circumference;
          const offset = accumulatedOffset;
          accumulatedOffset += segmentLength;

          return (
            <motion.circle
              key={segment.label}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={colorMap[segment.color] || segment.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
              strokeDashoffset={-offset}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {centerValue && (
          <span className="text-2xl font-bold text-foreground">{centerValue}</span>
        )}
        {centerLabel && (
          <span className="text-xs text-muted-foreground">{centerLabel}</span>
        )}
      </div>
    </div>
  );
};

export default DonutChart;
