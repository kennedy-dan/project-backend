const User = require("../../model/user");
const jwt = require('jsonwebtoken')

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email }).exec((error, user) => {
      if(user){ 
          res.status(400).json({message: 'admin already exists'})
      }
      const {firstName, lastName, email, password} = req.body
      const _user = new User({firstName, lastName, email, password, role: 'admin'})
      _user.save((error, data) => {
          if(error) res.status(400).json({message: 'somethimgs wrong'})
          if(data){
              return res.status(201).json({message: 'admin created succefully', user:{ data}})
          }
          
      })
     
    });
  }

exports.signin = (req, res) => {
    User.findOne({email: req.body.email}).exec((error, user) => {
        if(error) return res.status(400).json({error})
        if(user){
            if(user.authenticate(req.body.password) && user.role==='admin'){
                const token = jwt.sign({_id: user._id}, process.env.TOKEN_SIGNIN, {expiresIn:'7d'})
                const {_id,firstName,lastName,email, role, fullName} = user
                res.status(200).json({
                    token,
                    user:{
                    _id,firstName,lastName,email, role, fullName
                    }
                })
            }else{
                return res.status(400).json({message: 'invalid password'})
            }
        }
    })
}



