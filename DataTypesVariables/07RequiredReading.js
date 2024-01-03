function requiredReading(pagesBook, pagesPerHour, days) {
    let totalTimeToReadBook = pagesBook / pagesPerHour;
    let reqHoursPerDay = totalTimeToReadBook / days;
    console.log(reqHoursPerDay);
}

requiredReading(212, 20, 2)