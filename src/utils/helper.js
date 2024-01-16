export const getMonth = (monthInNum) => {
    switch (monthInNum) {
        case 0:
            return "Jan";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Apr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Aug";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        case 11:
            return "Dec";
        default:
            return "Invalid month";
    }
};

export const getTimeSlot = (timeKey) => {
    switch (Number(timeKey)) {
        case 1:
            return "00:00 - 01:30";
        case 2:
            return "01:30 - 03:00";
        case 3:
            return "03:00 - 04:30";
        case 4:
            return "04:30 - 06:00";
        case 5:
            return "06:00 - 07:30";
        case 6:
            return "07:30 - 09:00";
        case 7:
            return "09:00 - 10:30";
        case 8:
            return "10:30 - 12:00";
        case 9:
            return "12:00 - 13:30";
        case 10:
            return "13:30 - 15:00";
        case 11:
            return "15:00 - 16:30";
        case 12:
            return "16:30 - 18:00";
        case 13:
            return "18:00 - 19:30";
        case 14:
            return "19:30 - 21:00";
        case 15:
            return "21:00 - 22:30";
        case 16:
            return "22:30 - 00:00";
        default:
            return null;
    }
};
