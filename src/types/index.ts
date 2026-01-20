export enum EventType { RAFTING='rafting', HIKING='hiking', CYCLING='cycling' }
export enum ViewMode { GRID='grid', CALENDAR='calendar' }
export enum Difficulty { EASY='легкая', MEDIUM='средняя', HARD='сложная' }
export enum TicketType { ADULT='adult', CHILD='child', FAMILY='family' }

export interface Price { adult: number; child: number; family: number; }

export interface Event {
  id:number; title:string; type:EventType; date:string; time:string; location:string;
  duration:string; distance:string; difficulty:Difficulty; spots:number; spotsLeft:number;
  image:string; price:Price; description:string; included:string[]; route:string;
}

export interface FormData { name:string; email:string; phone:string; tickets:number; ticketType:TicketType; }

export interface Registration extends FormData { eventId:number; eventTitle:string; totalPrice:number; timestamp:string; }

export interface FormErrors { name?:string; email?:string; phone?:string; tickets?:string; }

export interface Stats { totalEvents:number; totalSpots:number; activeTypes:number; }
