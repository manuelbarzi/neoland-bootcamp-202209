import { useParams } from 'react-router-dom'
import Profile from './Profile'
import MyProfile from './MyProfile'
import log from '../utils/coolog'

export default () => {
    log.info('ConditionalProfile -> render')

    const { targetUserId } = useParams()

    return targetUserId === sessionStorage.userId? <MyProfile /> : <Profile />
}