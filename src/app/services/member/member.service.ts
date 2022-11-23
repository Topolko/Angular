import { Injectable } from '@angular/core';
import { Member } from 'src/app/components/knjiznica/models/member';
import { MEMBERS } from 'src/app/mock/Knjiznica/mock-members';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  getMemebrs(): Observable<Member[]>{
    const members = of(MEMBERS);
    return members;
  }

}
