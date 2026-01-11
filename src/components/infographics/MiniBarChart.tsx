import { motion } from "framer-motion";

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface MiniBarChartProps {
  data: DataPoint[];
  height?: number;
  showLabels?: boolean;
  color?: string;
}

const MiniBarChart = ({
  data,
  height = 120,
  showLabels = true,
  color = "from-primary to-accent",
}: MiniBarChartProps) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-2" style={{ height }}>
        {data.map((point, index) => {
          const barHeight = (point.value / maxValue) * 100;
          return (
            <div key={point.label} className="flex-1 flex flex-col items-center gap-2">
              <motion.div
                className="relative w-full group"
                initial={{ height: 0 }}
                whileInView={{ height: `${barHeight}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div
                  className={`w-full h-full bg-gradient-to-t ${point.color || color} rounded-t-lg relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {point.value}%
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
      {showLabels && (
        <div className="flex justify-between gap-2 mt-2">
          {data.map((point) => (
            <span key={point.label} className="flex-1 text-xs text-muted-foreground text-center truncate">
              {point.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MiniBarChart;
