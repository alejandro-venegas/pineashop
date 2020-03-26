import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticeMessagesService {
  noticeMessages = new Subject<{ id: number; message: string }>();

  sendSuccessMessage(message: string) {
    this.noticeMessages.next({
      id: 1,
      message
    });
  }
  sendWarningMessage(message: string) {
    this.noticeMessages.next({
      id: 2,
      message
    });
  }
}
