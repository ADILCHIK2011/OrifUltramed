import { motion } from 'framer-motion'

/**
 * Signature visual element: an ultrasound-pulse waveform line.
 * Echoes the rhythm of an ultrasound Doppler trace / heartbeat line —
 * grounded directly in the clinic's own instruments.
 */
export default function PulseWave({ className = '', color = '#0F6E8C', height = 64 }) {
  const path =
    'M0,32 L60,32 L80,32 L92,10 L108,54 L124,4 L140,60 L156,32 L200,32 L260,32 L280,12 L296,52 L312,6 L328,58 L344,32 L400,32 L460,32 L480,10 L496,54 L512,4 L528,60 L544,32 L600,32 L660,32 L680,12 L696,52 L712,6 L728,58 L744,32 L800,32'

  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 800 64"
        preserveAspectRatio="none"
        style={{ width: '100%', height }}
      >
        <motion.path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.3 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}
