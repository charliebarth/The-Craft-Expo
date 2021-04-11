import { useEffect } from 'react'
import { getDemos } from '../redux/actions/demoActions'
import { useSelector, useDispatch } from 'react-redux'
import DemoCrafts from '../components/demoCrafts'

export default function DemosContainer() {

  const demos = useSelector(state => state.demos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDemos())
  }, []);

  return (
    <main>
      <div id="demos-container">
        <div id="demos-sub-container">
        
        <div id="demos-header-container">
          <h1 id="demos-header">Crafts</h1>
        </div>

        {demos.length > 0 ? <DemoCrafts demos={demos} /> : null }

        </div>
      </div>
    </main>
  )
}