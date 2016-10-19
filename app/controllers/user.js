
import Usermodel from '../models/users.js';


class User {
  constructor (req,res,next) {
    this.req = req;
    this.res = res;
  }

  list() {
    Usermodel.find({},(err,users) => {
      if(err) {
        this.res.status(500).json({"error": err});
      }else{
        this.res.json(users);
        //return users;
      }
    })
  }

  create(data) {
    var user = new Usermodel(data);
    user.save(function(err){
  if(err)
    console.log(err);
  else
    console.log(user);
});
  }
}

export { User as default}
