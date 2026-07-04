import { GiBabyBottle, GiKidneys, GiWaveCrest } from 'react-icons/gi'
import { FaHeartbeat, FaLungs, FaStethoscope } from 'react-icons/fa'

const map = {
  baby: GiBabyBottle,
  organ: GiKidneys,
  pelvis: FaHeartbeat,
  wave: GiWaveCrest,
  thyroid: FaLungs,
  general: FaStethoscope,
}

export default function ServiceIcon({ name, className = '' }) {
  const Icon = map[name] || FaStethoscope
  return <Icon className={className} />
}
