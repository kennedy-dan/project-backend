const location = require('../model/crimeLocation') 

exports.crimeLocation = (req, res) => {
    const catsObj = {
        name: req.body.name
    }

    // if (req.file) {
    //     catsObj.categoryImage =
    //       process.env.API + "/public/" + req.file.filename;
    //   }


    const cat = new location(catsObj)
    cat.save((error, crimeLoctns) => {
        if(error) res.status(400).json({error})
        if(crimeLoctns) res.status(201).json({crimeLoctns})
    }
    )
}

exports.getLocation = (req,res) =>{
    
    location.find({})
    .exec((error, lxns) => {
        if(error) return res.status(400).json({error})
        if(lxns) return res.status(200).json({lxns}) 
    })
}

