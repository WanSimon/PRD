const proxy: Record<string, Record<string, any>> = {
  development: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      secure: false,
      ws: true,
    },
  },
};

export default proxy;
