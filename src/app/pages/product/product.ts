import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  imports: [MatIconModule, MatExpansionModule],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {

    // Change Page Title
    this.titleService.setTitle(
      'KWALIFY™ | Intelligent Clinical Data Validation Software'
    );

    // Change Meta Description
    this.metaService.updateTag({
      name: 'og:description',
      content: 'KWALIFY™ by Care2Data is an intelligent clinical data validation platform using semantic inference and contextual rules to deliver audit-ready, submission-ready clinical trial datasets.'
    });

    // Change Meta url
    this.metaService.updateTag({
      name: 'og:url',
      content: 'https://gokulgovindharaj.github.io/Care2Data-Website/#/product'
    });

    // Change Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Clinical data validation software, Intelligent clinical data verification, Clinical trial data validation platform,Knowledge graph validation in clinical research, Submission-ready clinical datasets, Regulatory compliant data validation, 21 CFR Part 11 compliant validation software,Clinical data integrity platform,Double programming alternative,Automated QC for clinical trials,CRO validation software,Clinical data discrepancy detection,Audit-ready clinical datasets'
    });

    // Open Graph Title
    this.metaService.updateTag({
      property: 'og:title',
      content: 'KWALIFY™ | Intelligent Clinical Data Validation Software'
    });

    // Open Graph Description
    this.metaService.updateTag({
      property: 'og:description',
      content: 'KWALIFY™ by Care2Data is an intelligent clinical data validation platform using semantic inference and contextual rules to deliver audit-ready, submission-ready clinical trial datasets.'
    });

  }
}
