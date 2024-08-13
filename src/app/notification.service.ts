import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  notifications$ = this.notificationsSubject.asObservable();

  addNotification(message: string, type: 'success' | 'error' | 'info') {
    const currentNotifications = this.notificationsSubject.value;
    this.notificationsSubject.next([...currentNotifications, { message, type }]);

    setTimeout(() => {
      this.removeNotification();
    }, 3000); // Auto-remove after 3 seconds
  }

  private removeNotification() {
    const currentNotifications = this.notificationsSubject.value;
    currentNotifications.shift();
    this.notificationsSubject.next([...currentNotifications]);
  }
}
