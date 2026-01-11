import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
  value2?: number;
}

interface AreaChartCardProps {
  data: DataPoint[];
  title?: string;
  color?: string;
  showGrid?: boolean;
  height?: number;
  gradient?: boolean;
  dual?: boolean;
}

const AreaChartCard = ({
  data,
  title,
  color = "primary",
  showGrid = true,
  height = 200,
  gradient = true,
  dual = false,
}: AreaChartCardProps) => {
  const primaryColor = "hsl(220, 70%, 45%)";
  const accentColor = "hsl(220, 90%, 55%)";
  const gradientId = `areaGradient-${Math.random().toString(36).substr(2, 9)}`;
  const gradientId2 = `areaGradient2-${Math.random().toString(36).substr(2, 9)}`;

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
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={primaryColor} stopOpacity={0.4} />
              <stop offset="95%" stopColor={primaryColor} stopOpacity={0} />
            </linearGradient>
            {dual && (
              <linearGradient id={gradientId2} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={accentColor} stopOpacity={0.4} />
                <stop offset="95%" stopColor={accentColor} stopOpacity={0} />
              </linearGradient>
            )}
          </defs>
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
          <Area
            type="monotone"
            dataKey="value"
            stroke={primaryColor}
            strokeWidth={2}
            fill={gradient ? `url(#${gradientId})` : primaryColor}
            fillOpacity={gradient ? 1 : 0.2}
          />
          {dual && (
            <Area
              type="monotone"
              dataKey="value2"
              stroke={accentColor}
              strokeWidth={2}
              fill={gradient ? `url(#${gradientId2})` : accentColor}
              fillOpacity={gradient ? 1 : 0.2}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default AreaChartCard;
