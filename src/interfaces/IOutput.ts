import { IComponent } from './IComponent';

export interface IOutput {
  format(data: IComponent[]): void
}