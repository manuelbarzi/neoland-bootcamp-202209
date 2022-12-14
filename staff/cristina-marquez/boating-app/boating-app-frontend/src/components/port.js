import { useNavigate } from "react-router-dom";

function Port({ portInfo }) {
    const navigate = useNavigate()

    function convertToDms(dd, isLng) {
        var dir = dd < 0
            ? isLng ? 'W' : 'S'
            : isLng ? 'E' : 'N';

        var absDd = Math.abs(dd);
        var deg = absDd | 0;
        var frac = absDd - deg;
        var min = (frac * 60) | 0;
        var sec = frac * 3600 - min * 60;
        // Round it to 2 decimal points.
        sec = Math.round(sec * 100) / 100;
        return deg + "°" + min + "'" + sec + '"' + dir;
    }

    function createNewBooking() {
        navigate('/bookings')
    }

    return (
        <>
            <div className="flex flex-col bg-white font-sans shadow-md">
                <div className="h-60 bg-cover bg-center" style={{ backgroundImage: `url(${portInfo.imagePath})` }}>

                </div>
                <div className="p-6">
                    <div>
                        <h2 className="text-darkblue font-bold text-lg">{portInfo.name}</h2>
                        <div>
                            <div><span className="text-midblue font-semibold">Location:</span>
                                <div className="text-midblue font-thin"> {convertToDms(portInfo.coordinates[0], false)}
                                    <span className="ml-1"></span>
                                    {convertToDms(portInfo.coordinates[1], true)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="text-midblue font-semibold">Address:</span>
                        <p className="text-midblue font-thin">
                            {portInfo.street},
                            {portInfo.postalCode},
                            {portInfo.town},
                            {portInfo.city},
                            {portInfo.country}
                        </p>
                        <span className="text-midblue font-semibold">Contact Number:</span>
                        <p className="text-midblue font-thin"> {portInfo.contactNumber}</p>
                        <span className="text-midblue font-semibold">VHF channel:</span>
                        <p className="text-midblue font-thin">{portInfo.VHF}</p>

                    </div>

                    <div>
                        <span className="text-midblue font-semibold">Berths:</span>
                        <p className="text-midblue font-thin">{portInfo.berths}</p>

                        {/* facilities icons */}
                    </div>
                    <div className="flex justify-center">
                        <button onClick={createNewBooking} className="bg-midgreen text-white rounded-lg text-md p-2 ">Book now</button>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Port