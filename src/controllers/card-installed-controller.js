import cardInstalledLogger from '../logging/card-installed-logger'
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const cardInstalledController = async (req, res) => {
  const DAFTRA_API_KEY = process.env.DAFTRA_API_KEY;
  const DAFTRA_API_BASE_URL = `${process.env.DAFTRA_API_BASE_URL}/clients`;
  const data = req.body.data

  const headers = {
    "APIKEY": DAFTRA_API_KEY,
    "Content-Type": "application/json",
    "Accept": "application/json"
  };

  const body = {
    "Client": {
      "is_offline": true,
      "client_number": "0000715",
      "staff_id": 1,
      "business_name": `${data.cardholder_first_name}`,
      "first_name": data.cardholder_first_name,
      "last_name": "test",
      "email": data.cardholder_email,
      "password": "securepassword123",
      "address1": "123 Main St",
      "address2": "Apt 4B",
      "city": "Springfield",
      "state": "IL",
      "postal_code": "62701",
      "phone1": "+1-217-555-1234",
      "phone2": "+1-217-555-5678",
      "country_code": "SA",
      "notes": "Client prefers email communication.",
      "active_secondary_address": true,
      "secondary_name": "Jane Doe",
      "secondary_address1": "456 Elm St",
      "secondary_address2": "Suite 101",
      "secondary_city": "Springfield",
      "secondary_state": "IL",
      "secondary_postal_code": "62702",
      "secondary_country_code": "USA",
      "default_currency_code": "USD",
      "follow_up_status": "Pending",
      "category": "Retail",
      "group_price_id": 5,
      "timezone": -6,
      "bn1": "Business Number 1",
      "bn1_label": "BN1 Label",
      "bn2_label": "BN2 Label",
      "bn2": "Business Number 2",
      "starting_balance": 1000.00,
      "type": 2,
      "birth_date": "1980-05-10",
      "gender": 1,
      "map_location": "31.287550225000018,30.075630726558106,5",
      "credit_limit": 5000,
      "credit_period": 30
    }
  };

  try {
    cardInstalledLogger.log({
      level: 'info',
      message: req
    });

    const response = await axios.post(DAFTRA_API_BASE_URL, body, { headers });
    res.status(201).json({ result: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default cardInstalledController
