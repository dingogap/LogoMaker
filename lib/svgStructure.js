// Generic code to generate SVG Logo Shapes. This code will not need to be changed if dimensions change

// SVG definition
exports.svgOpenTag = (width, height) => {
    return `<svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`
}
// Generate Circle
exports.svgCircle = (cx,cy,r,logoColour) => {
    return `
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="${logoColour}" />`
}

// Generate Square
exports.svgSquare = (x, y, width, height, logoColour) => {
    return `
    <rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${logoColour}"/>`
}

// Generate Triangle
exports.svgTriangle = (x1, y1, x2, y2, x3, y3,logoColour) => {
    return `
    <polygon points="${x1}, ${y1} ${x2}, ${y2} ${x3}, ${y3}" fill="${logoColour}"/>`
}

// SVG Text tag: position, font size, anchor, colour & content
exports.svgText = (x,y,fs,ta,textColour,text) => {
    return `
    <text x="${x}" y="${y}" font-size="${fs}" text-anchor="${ta}" fill="${textColour}">${text}</text>`
}

// SVG closing tag
exports.svgCloseTag = () => {
    return `
</svg>`
}
