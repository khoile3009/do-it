const {parseUserInfo} = require("./authentication");

const User = require("../models/user");
const {convertTimeToMillisecond} = require("./time");

const parseJobInfo = async (job) => {
    const user = await User.findById(job.creator);
    if(user === null){
        return null;
    }
    console.log(user)
    return {
        creator:  parseUserInfo(user),
        title: job.title,
        description: job.description,
        hourly: job.hourly,
        pay_amount: job.pay_amount,
        pay_currency: job.pay_currency,
        start_time: convertTimeToMillisecond(job.start_time),
        end_time: convertTimeToMillisecond(job.end_time),
        tags: job.tags,
        created_at: convertTimeToMillisecond(job.created_at)
    }
}

module.exports = {
    parseJobInfo
}


