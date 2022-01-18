import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService, AccountService]
})
export class AccountComponent {
  @Input()
  account!: { name: string; status: string; };

  @Input() 
  id!: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  constructor(private logginService: LoggingService,private accountService: AccountService){}


  onSetTo(status: string) {
    this.accountService.updatedAccount(this.id, status);
    //this.logginService.logStatusChange(status)
    this.accountService.statusUpdated.emit(status);
  }
}
