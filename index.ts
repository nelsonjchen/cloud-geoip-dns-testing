import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";


// Create a Google Cloud resource (Storage Bucket)
const bucket = new gcp.storage.Bucket("my-bucket", {
  location: "US",
});

// Export the DNS name of the bucket
export const bucketName = bucket.url;