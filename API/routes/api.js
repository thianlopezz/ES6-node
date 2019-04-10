import { Router } from "express";

const router = new Router();
// API WORKS
router.get("/", (req, res) => {
  res.send("Go on Little Batman!");
});

router.get("/helloWorld/:hello?", (req, res) => {
  res.send("GET, Hello world!" + (req.params.hello || ""));
});

router.post("/helloWorld", (req, res) => {
  res.send("POST, Hello world! " + JSON.stringify(req.body));
});

router.put("/helloWorld", (req, res) => {
  res.send("PUT, Hello world! " + JSON.stringify(req.body));
});

export default router;
