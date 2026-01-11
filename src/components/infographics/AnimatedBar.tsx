import { motion } from "framer-motion";

interface AnimatedBarProps {
  value: number;
  maxValue?: number;
  label: string;
  color?: string;
  showValue?: boolean;
  suffix?: string;
  delay?: number;
}

const AnimatedBar = ({
  value,
  maxValue = 100,
  label,
  color = "from-primary to-accent",
  showValue = true,
  suffix = "%",
  delay = 0,
}: AnimatedBarProps) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {showValue && (
          <motion.span
            className="text-sm font-semibold text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.5 }}
          >
            {value}{suffix}
          </motion.span>
        )}
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
};

export default AnimatedBar;
