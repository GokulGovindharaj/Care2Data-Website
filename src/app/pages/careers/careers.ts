import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  imports: [CommonModule],
  templateUrl: './careers.html',
  styleUrl: './careers.scss',
})
export class Careers implements OnInit {

  openingRoles: any = [
    { jobtitle: 'Senior Clinical Data Engineer', department: 'Data Engineering', location: 'Chennai', description: 'Lead development of ontology-driven validation frameworks and scalable knowledge models for regulated clinical environments.' },
    { jobtitle: 'Regulatory Validation Specialist', department: 'Regulatory Affairs', location: 'Chennai', description: 'Design and implement governed validation processes ensuring traceability,compliance, and submission readiness across clinical programs.' },
    { jobtitle: 'Knowledge Systems Architect', department: 'Data Engineering', location: 'Chennai', description: 'Build semantic models and knowledge graph structures that connect datasets, validation logic, and regulatory standards.' },
  ]

  constructor() {

  }

  ngOnInit() { }

  applyJobs(job: any) {
    console.log(job);
  }
}
