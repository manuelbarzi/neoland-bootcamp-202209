import log from '../utils/coolog'


function AppoimentList() {
    log.info('AppoimentList -> render')

    return <>
        <div className='rounded-lg shadow-md flex gap-5 pb-1'>
            <p className=' font-semibold text-lg flex flex-row'> Cita:<spam> Médico</spam></p>
            <p className=' font-semibold text-lg '> 10/10/2023</p>
            <p className=' font-semibold text-lg '> 00:00 </p>
            <p className=' w-full font-semibold text-lg '> Cita con medico de cabecera para ralizar analítica Cita con medico de cabecera para ralizar analítica </p>

        </div>

    </>
}

export default AppoimentList