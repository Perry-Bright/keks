import { ReactNode } from "react";
import { motion } from "motion/react";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

export function FadeInView({
  children,
  delay = 0,
  className = "",
  id,
}: FadeInViewProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
