import {ThemePalette} from '@angular/material/core';
import {IRole} from './role';

export interface ICategoryRole {
  name: string;
  completed: boolean;
  color: ThemePalette;
  roles?: IRole[];
}
