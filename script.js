
function Inverted_Right_Angle() {
    for (let i = 6; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}
Inverted_Right_Angle()