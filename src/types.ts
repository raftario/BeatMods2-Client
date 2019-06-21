import App from '@/App.vue'

export interface IMod extends IModSimple {
  description: string
}

export interface IModSimple {
  name: string,
  version: string,
  author: string,
  gameVersion: string,
  upload: string,
  approval: Approval,
  tags: string[]
}

export interface IDropdownCheckbox<T> {
  label: string,
  value: T
}

export interface IDropdownCheckboxes<T> {
  label: string,
  checkboxes: Array<IDropdownCheckbox<T>>
  values: T[]
}

export enum Approval {
  Approved = 'approved',
  Declined = 'declined',
  Pending = 'pending',
  Inactive = 'inactive'
}

export interface IModListMenuFilters {
  approval: Approval[],
  gameVersion: string[],
  tags: string[],
  search: string
}
