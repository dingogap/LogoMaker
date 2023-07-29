const Shape = require('./shape.js')
const svgStructure = require('./svgStructure.js')

class Square extends Shape {
    constructor(colour, text, textColour) {
        super(colour, text, textColour);
    };

    render() {
        // SVG width and height parameters
        const width = "300";
        const height = "200";

        // Circle Parameters: position & radius
        const rectangleWidth = "200";
        const rectangleHeight = "200";

        // Settings for SVG Text: position, font size & anchor, colour & content
        const x = "100";
        const y = "125";
        const fontSize = "60";
        const textAnchor = "middle";
        return svgStructure.svgTop(width, height)
            + svgStructure.svgSquare(rectangleWidth, rectangleHeight, this.colour)
            + svgStructure.svgText(x, y, fontSize, textAnchor, this.textColour, this.text)
            + svgStructure.svgBottom()
    };
};

module.exports = Square;