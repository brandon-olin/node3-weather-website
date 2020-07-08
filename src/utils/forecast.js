const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=b3c7db56fa882442d197c3efc9bb47b5&query=${latitude},${longitude}&units=f`
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather server!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees. It feels like ${body.current.feelslike}. The humidity is ${body.current.humidity}%.`)
        }
    })
}

module.exports = forecast;