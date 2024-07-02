var express = require('express');
var router = express.Router();
const subscriberSchema=require("../models/subscriberModel")
const {sendMail}=require("../utils/sendmail")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});
router.post('/subscribe', async function(req, res, next) {
try {
  // const data = req.body
  await sendMail(req,res)
  const subscriber = await new subscriberSchema(req.body)
  await subscriber.save()
  // console.log(subscriber);
  // res.send(`Welcome ${data.username} you are now subscribed to our page`)
} catch (error) {
  console.log(error.message);
}

});

module.exports = router;
