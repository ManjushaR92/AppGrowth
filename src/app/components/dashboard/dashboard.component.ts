import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import {Task} from '../../models/task/task';
import { TaskService } from 'src/app/services/task/task.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  
  faSignOut = faSignOut;
  
  constructor(public authService: AuthService,private afs: AngularFirestore,private taskService:TaskService) { }


  ngOnInit():void{

    
  }
    
  onSubmit(f:NgForm){
    

  this.taskService.addTask(f.value);
  console.log(f.value);
}
}



