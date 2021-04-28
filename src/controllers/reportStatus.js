const reportStatus = require('../model/reportStatus')

exports.reportStats = (req, res) => {
    const repStat = new reportStatus({
        reportStatus: req.body.reportStatus=[        {
            type: "reported",
            date: new Date(),
            isCompleted: true,
          },
          {
            type: "pending",
            isCompleted: false,
          },
          {
            type: "investigating",
            isCompleted: false,
          },
          {
            type: "case closed",
            isCompleted: false,
          },]
    })

    repStat.save((error, reportstat) => {
        if(error) return res.status(400).json({error})
        if(reportstat) return res.status(200).json({reportstat})
    })
}

exports.getReportStatus = (req, res) => {
    reportStatus.find({})
    .exec((error, repStat) => {
        if(error) return res.status(400).json({error})
        if(repStat) return res.status(200).json({repStat}) 
    })
}