const {
    errors: { NotFoundError, ConflictError, ContentError },
    validators: { stringValidator }
} = require('com')
const { Users, Offers } = require('../models')
/**
 * Retrieves all user offers
 * 
 * @param {string} userId The user id
 */
module.exports = function searchOffers(userId, keyWord, location) {
    stringValidator(userId, 'userId')
    if (keyWord) stringValidator(keyWord, 'key word')
    if (location) stringValidator(location, 'location')
    if (!keyWord && !location) throw new ContentError('introduce a field to search')

    return Users.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            if (user.role !== 'worker')
                throw new ConflictError('user is not a company')

            return Offers.find({
                $and: [
                    { 'published': true },
                    {
                        $or: [
                            { 'modality': 'remote' },
                            { 'location': location || '' }
                        ]
                    }
                ],
                $or: [
                    { 'title': keyWord || '' },
                    {
                        'experiences.position': [keyWord] || ''
                    },
                    {
                        'studies.title': [keyWord] || ''
                    },
                    {
                        'knowledges.title': [keyWord] || ''
                    },
                    {
                        'languages.language': [keyWord] || ''
                    }
                ]
            }).sort({ createDate: -1 }).populate('user', 'name').select('-__v').lean()
        })
        .then(offers => {
            offers.forEach(offer => {
                if (!offer.user.id) {
                    offer.user.id = offer.user._id.toString()
                    delete offer.user._id
                }

                offer.id = offer._id.toString()
                delete offer._id
            })

            return offers
        })
}