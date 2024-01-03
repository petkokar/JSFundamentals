function movingTarget (input) {

    let targetsSeq = input.shift().split(' ').map(Number);
    let commands = input.shift();
    
    while (commands !== 'End') {
        let targetSeqLength = targetsSeq.length;
        let currAction = commands.split(' ');
        let command = currAction.shift();
        let index = Number(currAction.shift());

        switch(command) {
            case 'Shoot':
                let power = Number(currAction.shift());
                if (index >= 0 && index < targetSeqLength) {
                    targetsSeq[index] -= power;
                    if (targetsSeq[index] <= 0) {
                        targetsSeq.splice(index, 1);
                    }
                }
            break;
            case 'Add':
                let value = Number(currAction.shift());
                if (index >= 0 && index < targetSeqLength) {
                    targetsSeq.splice(index, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
            break;
            case 'Strike':
                let radius = Number(currAction.shift());
                // const radiusRange = 1 + (radius * 2);
                const radiusStart = index - radius;
                const radiusEnd = 1 + (radius * 2);
                if (radiusStart >= 0 && radiusStart < targetSeqLength && radiusEnd >= 0 && radiusEnd < targetSeqLength) {
                    targetsSeq.splice(radiusStart, radiusEnd);
                } else {
                    console.log("Strike missed!" );
                }
            break;
        }

        commands = input.shift();
    }
    
    if (targetSeqLength > 0) {
        console.log(targetsSeq.join('|'));
    }
}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])

