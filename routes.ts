import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/products.ts";

import { testRoute } from './controllers/test.ts'

const router = new Router();

router.get("/", testRoute)
  .get("/products", getProducts)
  .get("/products/:id", getProduct)
  .post("/products", addProduct)
  .put("/products/:id", updateProduct)
  .delete("/products/:id", deleteProduct);

export default router;
