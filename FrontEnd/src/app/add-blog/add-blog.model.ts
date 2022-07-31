export class BlogModel {
    constructor(
        public title:String,
        public content:String,
        public username:String,
        public category:String,
        public approved:String,
        public imageUrl:string,
        public createdttm:string
    ) { }
}