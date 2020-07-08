import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  client: Client

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    const email = this.route.snapshot.paramMap.get("email");
    this.clientService.getClientByEmail(email).subscribe(client => this.client = client);
  }

}
