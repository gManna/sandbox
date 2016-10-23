
import Usermodel from '../models/users.js';


class User {
  constructor () {
  }

  list(req,res,next) {
    Usermodel.find({},(err,users) => {
      if(err) {
        res.status(500).json({"error": err});
      }else{
         res.status(200).json(users);
      }
    })
  }

  create(data,req,res,next) {
    var user = new Usermodel(data);
    user.save(function(err){
      if(err)
      console.log(err);
      else
      res.status(201).json();
    });
  }
}

export { User as default}
