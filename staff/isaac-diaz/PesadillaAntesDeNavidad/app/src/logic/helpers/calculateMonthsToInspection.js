import TarjetVehicle from "../../components/TarjetVehicle"

export default function calculateMonthsToInspection(nextInspectionDate) {
    var now = new Date
    // var months = -1
    var monthInspectionDate = nextInspectionDate.getMonth()
    var monthNow = now.getMonth()

    var status = monthInspectionDate - monthNow

    if (status <= 1) {
        return <TarjetVehicle className='border-red-600' />
    } else if (status <= 3) {
        return <TarjetVehicle className='border-yellow-500' />
    } else if (status > 3)
    return <TarjetVehicle className='border-green-500' />
}