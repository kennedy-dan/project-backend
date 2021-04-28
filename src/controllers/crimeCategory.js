const CrimeCategory = require('../model/crimeCategory') 

exports.createcrimeCategories = (req, res) => {
    const catsObj = {
        name: req.body.name
    }

    // if (req.file) {
    //     catsObj.categoryImage =
    //       process.env.API + "/public/" + req.file.filename;
    //   }


    const cat = new CrimeCategory(catsObj)
    cat.save((error, crimeCats) => {
        if(error) res.status(400).json({error})
        if(crimeCats) res.status(201).json({crimeCats})
    }
    )
}

exports.getcrimeCategories = (req,res) =>{
    CrimeCategory.find({}).exec((error, crimes) => {
        if(error) return res.status(400).json({error})
        if(crimes) return res.status(200).json({crimes}) 
    })
}

