export type AmplifyDependentResourcesAttributes = {
    "function": {
        "AdminQueries913cfd52": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "auth": {
        "userPoolGroups": {
            "adminGroupRole": "string",
            "nonadminGroupRole": "string"
        },
        "thesatguysauth": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
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
        "assetstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}