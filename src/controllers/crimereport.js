const Crimereport = require("../model/crimereport");

exports.reportCrime = (req, res) => {
  Crimereport.findOne({user: req.user._id}).exec((error,report) => {
    if(error) return res.status(400).json({error})
    if(report){

      Crimereport.findOneAndUpdate({user: req.user._id}, {
        "$push": {
          "report": req.body.report,
          // "reportStatus": req.body.reportStatus=[        {
          //   type: "reported",
          //   date: new Date(),
          //   isCompleted: true,
          // },
          // {
          //   type: "pending",
          //   isCompleted: false,
          // },
          // {
          //   type: "investigating",
          //   isCompleted: false,
          // },
          // {
          //   type: "case closed",
          //   isCompleted: false,
          // },]
       
        }
      }).exec((error, _report ) => {
        if (error) return res.status(400).json({error})
        if (_report) return res.status(200).json({_report})
      })
    
    }else{
      // const reports = {
      //   report: 
      // }
      const crimereport = new Crimereport({
        user: req.user._id,
        location: req.body.location,
        category: req.body.category,
        // report: req.body.report.reportStatus =[        {
        //   type: "reported",
        //   date: new Date(),
        //   isCompleted: true,
        // },
        // {
        //   type: "pending",
        //   isCompleted: false,
        // },
        // {
        //   type: "investigating",
        //   isCompleted: false,
        // },
        // {
        //   type: "case closed",
        //   isCompleted: false,
        // },],
        report:req.body.report,
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
      crimereport.save((error, reports) => {
          if(error) return res.status(400).json({error})
          if(reports) return res.status(200).json({reports})
      })
    }
  })
  
}


exports.getCrimeReport = (req, res) => {
    Crimereport.find({})
    .populate("report.category", "name")
    .populate("report.location", "name")
    // .populate("report.reportStatus")
    .exec((error, crimesReport) => {
      if(error) return res.status(400).json({error})
      if(crimesReport) return res.status(200).json({crimesReport}) 
  })
  }





