import { errors, validators } from 'com'

const { LengthError, NotFoundError, UnexpectedError, ConflictError } = errors
const { stringValidator, languagesValidator, experienceValidator, knowledgeValidator, cvStudyValidator } = validators


function createCurriculum(token, { title, description, photo, languages, studies, experiences, knowledges } = {}) {
    stringValidator(token, 'token')
    if (title) stringValidator(title, 'title')
    if (description) stringValidator(description, 'description')
    if (photo) stringValidator(photo, 'photo')
    if (languages) languagesValidator(languages)
    if (studies) cvStudyValidator(studies)
    if (experiences) experienceValidator(experiences)
    if (knowledges) knowledgeValidator(knowledges)

    const body = {}

    if (title) body.title = title
    if (description) body.description = description
    if (photo) body.photo = photo
    if (languages) body.languages = languages
    if (studies) body.studies = studies
    if (experiences) body.experiences = experiences
    if (knowledges) body.knowledges = knowledges

    return fetch(`http://localhost:80/curriculums`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.status === 200) {
                return res.json()
                    .then(curriculumId => curriculumId)
            } else if (res.status === 400) {
                return res.json()
                    .then(error => {
                        if (error.error.includes('is not a')) throw new TypeError(error.error)
                        else if (error.error.includes('length')) throw new LengthError(error.error)
                    })
            } else if (res.status === 404) {
                return res.json()
                    .then(error => {
                        throw new NotFoundError(error.error)
                    })
            } else if (res.status === 409)
                return res.json()
                    .then(error => {
                        throw new ConflictError(error.error)
                    })
            else if (res.status < 500)
                throw new UnexpectedError('client error')
            else
                throw new UnexpectedError('server error')
        })
}

export default createCurriculum