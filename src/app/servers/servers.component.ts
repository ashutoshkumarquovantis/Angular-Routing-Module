import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router} from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, 
    private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReload(){
    // We are using relative path which gave us error in RouterLink because servers/servers doesn't exist, but it is working Here. Why?
    this.router.navigate(['servers'] );

    //To break the code when relative path then we do the following
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

  //It is working on Navigate cuz the relative path of the navigate doesn't know on which route you currently are.
}
