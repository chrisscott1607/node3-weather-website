const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1335ac8a3d7cd02b62f80420769625e4&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, {body} ) => {
       if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees outside. It feels like " + body.current.feelslike + ', with '  + body.current.wind_speed + " mph winds blowing towards the " + body.current.wind_dir + ", a " + (body.current.precip * 100) + "% chance of rain, and a humidity of " + body.current.humidity + ".")
        }
    })
}
module.exports = forecast