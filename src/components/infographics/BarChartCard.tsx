import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
  value2?: number;
}

interface BarChartCardProps {
  data: DataPoint[];
  title?: string;
  color?: string;
  showGrid?: boolean;
  height?: number;
  horizontal?: boolean;
  stacked?: boolean;
  showLabels?: boolean;
}

const BarChartCard = ({
  data,
  title,
  color = "primary",
  showGrid = true,
  height = 200,
  horizontal = false,
  stacked = false,
  showLabels = false,
}: BarChartCardProps) => {
  const primaryColor = "hsl(220, 70%, 45%)";
  const accentColor = "hsl(220, 90%, 55%)";
  
  const gradientColors = [
    "hsl(220, 70%, 45%)",
    "hsl(220, 75%, 50%)",
    "hsl(220, 80%, 55%)",
    "hsl(220, 85%, 60%)",
    "hsl(220, 90%, 55%)",
  ];

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
        <BarChart 
          data={data} 
          layout={horizontal ? "vertical" : "horizontal"}
          margin={{ top: 10, right: showLabels ? 40 : 10, left: horizontal ? 0 : -20, bottom: 0 }}
        >
          {showGrid && (
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(var(--border))" 
              horizontal={!horizontal}
              vertical={horizontal}
            />
          )}
          {horizontal ? (
            <>
              <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} width={80} />
            </>
          ) : (
            <>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
            </>
          )}
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
            cursor={{ fill: 'hsl(var(--muted))', opacity: 0.3 }}
          />
          <Bar 
            dataKey="value" 
            radius={[4, 4, 0, 0]}
            isAnimationActive={true}
            animationDuration={1500}
            stackId={stacked ? "stack" : undefined}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={gradientColors[index % gradientColors.length]} 
              />
            ))}
            {showLabels && (
              <LabelList 
                dataKey="value" 
                position={horizontal ? "right" : "top"} 
                fill="hsl(var(--foreground))"
                fontSize={12}
              />
            )}
          </Bar>
          {stacked && data[0]?.value2 !== undefined && (
            <Bar 
              dataKey="value2" 
              radius={[4, 4, 0, 0]}
              fill={accentColor}
              stackId="stack"
              isAnimationActive={true}
              animationDuration={1500}
              animationBegin={300}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default BarChartCard;
