export type AmplifyDependentResourcesAttributes = {
    "function": {
        "AdminQueries2aca606a": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "auth": {
        "userPoolGroups": {
            "thesatguysadminGroupRole": "string",
            "thesatguysmoderatorGroupRole": "string",
            "thesatguysuserGroupRole": "string"
        },
        "thesatguysauth": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "AdminQueries": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "storage": {
        "thesatguyss3": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}