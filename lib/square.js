const Shape = require('./shape.js')
const svgStructure = require('./svgStructure.js')

class Square extends Shape {
    constructor(colour, text, textColour) {
        super(colour, text, textColour);
        this.colour = colour;
        this.text = text;
        this.textColour = textColour;
    };

    render() {
        // SVG width and height parameters
        const width = "300";
        const height = "200";

        // Circle Parameters: position & radius
        const cx = "70";
        const cy = "20";
        const rectangleWidth = "160";
        const rectangleHeight = "160";

        // Settings for SVG Text: position, font size & anchor, colour & content
        const x = "150";
        const y = "125";
        const fontSize = "60";
        const textAnchor = "middle";
        return svgStructure.svgOpen(width, height)
            + svgStructure.svgSquare(cx, cy,rectangleWidth, rectangleHeight, this.colour)
            + svgStructure.svgText(x, y, fontSize, textAnchor, this.textColour, this.text)
            + svgStructure.svgClose()
    };
};

module.exports = Square;