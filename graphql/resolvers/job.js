const Job = require("../models/job");
const {convertMillisecondToTime} = require("../utils/time");
const {parseJobInfo} = require("../utils/job");

const job = {
    Query: {
        jobs: async(parent, args, context) => {
            const jobs = await Job.find()
            console.log(jobs)
        }
    },
    Mutation: {
        createJob: async(parent, args, context) => {
 
            if(context.user === null){
                throw new AuthenticationError("Invalid token");
            }
            args.jobInput.start_time = convertMillisecondToTime(args.jobInput.start_time);
            args.jobInput.end_time = convertMillisecondToTime(args.jobInput.end_time);
            const job = await Job.create({
                ...args.jobInput,
                creator: context.user.id,
            })
            return parseJobInfo(job);
        }
    }
}

module.exports = job;