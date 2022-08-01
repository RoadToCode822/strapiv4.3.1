module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'accd5307c5c6cdc4a34b623101c30729'),
  },
});
