const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function buildLogo(data) {

    switch (data.logoShape) {
        case 'Circle':
            newLogo = new Circle(data.logoColour, data.logoText, data.logoTextColour)
            break
        case 'Square':
            newLogo = new Square(data.logoColour, data.logoText, data.logoTextColour)
            break
        case 'Triangle':
            newLogo = new Triangle(data.logoColour, data.logoText, data.logoTextColour)
    }
    return newLogo.render()
}
module.exports = buildLogo;