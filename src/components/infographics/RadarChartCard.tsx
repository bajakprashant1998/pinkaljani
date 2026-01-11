import { motion } from "framer-motion";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface DataPoint {
  subject: string;
  value: number;
  fullMark?: number;
  value2?: number;
}

interface RadarChartCardProps {
  data: DataPoint[];
  title?: string;
  color?: string;
  height?: number;
  showLegend?: boolean;
  dual?: boolean;
}

const RadarChartCard = ({
  data,
  title,
  color = "primary",
  height = 250,
  showLegend = false,
  dual = false,
}: RadarChartCardProps) => {
  const primaryColor = "hsl(220, 70%, 45%)";
  const accentColor = "hsl(220, 90%, 55%)";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {title && (
        <h4 className="font-semibold text-foreground mb-4 text-center">{title}</h4>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
          />
          <Radar
            name="Current"
            dataKey="value"
            stroke={primaryColor}
            fill={primaryColor}
            fillOpacity={0.3}
            strokeWidth={2}
            isAnimationActive={true}
            animationDuration={1500}
          />
          {dual && (
            <Radar
              name="Target"
              dataKey="value2"
              stroke={accentColor}
              fill={accentColor}
              fillOpacity={0.2}
              strokeWidth={2}
              strokeDasharray="5 5"
              isAnimationActive={true}
              animationDuration={1500}
              animationBegin={500}
            />
          )}
          {showLegend && <Legend />}
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default RadarChartCard;
