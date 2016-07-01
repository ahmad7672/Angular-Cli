import {Component ,Output,EventEmitter} from "angular2/core";


@Component({
   selector :"post",
   
   styleUrls:['app/post.style.css'],
   
   templateUrl:"app/post.template.html",
   
    
    
})


export class Post{
    
    @Output() shareIt =new EventEmitter;
    
    myPost={
        
        bookMark : false ,
        report : false ,
        hide : true,
        share :false,
        text : "YES its share"
        
    }
    
    
    bookMarkClick(){
        
       this.myPost.bookMark= ! this.myPost.bookMark;
       
       
       
        
    }
    
    
    reportClick(){
        
       this.myPost.report= ! this.myPost.report;
       
       
       
        
    }
   
   
    hideClick(){
        
       this.myPost.hide= ! this.myPost.hide;
       
      
       
        
    } 
    
    
    shareClick(){
        
         this.myPost.share= ! this.myPost.share;
         
       
       console.log("yes");  
        this.shareIt.emit({status : this.myPost});
    }
    
}