import { Routes, Route } from 'react-router-dom'

import { AshOfWar } from './AshOfWar'
import { BellBearings } from './BellBearings'
import { Bosses } from './Bosses'
import { Cookbooks } from './Cookbooks'
import { CrystalTears } from './CrystalTears'
import { Gestures } from './Gestures'
import { Incantations } from './Incantations'
import { Sorceries } from './Sorceries'
import { SitesOfGrace } from './SitesOfGrace'
import { Talismans } from './Talismans'
import { useAppContext } from '../Context/AppContext'

function Home () {
  return <div>Home</div>
}

export function Checklists () {
  const { state: { selectedCharacter } } = useAppContext()

  console.log('selected character:', selectedCharacter)

  if (!selectedCharacter) {
    return <div>Select a character</div>
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ash-of-war" element={<AshOfWar />} />
      <Route path="/bell-bearings" element={<BellBearings />} />
      <Route path="/bosses" element={<Bosses />} />
      <Route path="/cookbooks" element={<Cookbooks />} />
      <Route path="/crystal-tears" element={<CrystalTears />} />
      <Route path="/gestures" element={<Gestures />} />
      <Route path="/incantations" element={<Incantations />} />
      <Route path="/sorceries" element={<Sorceries />} />
      <Route path="/sites-of-grace" element={<SitesOfGrace />} />
      <Route path="/talismans" element={<Talismans />} />
    </Routes>
  )
}
