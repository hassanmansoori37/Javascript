// switch case


// let dayInWeek = 'Sat';

// switch (dayInWeek) {
//     case 'Sat':
//         console.log("its holiday");
//         break;

//         case 'Sun':
//             console.log("its also holiday");
//             break;

//     default:
//         console.log("So sad its working day");
//                 break;
// }

let dayInWeek;
let today = new Date();
let day = today.getDay();
console.log(day);

if(day === 1){
    dayInWeek = 'Mon'
}
else if(day === 2){
    dayInWeek = 'Tue'
}
else if(day === 3){
    dayInWeek = 'Wed'
}
else if(day === 4){
    dayInWeek = 'Thu'
}
else if(day === 5){
    dayInWeek = 'Fri'
}
if(day === 6){
    dayInWeek = 'Sat'
}
else {
    dayInWeek = 'Sun'
}

switch (dayInWeek) {
    case 'Sat':
        console.log("its holiday");
        break;

        case 'Sun':
            console.log("its also holiday");
            break;

            case 'Mon':
            console.log("its Monday");
            break;

            case 'Tue':
            console.log("its Tuesday");
            break;

            case 'Wed':
            console.log("its Wednesday");
            break;

            case 'Thu':
            console.log("its Thursday");
            break;

            case 'Friday':
            console.log("its Friday");
            break;

    default:
        console.log("So sad its working day");
                break;
}



