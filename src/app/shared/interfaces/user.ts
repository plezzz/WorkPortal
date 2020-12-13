import {IBase} from './base';
import {IKnowledge, IRole, IVacation} from './';


export interface IUser extends IBase {
  email: string;
  password: string;
  username: string;
  isLead: boolean;
  isAdmin: boolean;
  vacationDays: number;
  VacationDetails: IVacation[];
  message: [];
  Role: IRole[];
  jobTitle: string;
  listKnowledge: IKnowledge[];
  firstName: string;
  lastName: string;
  messageReceived:[],
  messageSend:[],
}
