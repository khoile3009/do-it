const convertMillisecondToTime = (millisecond) => {
    try{
        return new Date(parseInt(millisecond));
    }
    catch{
        return null
    }
}

const convertTimeToMillisecond = (time) => {
    try{
        return time.getTime();
    }
    catch{
        return null
    }
}

module.exports = {
    convertMillisecondToTime,
    convertTimeToMillisecond
}