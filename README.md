# aws-lambda-edge-prestashop-images
Lambda@Edge function for CloudFront to retrieve Prestashop product images from S3 bucket

### Prerequisites
1. Create Lambda function in us-east-1 region with a CloudFront trigger.
2. Upload product images to S3 bucket with same structure as Prestashop:
```
img/p/9/0/8
or
p/9/0/8
```
