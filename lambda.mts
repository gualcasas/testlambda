import type { S3Handler } from "aws-lambda";

export const handler: S3Handler = async (event, _context) => {
    try {
        //console.log('Received event:', JSON.stringify(event, null, 2));

        // Get the object from the event and show its content type
        // const bucket = event.Records[0].s3.bucket.name;
        // const key = decodeURIComponent(
        //     event.Records[0].s3.object.key.replace(/\+/g, " ")
        // );

        // fetch("https", {
        //     method: "POST"
        // })
        const record = event.Records[0]
        console.log(JSON.stringify(record));
    } catch (err) {
        console.log(err);
        const message = "Some error message";
        console.log(message);
        throw new Error(message);
    }
};

// Sample event.Record[number]
// {
//     "eventVersion": "2.1",
//     "eventSource": "aws:s3",
//     "awsRegion": "us-east-1",
//     "eventTime": "2023-05-23T02:36:32.290Z",
//     "eventName": "ObjectCreated:Put",
//     "userIdentity": {
//         "principalId": "AGQ5ODT6SU86I"
//     },
//     "requestParameters": {
//         "sourceIPAddress": "187.190.224.87"
//     },
//     "responseElements": {
//         "x-amz-request-id": "PVXEXMGHMN74H5DJ",
//         "x-amz-id-2": "WvPRHW9AUVzH6/PcfizJda0JCQZ39YXHQUlXIPpQA5xV0zlHpHo7xZkElEcu+lImWqlr7DSOV6IN2FFhyqGyLeHl/gh/bHFI"
//     },
//     "s3": {
//         "s3SchemaVersion": "1.0",
//         "configurationId": "2b9fc368-874c-4e6c-9654-eac5f7b2356b",
//         "bucket": {
//             "name": "lambda-test-gual",
//             "ownerIdentity": {
//                 "principalId": "AGQ5ODT6SU86I"
//             },
//             "arn": "arn:aws:s3:::lambda-test-gual"
//         },
//         "object": {
//             "key": "Screenshot+from+2023-04-14+11-10-06.png",
//             "size": 15977,
//             "eTag": "d40cef7fcc53fb002bcb355c0d87dfb9",
//             "sequencer": "00646C26B041C86B37"
//         }
//     }
// }
