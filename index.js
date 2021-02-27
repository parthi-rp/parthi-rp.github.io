// speed limit => 70
// 5 => 1 point
// math.floor(1.3)
// 12 points max => suspended



function checkSpeed(speed) {

    let kmPerPoint = 5;
    let speedLimit = 70;
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    let maxPoints = 12;


    if (points == 0)
        return 'ok';
    else if (points <= maxPoints)
        return points
    else
        return 'License suspended';
}

console.log(checkSpeed(77));

