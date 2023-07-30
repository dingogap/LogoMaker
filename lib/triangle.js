const Shape = require('./shape.js')
const svgStructure = require('./svgStructure.js')

class Triangle extends Shape {
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

        // Polygon point placement to create Triangle
        const x1 = "95"
        const y1 = "20"
        const x2 = "95"
        const y2 = "180"
        const x3 = "255"
        const y3 = "100"

        // Settings for SVG Text: position, font size & anchor, colour & content
        const x = "150";
        const y = "125";
        const fontSize = "60";
        const textAnchor = "middle";

        return svgStructure.svgOpen(width, height)
            + svgStructure.svgTriangle(x1, y1, x2, y2, x3, y3, this.colour)
            + svgStructure.svgText(x, y, fontSize, textAnchor, this.textColour, this.text)
            + svgStructure.svgClose()
    };
};

module.exports = Triangle;

