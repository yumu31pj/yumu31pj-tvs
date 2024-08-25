export type InputSelectType = {
  id?: string;
  name: string;
  labelText?: string;
  isRequired?: boolean;
  selectItems: SelectItemType[];
}

export type SelectItemType = {
  valueText: string;
  displayText: string;
}