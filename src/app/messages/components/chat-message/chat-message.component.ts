import { Component, ElementRef, ViewChild } from '@angular/core';
import { JobService } from 'src/app/jobs/services/job.service';
import { ChatService } from '../../services/chat.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent {

  @ViewChild('messageInput')
  messageInput!: ElementRef;
  messageText: string = '';

 appliedJobList: any[] = [];
 companyName:String | undefined;
 chatId!: string;
 show:boolean=false;
 inputValue: string = '';
 message:string | undefined;
 messages:any[]=[];
 email!: any;
  constructor(private jobService:JobService,private chat:ChatService,private fb: FormBuilder){
    
  }
  
  ngOnInit(){
    this.getAppliedCompanies();
    // this.getMessage();
   this.email=sessionStorage.getItem('email');
  }

  getAppliedCompanies(){
    this.jobService.getAppliedJobs().subscribe((resp:any)=>{
      this.appliedJobList=resp.data;
      console.log(this.appliedJobList);
    })

  }

  chatMessage(id:string,name:string){
      this.companyName=name;
     
      this.show=true;
      console.log("receipiant id"+id);
      this.chat.startChat(id).subscribe((result:any)=>{
        console.log(result.data.id);
        this.chatId=result.data.id;
        localStorage.setItem('id',this.chatId);
      })
     
  }
  sendMessage(input:any,message:string){
   
    this.chat.sendMessage(message,this.chatId).subscribe((result:any)=>{
      this.message=result.data.content;
      
    })
   
    this.messageInput.nativeElement.value = '';
    this.getMessage();
  }

  getMessage(){
   
    this.chat.getMessage().subscribe((data:any)=>{
      console.log(data.data);
      this.messages=data.data;

    })
  }

}
