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
        className="text-3xl md:text-5xl lg:text-[4rem] xl:text-[5rem] font-bold leading-[1.1] tracking-tight max-w-4xl"
        style={{ color: '#3C096C' }}
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {content && (
        <motion.p
          className="text-lg md:text-xl max-w-2xl mt-4"
          style={{ color: '#5A189A' }}
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
            <li key={i} className="flex items-start gap-3 text-base md:text-lg" style={{ color: '#3C096C' }}>
              <span className="mt-0.5 shrink-0" style={{ color: '#9D4EDD' }}>
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
            <div key={i} className="rounded-xl p-5" style={{ background: 'rgba(157,78,221,0.07)', border: '1px solid rgba(157,78,221,0.2)' }}>
              <p className="font-semibold text-sm mb-2" style={{ color: '#3C096C' }}>— {o.q}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#5A189A' }}>{o.a}</p>
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
          <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(157,78,221,0.25)' }}>
            <div className="grid grid-cols-2 px-5 py-2 text-xs uppercase tracking-wider" style={{ background: 'rgba(157,78,221,0.12)', color: '#7B2FBE' }}>
              <span>Критерий</span>
              <span>Как закрыт</span>
            </div>
            {criteria.map((c, i) => (
              <div key={i} className="grid grid-cols-2 px-5 py-3 text-sm" style={{ borderTop: '1px solid rgba(157,78,221,0.1)', background: i % 2 === 0 ? 'rgba(224,170,255,0.08)' : 'transparent' }}>
                <span className="font-medium" style={{ color: '#3C096C' }}>{c.criterion}</span>
                <span style={{ color: '#5A189A' }}>{c.how}</span>
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
            size="lg"
            className="text-white text-base font-semibold transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #9D4EDD 0%, #5A189A 100%)', border: 'none' }}
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
