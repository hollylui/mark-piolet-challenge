const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const WollplatzModel = require("../../models/knitting/WollplatzModel");

const basicURL = `https://www.wollplatz.de`;

// show all woolen balls from wollplatz

router.get("/", async (req, res) => {
  try {
    const showAll = await WollplatzModel.find();
    return res.status(200).send(showAll);
  } catch (err) {
    return res.status(404).send(err);
  }
});

// add  woolen balls from wollplatz
router.post("/add/:brand/:name", async (req, res) => {
  try {
    const { brand, name } = req.params;
    const { data } = await axios.get(`${basicURL}/wolle/${brand}/${name}`);
    const $ = cheerio.load(data);

    const price = $(".buy-price .product-price-amount").html();
    const needleSize = $(
      "#pdetailTableSpecs  table  tbody  tr:nth-child(5) td:nth-child(2)"
    ).html();
    const composition = $(
      "#pdetailTableSpecs  table  tbody  tr:nth-child(4) td:nth-child(2)"
    ).html();

    const addContent = {
      brand: brand,
      name: name,
      price: price,
      "needle size": needleSize,
      composition: composition,
    };

    const newProduct = await WollplatzModel.create(addContent);

    return res.status(200).send(newProduct);
  } catch (err) {
    return res.status(404).send(err);
  }
});

module.exports = router;
