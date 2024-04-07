import { Action } from '@ngrx/store';

export const FILTERDATA = 'Filter Data';
export const REMOVE_DEMO = 'Remove Demo';

export class FilterDataAction implements Action {
    readonly type = FILTERDATA;

    constructor(public payload: any) {}
}



export type Actions = FilterDataAction|any;
