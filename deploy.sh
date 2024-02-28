DOMAIN=donggyun.com

# Build
npm run build

#Clean S3 static assets
aws s3 rm s3://${DOMAIN}/static/js/ --recursive
aws s3 rm s3://${DOMAIN}/static/css/ --recursive

# Upload the artifact
aws s3 sync build s3://${DOMAIN} --exclude "icons/*"

# Refresh CloudFront
distirubtion_id=`aws cloudfront list-distributions | jq -r ".DistributionList.Items[]| select(.Aliases | .Items | index(\"${DOMAIN}\")) | .Id"`
aws cloudfront create-invalidation --distribution-id $distirubtion_id --paths "/index.html" "/data/*"
