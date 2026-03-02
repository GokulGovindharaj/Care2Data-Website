import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {

    // Change Page Title
    this.titleService.setTitle(
      'About Us | Care2Data'
    );

    // Change Meta Description
    this.metaService.updateTag({
      name: 'og:description',
      content: 'Care2Data is a clinical data validation software company that provides intelligent clinical data verification solutions for clinical research.'
    });

    // Change Meta url
    this.metaService.updateTag({
      name: 'og:url',
      content: 'https://gokulgovindharaj.github.io/Care2Data-Website/#/product'
    });

    // Change Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'About Care2Data, Clinical data validation software company, Intelligent clinical data verification solutions, Clinical research software provider, Clinical data integrity solutions, Clinical trial data validation experts, Regulatory-compliant clinical data validation, 21 CFR Part 11 compliant software, Clinical data quality assurance, Clinical research technology company'
    });

    // Open Graph Title
    this.metaService.updateTag({
      property: 'og:title',
      content: 'About Us | Care2Data'
    });

    // Open Graph Description
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Care2Data is a clinical data validation software company that provides intelligent clinical data verification solutions for clinical research.'
    });

  }
}
