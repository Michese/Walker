const mover = {

    getDirection() {
        availableDirection = [2,4,6,8];
        while(true){
            const answer = parseInt(prompt("Напишите число (2, 4, 6 или 8), соответствующее направлению игрока."))
            if(isNaN(answer)){
                return null;
            } else if(!availableDirection.includes(answer)){
                continue;
            }
            return answer;
        }
    },
    getNewPoint(direction) {
        newPoint = {
            x: player.x,
            y: player.y,
        };
        switch(direction) {
            case 2:
                if(newPoint.y < config.rowsCount - 1){
                    newPoint.y++;
                }
                break;
            case 4:
                if(newPoint.x !== 0){
                    newPoint.x--;
                }
                break;
            case 6:
                if(newPoint.x < config.colsCount - 1){
                    newPoint.x++;
                }
                break;
            case 8:
                if(newPoint.y !== 0){
                    newPoint.y--;
                }
                break;
        }
        return newPoint;
    }
};