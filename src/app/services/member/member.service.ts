import { Injectable } from '@angular/core';
import { Member } from '../../components/knjiznica/models/member';
import { MEMBERS } from '../../mock/Knjiznica/mock-members';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  getMemebrs$(): Observable<Member[]>{
    const members = of(MEMBERS);
    return members;
  }

}
