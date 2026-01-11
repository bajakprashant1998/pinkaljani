import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
}

interface PieChartCardProps {
  data: DataPoint[];
  title?: string;
  height?: number;
  showLegend?: boolean;
  innerRadius?: number;
  showLabels?: boolean;
}

const PieChartCard = ({
  data,
  title,
  height = 250,
  showLegend = true,
  innerRadius = 0,
  showLabels = false,
}: PieChartCardProps) => {
  const colors = [
    "hsl(220, 70%, 45%)",
    "hsl(220, 80%, 55%)",
    "hsl(220, 90%, 60%)",
    "hsl(160, 84%, 39%)",
    "hsl(45, 93%, 47%)",
    "hsl(199, 89%, 48%)",
  ];

  const renderCustomLabel = ({ name, percent }: { name: string; percent: number }) => {
    return `${name}: ${(percent * 100).toFixed(0)}%`;
  };

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
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            isAnimationActive={true}
            animationDuration={1500}
            label={showLabels ? renderCustomLabel : undefined}
            labelLine={showLabels}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={colors[index % colors.length]}
                stroke="hsl(var(--card))"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
            formatter={(value: number) => [`${value}%`, 'Value']}
          />
          {showLegend && (
            <Legend 
              layout="vertical"
              align="right"
              verticalAlign="middle"
              iconType="circle"
            />
          )}
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default PieChartCard;
