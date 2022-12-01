// path: ./config/plugins.js

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: "AKIATZAAKJSRYCECHFM4",
        secretAccessKey: "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",
        region: "us-east-1",
        params: {
          Bucket: "game-ecommerce-moril",
        },
      },
    },
  },
  // ...
});
