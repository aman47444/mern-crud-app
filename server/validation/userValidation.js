const validator = require('validator');
const isEmpty = require('../validation/isEmpty')
module.exports = function validateUser(data) {
    let err = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.company = !isEmpty(data.company) ? data.company : '';

    if (validator.isEmpty(data.name)) {
        err.name = 'Name field required'
    }
    if (validator.isEmpty(data.email)) {
        err.email = 'Email field required'
    }
    if (validator.isEmpty(data.company)) {
        err.company = 'company field is required'
    }

    return {
        err,
        isValid: isEmpty(err)
    }
}