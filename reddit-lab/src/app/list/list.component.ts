import { Component, OnInit } from '@angular/core';
import { RedditApiService } from "../reddit-api.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public redditService: RedditApiService;
  constructor(public redditAPI: RedditApiService) { }

  ngOnInit(): void {
    this.redditAPI.getReddit();
  }

}
