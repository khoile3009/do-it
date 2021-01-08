const {gql} = require('apollo-server-express');

const job = gql`
    input JobInput{
        title: String!,
        description: String!,
        hourly: Boolean!,
        pay_amount: Float!,
        pay_currency: String!,
        start_time: String!,
        end_time: String,
        tags: [String]!
    }

    input JobQuery{
        query: String,
        hourly: Boolean,
        pay_amount_larger: Float,
        pay_amount_less: Float,
        pay_currency: String,
        start_time: String,
        end_time: String,
        tags: [String]
    }

    type JobInfo{
        title: String,
        description: String,
        hourly: Boolean,
        pay_amount: Float,
        pay_currency: String,
        start_time: String,
        end_time: String,
        tags: [String],
        creator: User,
        created_at: String
    }

    extend type Query{
        jobs(
            jobQuery: JobQuery
        ): [JobInfo]
    }

    extend type Mutation{
        createJob(
            jobInput: JobInput!
        ): JobInfo
    }
`

module.exports = job;