let speed;
const speedLimit = 70;
const kmPerDemeritPoint = 5;
const demeritPointLimit = 12;
function speedChecker (speed) {
    if (speed<= speedLimit) {
        console.log("Ok")
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = excessSpeed / kmPerDemeritPoint;
        if (demeritPoints <= demeritPointLimit) {
            console.log ('Points:' + demeritPoints );
        }
        else {
            console.log ('License suspended');
        }
    }

}
