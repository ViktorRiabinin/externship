import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CandidatesService } from 'src/app/services/candidates.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/types/user';

@Component({
	selector: 'app-team-constructor',
	templateUrl: './team-constructor.component.html',
	styleUrls: ['./team-constructor.component.scss']
})
export class TeamConstructorComponent implements OnInit {

	toppings = new FormControl();

	selectedMentors: any;

	@Input() selectedCandidates: any;

	mentors: User[] = this.usersServics.mentors;

	constructor(private usersServics: UsersService, private candidatesService: CandidatesService) { }

	setNotify(): void {
		if(this.selectedMentors !== undefined) {
			console.log(this.selectedMentors);
			this.selectedMentors = undefined;
		}
		
	}

	ngOnInit(): void {
		this.candidatesService.getSelectedCandidate().subscribe((value) => {
			if(value !== null) {
				this.selectedCandidates = value;
			}
		});
	}

}
