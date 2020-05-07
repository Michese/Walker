'use strict';

let game = {

    start() {
        while(true) {
            const direction = mover.getDirection();
            if(direction === null){
                console.log("Игра окончена!");
                return;
            }
            const newPoint = mover.getNewPoint(direction);
            renderer.clear();
            player.move(newPoint);
            renderer.render();
        }
    },

    init() {
        console.log("Ваше положение на поле в виде о.");
        renderer.render();
        console.log("Чтобы начать игру, введите game.start()");
    }
};

game.init();