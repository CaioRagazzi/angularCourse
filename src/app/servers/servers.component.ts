import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = "No Server Was Created"
  serverName = '';
  serverCreated = false;
  servers= []

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Server Was Created! Name is" + this.serverName;
  }

  OnUpdateServerName(event) {
    this.serverName = event.target.value;
  }

}
