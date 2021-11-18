import { createAction, props } from "@ngrx/store";
import { Candidate, CandidatesFilter } from "../../types/candidate";

export const loadCandidatesList = createAction('[Candidates] Load list', props<{ filters: CandidatesFilter }>());
export const loadCandidatesListSuccess = createAction('[Candidates] Load list success', props<{ candidatesList: Candidate[] }>());
export const loadCandidatesListFail = createAction('[Candidates] Load list fail', props<{ message: string }>());
export const selectCandidate = createAction('[Candidates] Select from list', props<{ selectedCandidate: Candidate }>());
// export const changeFilters = createAction('[Candidates] Change filters', props<{ filters: CandidatesFilter }>());
