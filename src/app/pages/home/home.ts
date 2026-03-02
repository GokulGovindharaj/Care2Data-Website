import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {

    // Change Page Title
    this.titleService.setTitle(
      'Care2Data | Home'
    );

    // Change Meta Description
    this.metaService.updateTag({
      name: 'description',
      content: 'Care2Data delivers intelligent clinical data validation software through KWALIFY™, enabling regulatory-compliant, audit-ready and submission-ready clinical trial datasets.'
    });

    // Change Meta url
    this.metaService.updateTag({
      name: 'url',
      content: 'https://gokulgovindharaj.github.io/Care2Data-Website/#/home'
    });

    // Change Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Clinical data validation, Regulatory confidence, Data integrity, Submission readiness, Audit trails, Life sciences software, Semantic Intelligence'
    });

    // Open Graph Title
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Care2Data | Home'
    });

    // Open Graph Description
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Care2Data delivers intelligent clinical data validation software through KWALIFY™, enabling regulatory-compliant, audit-ready and submission-ready clinical trial datasets.'
    });

  }
}
