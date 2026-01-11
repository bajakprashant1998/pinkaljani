import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface DataPoint {
  name: string;
  [key: string]: string | number;
}

interface LineConfig {
  dataKey: string;
  color: string;
  name?: string;
  dashed?: boolean;
}

interface LineChartCardProps {
  data: DataPoint[];
  lines: LineConfig[];
  title?: string;
  showGrid?: boolean;
  showLegend?: boolean;
  height?: number;
  animated?: boolean;
}

const LineChartCard = ({
  data,
  lines,
  title,
  showGrid = true,
  showLegend = true,
  height = 200,
  animated = true,
}: LineChartCardProps) => {
  const colorMap: Record<string, string> = {
    primary: "hsl(220, 70%, 45%)",
    accent: "hsl(220, 90%, 55%)",
    success: "hsl(160, 84%, 39%)",
    warning: "hsl(45, 93%, 47%)",
    info: "hsl(199, 89%, 48%)",
    secondary: "hsl(220, 60%, 15%)",
  };

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
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          {showGrid && (
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(var(--border))" 
              vertical={false}
            />
          )}
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
          {showLegend && (
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
            />
          )}
          {lines.map((line, index) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              name={line.name || line.dataKey}
              stroke={colorMap[line.color] || line.color}
              strokeWidth={2}
              strokeDasharray={line.dashed ? "5 5" : undefined}
              dot={{ fill: colorMap[line.color] || line.color, strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              isAnimationActive={animated}
              animationDuration={1500}
              animationBegin={index * 200}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default LineChartCard;
