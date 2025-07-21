const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  trackingNumber: { type: String, required: true, unique: true },
  status: { type: String, required: true }, // Örn: "Dağıtımda", "Teslim Edildi", "Yolda"
  lastUpdate: { type: Date, default: Date.now },
  history: [
    {
      date: Date,
      status: String,
      location: String
    }
  ]
});

module.exports = mongoose.model('Shipment', shipmentSchema); 