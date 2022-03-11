module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eea48d308d02c1c8afadb50724bd6140'),
  },
});
