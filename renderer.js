let renderer = {
    map: '',
    render() {
        for (let row = 0; row < config.rowsCount; ++row) {
            for (let col = 0; col < config.colsCount; ++col) {
                if(player.y === row && player.x === col){
                    this.map += 'O ';
                } else {
                    this.map += 'X ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },
    clear() {
        console.clear();
        this.map = '';
    }
};