// Check to see what type of logo will be generated and instantiate the appropriate type
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

// 
function buildLogo(data) {
    let newLogo
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

    // Call the render method to build the new logo
    return newLogo.render()
}

module.exports = buildLogo;