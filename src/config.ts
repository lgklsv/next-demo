export const port = process.env.PORT || 3000;
export const host =
  process.env.NODE_ENV === "production"
    ? `next-demo-umber-xi.vercel.app/app`
    : `http://localhost:${port}`;
