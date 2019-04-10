"use strict";
let snake = {
    body: null,
    direction: null,
    lastStepDirection: null,

    init(startPoint, direction) {
        this.body = [startPoint];
        this.direction = direction;
        this.lastStepDirection = direction;
    },

    getNextStepHeadPoint() {
        let firstPoint = this.body[0];

        switch (this.direction) {
            case 'up':
                if(firstPoint.y <= 0) { //  если змейка выходит за границу поля  
                firstPoint.y = 20       // то её начальная точка будет  с другой стороны поля
                };
                return {x: firstPoint.x, y: firstPoint.y - 1};
            case 'down':
                if(firstPoint.y >= 20) {
                firstPoint.y = 0;
                };
                return {x: firstPoint.x, y: firstPoint.y + 1};
            case 'right':
                if(firstPoint.x >= 20) {
                firstPoint.x = 0
                };
                return {x: firstPoint.x + 1, y: firstPoint.y};
            case 'left' :
                if(firstPoint.x <= 0) {
                firstPoint.x = 20
                };
                return {x: firstPoint.x - 1, y: firstPoint.y};
        }
    },

    makeStep() {
        //[{x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}]

        //[{x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}]

        //[{x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}]
        this.lastStepDirection = this.direction;
        this.body.unshift(this.getNextStepHeadPoint());
        this.body.pop();
    },

    incrementBody() {
        let lastBodyIdx = this.body.length - 1;
        let lastBodyPoint = this.body[lastBodyIdx];
        let lastBodyPointClone = Object.assign({}, lastBodyPoint);
        this.body.push(lastBodyPointClone);
    },

    setDirection(direction) {
        this.direction = direction;
    },

    isBodyPoint(point) {
        return this.body.some(snakePoint => snakePoint.x === point.x && snakePoint.y === point.y);
    },
};
