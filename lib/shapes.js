class Shapes {
    constructor(){
        this.color = '';
    }
    setColor(color){
        this.color = color;
    };
};

class Circle extends Shapes {
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
};

class Triangle extends Shapes {
    render(){
        return `<polygon points = "150,0 50,200 250,200" fill="${this.color}"/>`
    }  
};

class Square extends Shapes {
    render(){
        return `<rect x="0" y="0" width="200" height="200" fill="${this.color}"/>`
    }  
};

module.exports = {Circle, Triangle, Square}