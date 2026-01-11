import { motion } from "framer-motion";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
  Cell,
} from "recharts";

interface DataPoint {
  x: number;
  y: number;
  z?: number;
  name?: string;
}

interface ScatterPlotProps {
  data: DataPoint[];
  title?: string;
  xLabel?: string;
  yLabel?: string;
  color?: string;
  showGrid?: boolean;
  height?: number;
  bubbles?: boolean;
}

const ScatterPlot = ({
  data,
  title,
  xLabel = "X Axis",
  yLabel = "Y Axis",
  color = "primary",
  showGrid = true,
  height = 200,
  bubbles = false,
}: ScatterPlotProps) => {
  const colorMap: Record<string, string> = {
    primary: "hsl(220, 70%, 45%)",
    accent: "hsl(220, 90%, 55%)",
    success: "hsl(160, 84%, 39%)",
    warning: "hsl(45, 93%, 47%)",
    info: "hsl(199, 89%, 48%)",
  };

  const baseColor = colorMap[color] || color;
  
  // Generate color variations for each point
  const getPointColor = (index: number) => {
    const hue = 220 + (index * 15) % 60;
    return `hsl(${hue}, 70%, ${45 + (index * 5) % 20}%)`;
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
        <ScatterChart margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          {showGrid && (
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(var(--border))" 
            />
          )}
          <XAxis 
            type="number"
            dataKey="x" 
            name={xLabel}
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          />
          <YAxis 
            type="number"
            dataKey="y"
            name={yLabel}
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          />
          {bubbles && (
            <ZAxis 
              type="number" 
              dataKey="z" 
              range={[50, 400]} 
            />
          )}
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
            formatter={(value: number, name: string) => [value, name]}
          />
          <Scatter 
            data={data} 
            isAnimationActive={true}
            animationDuration={1500}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={bubbles ? getPointColor(index) : baseColor}
                fillOpacity={0.8}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ScatterPlot;
