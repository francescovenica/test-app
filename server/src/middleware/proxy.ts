import { createProxyMiddleware } from "http-proxy-middleware";

const proxy = createProxyMiddleware({
  target: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  changeOrigin: true,
});

export default proxy;
