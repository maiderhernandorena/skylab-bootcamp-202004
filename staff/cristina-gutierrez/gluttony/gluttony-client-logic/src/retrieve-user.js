require("gluttony-commons/polyfills/string")
const { utils: { call } } = require("gluttony-commons")

module.exports = function (token) {
    String.validate.notVoid(token)

    return call('GET', `${process.env.API_URL}/users`,
        undefined,
        { 'Authorization': `Bearer ${token}` })
        .then(({ status, body }) => {
            if (status === 200) {
                return JSON.parse(body)
            } else {
                const { error } = JSON.parse(body)

                throw new Error(error)
            }
        })
}