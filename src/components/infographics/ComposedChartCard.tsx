import { motion } from "framer-motion";
import {
  ComposedChart,
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  bar?: number;
  line?: number;
  area?: number;
}

interface ComposedChartCardProps {
  data: DataPoint[];
  title?: string;
  height?: number;
  showBar?: boolean;
  showLine?: boolean;
  showArea?: boolean;
  showLegend?: boolean;
}

const ComposedChartCard = ({
  data,
  title,
  height = 250,
  showBar = true,
  showLine = true,
  showArea = false,
  showLegend = true,
}: ComposedChartCardProps) => {
  const primaryColor = "hsl(220, 70%, 45%)";
  const accentColor = "hsl(220, 90%, 55%)";
  const successColor = "hsl(160, 84%, 39%)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {title && (
        <h4 className="font-semibold text-foreground mb-4">{title}</h4>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="hsl(var(--border))"
            vertical={false}
          />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          {showLegend && <Legend wrapperStyle={{ paddingTop: '20px' }} />}
          {showArea && (
            <Area 
              type="monotone" 
              dataKey="area" 
              fill={successColor}
              stroke={successColor}
              fillOpacity={0.2}
              name="Area Metric"
            />
          )}
          {showBar && (
            <Bar 
              dataKey="bar" 
              fill={primaryColor} 
              radius={[4, 4, 0, 0]}
              name="Bar Metric"
              isAnimationActive={true}
              animationDuration={1500}
            />
          )}
          {showLine && (
            <Line 
              type="monotone" 
              dataKey="line" 
              stroke={accentColor}
              strokeWidth={2}
              dot={{ fill: accentColor, strokeWidth: 2, r: 4 }}
              name="Trend Line"
              isAnimationActive={true}
              animationDuration={1500}
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ComposedChartCard;
