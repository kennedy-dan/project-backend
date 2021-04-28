const crimeReport = require("../../model/crimereport");

exports.updateReport = (req, res) => {
  crimeReport
    .updateOne(
      { "report._id": req.body.reportId, "report.reportStatus.type": req.body.type },
      {
        $set: {
          "report.$.reportStatus.$[elem]": {
            type: req.body.type,
            date: new Date(),
            isCompleted: true,
          },
        },
      },
      {
        arrayFilters: [
          {
            "elem.type": req.body.type,
          },
        {multi: true},

        ],
      },
      // {multi:true},
    )
    .exec((error, report) => {
      if (error) return res.status(400).json({ error });
      if (report) {
        res.status(200).json({ report });
      }
    });
};
