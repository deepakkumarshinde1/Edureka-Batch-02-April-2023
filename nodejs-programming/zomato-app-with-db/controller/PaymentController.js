const Razorpay = require("razorpay");
const crypto = require("crypto");
const KEY_ID = "rzp_test_RB0WElnRLezVJ5";
const KEY_SECRET = "VLMCIrqKxRMNR9EcRcbL2UG8";
let instance = new Razorpay({
  key_id: KEY_ID,
  key_secret: KEY_SECRET,
});
let PaymentController = {
  createOrder: (request, response) => {
    let { amount } = request.body;
    var options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11",
    };
    instance.orders.create(options, function (err, order) {
      if (err) {
        response.status(500).send({
          status: false,
          message: "Unable to create a order",
        });
      } else {
        response.send({
          status: true,
          order,
        });
      }
    });
  },
  verifyPayment: (request, response) => {
    let { payment_id, order_id, signature } = request.body;

    let payDetails = order_id + "|" + payment_id;
    let generated_signature = crypto
      .createHmac("sha256", KEY_SECRET)
      .update(payDetails.toString())
      .digest("hex");

    console.log("gen_signature", generated_signature);
    console.log("cli_signature", signature);

    if (generated_signature == signature) {
      response.send({
        status: true,
        message: "Payment Done",
      });
    } else {
      response.status(500).send({
        status: false,
        message: "Payment Fail",
      });
    }
  },
};

module.exports = PaymentController;
