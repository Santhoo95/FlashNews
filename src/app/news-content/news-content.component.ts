import { Component } from '@angular/core';
import { NewsApiService } from '../news-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent {

	mArticles:Array<any>;
	mSources:Array<any>;
	user:any;
	userName:string;
	
	constructor(private newsapi:NewsApiService){
		console.log('app component constructor called');         
	}

	ngOnInit() {
		//load articles
		this.user=JSON.parse(localStorage.getItem("user"));
		
	    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
		//load news sources
		this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);	
    }


	searchArticles(source){
		console.log("selected source is: "+source);
		this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
	}
  
}
