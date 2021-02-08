import express, { Request, Response, NextFunction } from "express";
import cors from "./middleware/cors";
import proxy from "./middleware/proxy";

const port = 3001;
const app = express();

app.use(cors);
app.use("/graphql", proxy);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
