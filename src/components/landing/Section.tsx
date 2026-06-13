import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, bullets, objections, criteria }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-y-auto">
      {subtitle && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-3xl md:text-5xl lg:text-[4rem] xl:text-[5rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {content && (
        <motion.p
          className="text-lg md:text-xl max-w-2xl mt-4 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}

      {bullets && (
        <motion.ul
          className="mt-6 space-y-3 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-300 text-base md:text-lg">
              <span className="mt-0.5 shrink-0 text-[#FF4D00]">
                <Icon name={b.icon || "CheckCircle"} size={20} />
              </span>
              <span>{b.text}</span>
            </li>
          ))}
        </motion.ul>
      )}

      {objections && (
        <motion.div
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {objections.map((o, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-5 bg-white/5">
              <p className="text-white font-semibold text-sm mb-2">— {o.q}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{o.a}</p>
            </div>
          ))}
        </motion.div>
      )}

      {criteria && (
        <motion.div
          className="mt-6 max-w-3xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-2 bg-white/10 px-5 py-2 text-xs text-neutral-400 uppercase tracking-wider">
              <span>Критерий</span>
              <span>Как закрыт</span>
            </div>
            {criteria.map((c, i) => (
              <div key={i} className={`grid grid-cols-2 px-5 py-3 text-sm border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                <span className="text-white font-medium">{c.criterion}</span>
                <span className="text-neutral-400">{c.how}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors text-base"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
