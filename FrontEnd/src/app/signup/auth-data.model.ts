export class AuthData{
    constructor(
       public fullName: String,
       public email: String,
       public phoneNo: String,
       public password: String,
       public repeatPassword : String,
       public userType: String
    ) { }
}

