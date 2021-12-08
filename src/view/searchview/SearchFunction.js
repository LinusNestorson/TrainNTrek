
function search(user){
    let userInfo = (localStorage.getItem(user))
    if(userInfo == null)
    {
        userInfo = "User doesn't exist!"
    }
    return userInfo
  }

  module.exports = search;