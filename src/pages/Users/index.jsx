import { useEffect } from 'react'
// redux
import { getUserList } from '../../redux/slices/user'
import { useDispatch, useSelector } from '../../redux/store'
// components
import Table from '../../components/Table'
import Card from '../../components/Card'
// configs
import { MEMBERS_CONFIG } from './config'

export default function Users() {
    const dispatch = useDispatch()
    const { userList } = useSelector((state) => state.user);
    
useEffect(() => {
dispatch(getUserList())
}, [dispatch])

  return (
    <Card>
    <h1>Members</h1>
      <Table columns={MEMBERS_CONFIG} data={userList} />
    </Card>
  )
}
