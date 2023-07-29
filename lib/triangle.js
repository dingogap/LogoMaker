const Shape = require('./shape.js')
const svgStructure = require('./svgStructure.js')

class Triangle extends Shape {
    constructor(colour, text, textColour) {
        super(colour, text, textColour);
    };

    render() {
        // SVG width and height parameters
        const width = "200";
        const height = "200";


        // Settings for SVG Text: position, font size & anchor, colour & content
        const x = "100";
        const y = "185";
        const fontSize = "70";
        const textAnchor = "middle";

        return svgStructure.svgTop(width, height) + `
            <polygon points="100, 15 200, 200 0, 200" fill="${this.colour}"/>`
            + svgStructure.svgText(x, y, fontSize, textAnchor, this.textColour, this.text)
            + svgStructure.svgBottom()
    };
};

module.exports = Triangle;
