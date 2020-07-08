import { Component, OnInit, Input } from '@angular/core';
import { Opp } from '../opp';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-opp',
  templateUrl: './client-opp.component.html',
  styleUrls: ['./client-opp.component.scss']
})
export class ClientOppComponent implements OnInit {

  opp: Opp[];
  @Input() email: string;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getOpp();
  }

  getOpp(): void {
    this.clientService.getOppsByEmail(this.email).subscribe(res => this.opp = res);
  }

  onChange(): void {
    this.clientService.updateOpp(this.email, this.opp).subscribe(_ => alert("Alteração Realizada"));
  }

}
