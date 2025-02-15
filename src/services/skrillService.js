const axios = require("axios");
require("dotenv").config();

const sendSkrillPayment = async (to, amount) => {
    if (!process.env.SKRILL_API_KEY || !process.env.SKRILL_SECRET) {
        console.warn("Skrill API keys are missing. Skrill payments are disabled.");
        return { error: "Skrill payments are not available." };
    }

    try {
        const response = await axios.post("https://api.skrill.com/payment", {
            apiKey: process.env.SKRILL_API_KEY,
            secret: process.env.SKRILL_SECRET,
            recipient: to,
            amount,
        });

        console.log(`Skrill payment successful: ${response.data}`);
        return response.data;
    } catch (error) {
        console.error("Skrill payment failed:", error.response ? error.response.data : error.message);
        throw error;
    }
};

module.exports = { sendSkrillPayment };
