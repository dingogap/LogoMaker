const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

describe('Circle', () => {
    it('should generate a Circle Logo with colour: blue; text: PDM & textColour: white', () => {
        const circle = new Circle('grey', 'PDM', 'gold');
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="grey" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="gold">PDM</text>
</svg>`
        );
    });
});

describe('Square', () => {
    it('should generate a Square Logo with colour: blue; text: PDM & textColour: white', () => {
        const square = new Square('grey', 'PDM', 'gold');
        expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="20" width="160" height="160" fill="grey"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="gold">PDM</text>
</svg>`
        );
    });
});

describe('Triangle', () => {
    it('should generate a Triangle Logo with colour: blue; text: PDM & textColour: white', () => {
        const triangle = new Triangle('grey', 'PDM', 'gold');
        expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="95, 20 95, 180 255, 100" fill="grey"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="gold">PDM</text>
</svg>`
        );
    });
});
