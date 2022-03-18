import { useEffect } from 'react'
// redux
import { getTeamList } from '../../redux/slices/team'
import { useDispatch, useSelector } from '../../redux/store'
// components
import Table from '../../components/Table'
import Card from '../../components/Card'
// configs
import { TEAMS_CONFIG } from './config'

export default function Teams() {
    const dispatch = useDispatch()
    const { teamList } = useSelector((state) => state.team);
    
useEffect(() => {
dispatch(getTeamList())
}, [dispatch])

  return (
    <Card>
    <h1>Teams</h1>
      <Table columns={TEAMS_CONFIG} data={teamList} />
    </Card>
  )
}
