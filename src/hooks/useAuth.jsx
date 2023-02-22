import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../pages/Auth/api/authSlice'
import jwtDecode from 'jwt-decode'

const useAuth = () => {
  const token = useSelector(selectCurrentToken)
  let isStudent = false
  let isAdmin = false
  let status = 'TUTOR'

  if (token) {
    const decoded = jwtDecode(token)
    const { role } = decoded.userInfo

    isStudent = role.includes('STUDENT')
    isAdmin = role.includes('ADMIN')

    if (isStudent) status = 'STUDENT'
    if (isAdmin) status = 'ADMIN'

    return { role, status, isStudent, isAdmin }
  }

  return { role: '', status, isStudent, isAdmin }
}
export default useAuth
