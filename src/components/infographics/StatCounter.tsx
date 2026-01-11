import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: LucideIcon;
  color?: string;
  duration?: number;
}

const StatCounter = ({
  value,
  suffix = "",
  prefix = "",
  label,
  icon: Icon,
  color = "from-primary to-accent",
  duration = 2,
}: StatCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const spring = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0
  });
  
  const display = useTransform(spring, (current) => 
    `${prefix}${Math.round(current)}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 text-center">
        {Icon && (
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
        <motion.div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
          {display}
        </motion.div>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
};

export default StatCounter;
