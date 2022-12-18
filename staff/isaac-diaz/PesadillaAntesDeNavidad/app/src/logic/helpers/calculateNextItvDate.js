export default function calculateNextItvDate(licenseDate, lastInspectionDate) {
    var now = new Date
    var yearNow = now.getFullYear()

    var licenseYear = licenseDate.getFullYear()
    var lastInspectionYear = lastInspectionDate.getFullYear()

    var age = yearNow - licenseYear

    if (age < 4) {
        if (!lastInspectionDate) {
            var licenseMonth = licenseDate.getMonth()
            var licenseDay = licenseDate.getDate()

            var nextInspectionYear = licenseYear + 4

            var nextInspectionDate = new Date(nextInspectionYear, licenseMonth, licenseDay)

            return nextInspectionDate
        } else if (lastInspectionDate) {
            var licenseMonth = licenseDate.getMonth()
            var licenseDay = licenseDate.getDate()

            var nextInspectionYear = lastInspectionYear + 2

            var nextInspectionDate = new Date(nextInspectionYear, licenseMonth, licenseDay)

            return nextInspectionDate
        }
    } else if (age < 10) {
        if (!lastInspectionDate) {
            var licenseMonth = licenseDate.getMonth()
            var licenseDay = licenseDate.getDate()

            var nextInspectionYear = licenseYear + 4

            var nextInspectionDate = new Date(nextInspectionYear, licenseMonth, licenseDay)

            return nextInspectionDate
        } else if (lastInspectionDate) {
            var licenseMonth = licenseDate.getMonth()
            var licenseDay = licenseDate.getDate()

            var nextInspectionYear = lastInspectionYear + 2

            var nextInspectionDate = new Date(nextInspectionYear, licenseMonth, licenseDay)

            return nextInspectionDate
        }
    } else {
        if (!lastInspectionDate) {
            var licenseMonth = licenseDate.getMonth()
            var licenseDay = licenseDate.getDate()

            var nextInspectionYear = licenseYear + 4

            var nextInspectionDate = new Date(nextInspectionYear, licenseMonth, licenseDay)

            return nextInspectionDate
        } else if (lastInspectionDate) {
            var licenseMonth = licenseDate.getMonth()
            var licenseDay = licenseDate.getDate()

            var nextInspectionYear = lastInspectionYear + 1

            var nextInspectionDate = new Date(nextInspectionYear, licenseMonth, licenseDate)

            return nextInspectionDate
        }
    }
}
