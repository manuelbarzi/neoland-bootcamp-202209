const { Schema } = require('mongoose')

module.exports = new Schema({
    position: {
        type: String,
    },
    industry: {
        type: String,
        enum: ['Arts, Entertainment and Recreation', 'Accommodation and Food Services', 'Administration, Business Support and Waste Management Services', 'Educational Services', 'Other Services (except Public Administration)', 'Utilities', 'Professional, Scientific and Technical Services', 'Transportation and Warehousing', 'Construction', 'Information', 'Wholesale Trade', 'Finance and Insurance', 'Retail Trade', 'Healthcare and Social Assistance', 'Agriculture, Forestry, Fishing and Hunting', 'Real Estate and Rental and Leasing', 'Real Estate and Rental and Leasing', 'Manufacturing', 'Specialist Engineering, Infrastructure and Contractors', 'Retail Market Reports', 'Industrial Machinery, Gas and Chemicals', 'Online Retail', 'Consumer Goods and Services', 'Technology', 'Life Sciences']
    },
    years: {
        type: String
    }
})