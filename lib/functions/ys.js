const imagemin = require('imagemin')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminPngquant = require('imagemin-pngquant')

module.exports = async () => {
  const files = await imagemin(['./images/*.{jpg,png}'], {
    destination: './minImages',
    plugins: [
        imageminJpegtran(),
        imageminPngquant({
            quality: [0.6, 0.8]
        })
    ]
  })
}