import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Task} from '../../models/task/task';
import { map, Observable } from 'rxjs';
import { TaskViewModel } from '../../models/taskview/taskview';
import { collection, getDocs } from "firebase/firestore";
import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/models/user/user';
import { AuthService } from '../auth/auth.service';
 


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  

  constructor(private afs: AngularFirestore,private toastr: ToastrService, private authService:AuthService) { }

  addTask(data:any){
    this.afs.collection('users').add(data).then(ref =>{
     this.toastr.success('New Task saved');
    });

    }
  }



