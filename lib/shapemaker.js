function makeShapes(answer){
    
    if(answer.shape === "circle")
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${answer.logoColor}" />
        <text x="150" y="110" text-anchor="middle" font-size="35" fill="${answer.textColor}">${answer.text}</text>
        </svg>`
    
        if(answer.shape === "triangle")
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points = "150,0 50,200 250,200" fill="${answer.logoColor}"/>
        <text x="150" y="140" text-anchor="middle" font-size="35" fill="${answer.textColor}">${answer.text}</text>
        </svg>`
   
    if(answer.shape === "square")
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="200" height="200" fill="${answer.logoColor}"/>
        <text x="100" y="100" text-anchor="middle" font-size="35" fill="${answer.textColor}">${answer.text}</text>
        </svg>`
};
module.exports = makeShapes;