import { useEffect } from 'react'
import { getCrafts } from '../redux/actions/craftActions'
import { useSelector, useDispatch } from 'react-redux'
import DemoCrafts from '../components/demoCrafts'

export default function CraftsContainer() {

  const crafts = useSelector(state => state.crafts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCrafts())
  }, []);

  return (
    <main>
      <div id="demos-container">
        <div id="demos-sub-container">
        
        <div id="demos-header-container">
          <h1 id="demos-header">Crafts</h1>
        </div>

        {crafts.length > 0 ? <DemoCrafts crafts={crafts} /> : null }

        </div>
      </div>
    </main>
  )
}