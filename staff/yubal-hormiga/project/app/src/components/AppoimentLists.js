import log from '../utils/coolog'
import AppoimentList from './AppoimentList'

function AppoimentLists({appoiments}) {
  log.info('AppoimentLists -> render')
  return <>
    <div>

      <AppoimentList /> 
      <AppoimentList /> 
      <AppoimentList /> 
      <AppoimentList /> 

    </div>

  </>

}

export default AppoimentLists