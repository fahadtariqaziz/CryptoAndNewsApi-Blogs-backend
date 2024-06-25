class BlogDetailsDTO{
    constructor(blog){
        this._id = blog._id;
        //this.author = blog.author;
        this.content = blog.content;
        this.title = blog.title;
        this.photo = blog.photoPath;
        this.createdAt = blog.createdAt;  //add
        this.authorName = blog.author.name;
        this.authorUsername = blog.author.username;
    }
}

module.exports = BlogDetailsDTO;