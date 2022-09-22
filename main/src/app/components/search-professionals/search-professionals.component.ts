import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-professionals',
  templateUrl: './search-professionals.component.html',
  styleUrls: ['./search-professionals.component.css']
});

export class SearchProfessionalsComponent implements OnInit {
  searchItem: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchItem'])
        this.searchItem = params['searchItem'];
    })

  }

  search(): void {
    if (this.searchItem)
      this.router.navigateByUrl('/search/' + this.searchItem)
  }


}
