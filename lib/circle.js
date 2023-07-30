const Shape = require('./shape.js')
const svgStructure = require('./svgStructure.js')

class Circle extends Shape {
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
        const cx = "150";
        const cy = "100";
        const r = "80";

        // Settings for SVG Text: position, font size & anchor, colour & content
        const x = "150";
        const y = "125";
        const fontSize = "60";
        const textAnchor = "middle";

        // build the SVG logo
        return svgStructure.svgOpenTag(width, height)
            + svgStructure.svgCircle(cx, cy, r, this.colour)
            + svgStructure.svgText(x, y, fontSize, textAnchor, this.textColour, this.text)
            + svgStructure.svgCloseTag()
    };
};

module.exports = Circle;
  