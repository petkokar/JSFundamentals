function vacation(groupCount, groupType, day) {

    let totalPrice = 0;

    switch (day) {
        case 'Friday':
            switch (groupType) {
                case 'Students':
                    totalPrice = groupCount * 8.45;
                    if (groupCount >= 30) {
                        totalPrice -= totalPrice * 0.15;
                    }
                    break;
                case 'Business':
                    totalPrice = groupCount * 10.90;
                    if (groupCount >= 100) {
                        totalPrice = totalPrice - 10 * 10.90
                    }
                    break;
                case 'Regular':
                    totalPrice = groupCount * 15;
                    if (groupCount >= 10 && groupCount <= 20) {
                        totalPrice -= totalPrice * 0.05;
                    }
                    break;
            }
            break;
        case 'Saturday':
            switch (groupType) {
                case 'Students':
                    totalPrice = groupCount * 9.80;
                    if (groupCount >= 30) {
                        totalPrice -= totalPrice * 0.15;
                    }
                    break;
                case 'Business':
                    totalPrice = groupCount * 15.60;
                    if (groupCount >= 100) {
                        totalPrice = totalPrice - 10 * 10.90
                    }
                    break;
                case 'Regular':
                    totalPrice = groupCount * 20;
                    if (groupCount >= 10 && groupCount <= 20) {
                        totalPrice -= totalPrice * 0.05;
                    }
                    break;
            }
            break;
        case 'Sunday':
            switch (groupType) {
                case 'Students':
                    totalPrice = groupCount * 10.46;
                    if (groupCount >= 30) {
                        totalPrice -= totalPrice * 0.15;
                    }
                    break;
                case 'Business':
                    totalPrice = groupCount * 16;
                    if (groupCount >= 100) {
                        totalPrice = totalPrice - 10 * 10.90
                    }
                    break;
                case 'Regular':
                    totalPrice = groupCount * 22.50;
                    if (groupCount >= 10 && groupCount <= 20) {
                        totalPrice -= totalPrice * 0.05;
                    }
                    break;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday")