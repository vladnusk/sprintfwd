import { useEffect } from 'react'
// routes
import { useParams } from 'react-router-dom'
// redux
import { getUserList } from '../../redux/slices/user'
import { useDispatch, useSelector } from '../../redux/store'
// components
import Table from '../../components/Table'
import Card from '../../components/Card'
// configs
import { TEAM_DETAILS } from './config'

export default function TeamDetails() {
  const { id } = useParams()
    const dispatch = useDispatch()
    const { userList } = useSelector((state) => state.user);
    const filteredMembers = userList.filter(member => member.team.id.toString() === id)
  

useEffect(() => {
dispatch(getUserList())
}, [dispatch])

  return (
    <Card>
    <h1>Team members</h1>
      <Table columns={TEAM_DETAILS} data={filteredMembers} />
    </Card>
  )
}
