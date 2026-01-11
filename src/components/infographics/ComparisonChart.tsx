import { motion } from "framer-motion";

interface ComparisonData {
  label: string;
  before: number;
  after: number;
}

interface ComparisonChartProps {
  data: ComparisonData[];
  beforeLabel?: string;
  afterLabel?: string;
  color?: string;
}

const ComparisonChart = ({
  data,
  beforeLabel = "Before",
  afterLabel = "After",
  color = "from-primary to-accent",
}: ComparisonChartProps) => {
  const maxValue = Math.max(...data.flatMap((d) => [d.before, d.after]));

  return (
    <div className="w-full space-y-4">
      {/* Legend */}
      <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
          <span className="text-sm text-muted-foreground">{beforeLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${color}`} />
          <span className="text-sm text-muted-foreground">{afterLabel}</span>
        </div>
      </div>

      {data.map((item, index) => (
        <div key={item.label} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">{item.label}</span>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">{item.before}%</span>
              <span className="text-primary font-semibold">{item.after}%</span>
            </div>
          </div>
          <div className="relative h-8 bg-muted rounded-lg overflow-hidden">
            {/* Before bar */}
            <motion.div
              className="absolute inset-y-0 left-0 bg-muted-foreground/20 rounded-lg"
              initial={{ width: 0 }}
              whileInView={{ width: `${(item.before / maxValue) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
            {/* After bar */}
            <motion.div
              className={`absolute inset-y-1 left-1 bg-gradient-to-r ${color} rounded-md`}
              initial={{ width: 0 }}
              whileInView={{ width: `${(item.after / maxValue) * 100 - 2}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComparisonChart;
