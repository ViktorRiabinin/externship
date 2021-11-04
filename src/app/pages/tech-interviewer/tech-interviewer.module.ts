import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechInterviewerComponent } from './tech-interviewer.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { CandidatesModule } from './../../components/candidates/candidates.module';
import { CandidatesService } from 'src/app/services/candidates.service';
import { InterviewerAssesmentComponent } from './interviewer-assesment/interviewer-assesment.component';
import { TranslateModule } from '@ngx-translate/core';
import { TechInterviewerWindowComponent } from './tech-interviewer-window/tech-interviewer-window.component';
import { CandidateDataComponent } from './candidate-data/candidate-data.component';
import { RecruiterAssesmentComponent } from './recruiter-assesment/recruiter-assesment.component'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FilterByStatusPipe } from 'src/app/pipes/filter-by-status.pipe';

@NgModule({
  declarations: [
    TechInterviewerComponent,
    InterviewerAssesmentComponent,
    TechInterviewerWindowComponent,
    CandidateDataComponent,
    RecruiterAssesmentComponent,
    FilterByStatusPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    CandidatesModule,
    MatListModule,
    MatInputModule,
    TranslateModule,
    MatButtonModule
  ],
  exports: [
    TechInterviewerComponent
  ],
  providers: [
    CandidatesService,
  ]
})
export class TechInterviewerModule { }
