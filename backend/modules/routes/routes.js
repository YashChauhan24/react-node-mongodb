import express from "express";
import libraryRouter from "./books.Routes.js";

const Router = express();
Router.use("/library", libraryRouter);

export default Router;
