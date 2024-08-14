export interface displayType {
  displayVar?: 'flex' | 'block' | 'inline-block' | 'inline-flex';
  flexDirectionVar?:
    | 'column'
    | 'row'
    | 'column-reverse'
    | 'row-reverse'
    | 'inherit'
    | 'initial';
  justifyContentVar?: 'center' | 'start' | 'end';
  alignItemVar?: 'center' | 'start' | 'end';
}
