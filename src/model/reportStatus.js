const mongoose = require("mongoose");

const crimeReportStatus = new mongoose.Schema({
    reportStatus: [
        {
          type: {
            type: String,
            enum: ["reported", "pending", "investigating", "case closed"],
            default: "reported",
          },
          date: {
            type: Date,
          },
          isCompleted: {
            type: Boolean,
            default: false,
          },
        },
      ],
})


module.exports = mongoose.model("reportStatus", crimeReportStatus);
