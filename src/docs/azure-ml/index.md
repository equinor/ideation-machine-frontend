---
title: Azure ML endpoints
---

 # Azure Machine Learning endpoints documentation

 ## Overview

- Our definition of an Azure ML endpoint
- Our definition of an Azure ML deployment
- How to access the endpoints
- Who are not able to access endpoints

### Azure ML Endpoint definition

An Azure ML endpoint is a https path/url that provides an interface for users to send requests using input data and receive the prediction result of a trained model.  
[Read more on Microsoft Documentation](https://learn.microsoft.com/en-us/azure/machine-learning/concept-endpoints#what-are-endpoints-and-deployments)

### Azure ML deployment definition

An Azure ML deployment is the resources hosting the model that users can query via the endpoint.  
[Read more on Microsoft Documentation](https://learn.microsoft.com/en-us/azure/machine-learning/concept-endpoints#what-are-endpoints-and-deployments)

![](../../assets/docs/endpoint-concept.png)

## How to access the endpoints

There are two ways to authenticate to the endpoint:

#### Access keys

Access keys are tokens that has no expiry date.

To be able to retrieve the access keys you can either go to the Azure ML Workspace Studio and find it there. Or you can retrieve it by running this in your python notebook/script:  
`endpoint_cred = ml_client.online_endpoints.get_keys(name=endpoint_name).primary_key`

Both ways requires the following:  
1. You have logged in to your Azure account
2. You have access to the Azure Machine Learning Workspace

The disadvantage by using the access keys is that they don't expire, so if a key is 'lost' (pushed to a github repo, shared with some users over insecure channels etc..) it might end up in the wrong hands and can be used for accessing the model.

Which is why we choose to use:

#### AML tokens

AML tokens are keys that expires after some time.

This means that if a tokens gets lost, like explained above, the token will expire and so it will be worth nothing in the hands of a bad actor.  
It is still possible to use this token within the expiry time, so it's not 100% secure, but it is at least much better than a key that never expires.

To be able to retrieve the AML token you can either go to the Azure ML Workspace Studio and find it there. Or you can retrieve it by running this in your python notebook/script:  
`endpoint_cred = ml_client.online_endpoints.get_keys(name=endpoint_name).access_token`

Both ways requires the following:  
1. You have logged in to your Azure account
2. You have access to the Azure Machine Learning Workspace

## Network access

Open for 