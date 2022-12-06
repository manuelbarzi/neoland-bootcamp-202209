import log from '../utils/coolog'
import AppointmentList from './AppointmentList'

function AppoimentLists({appointments}) {
  log.info('AppoimentLists -> render')
  return <>
    <div>

      <AppointmentList /> 
      <AppointmentList /> 
      <AppointmentList /> 
      <AppointmentList /> 

    </div>

  </>

}

export default AppoimentLists