class Shapes {
    constructor(){
        this.color = ''
    }
    colorSet(color){
        this.color = color;
    }
}

class Circle extends shapes {
    generate(){
        return `<circle cx="150" cy="150" r=150" fill="${this.color}"/>`
    }
}

class Triangle extends shapes {
    generate(){
        return `<polygon points = "0,0 150,150 300,0 fill="${this.color}"/>`
    }  
}

class Square extends shapes {
    generate(){
        return `<rect x="0" y="0" width="300" height="300" fill="${this.color}"/>`
    }  
};
module.exports = {Circle, Triangle, Square}