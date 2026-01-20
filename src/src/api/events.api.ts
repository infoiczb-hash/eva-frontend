import { Event, Registration } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export class EventsAPI {
  static async getEvents():Promise<Event[]> { try{ const res = await fetch(`${API_BASE_URL}/events`); if(!res.ok) throw new Error(); return res.json(); } catch { return this.getMockEvents(); } }
  static async getEventById(id:number):Promise<Event|null>{ try{ const res = await fetch(`${API_BASE_URL}/events/${id}`); if(!res.ok) return null; return res.json(); } catch { return null; } }
  static async registerForEvent(reg:Registration):Promise<boolean>{ try{ const res = await fetch(`${API_BASE_URL}/registrations`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(reg)}); return res.ok; } catch{return false;} }
  static async updateEventSpots(eventId:number,spotsToReduce:number):Promise<boolean>{ try{ const res=await fetch(`${API_BASE_URL}/events/${eventId}/spots`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({reduce:spotsToReduce})}); return res.ok; } catch{return false;} }
  private static getMockEvents():Event[]{ return [{
    id:1,title:'Сплав Тирасполь - Слободзея',type:'rafting' as any,date:'2026-01-25',time:'10:30',location:'Тираспольский пляж',
    duration:'7 часов',distance:'24 км',difficulty:'средняя' as any,spots:25,spotsLeft:12,
    image:'https://images.unsplash.com/photo-1503870243202-7c0a01cfe1cc?w=600',
    price:{adult:340,child:300,family:625},
    description:'Маршрут по Днестру',
    included:['Обратный трансфер','Байдарка, жилет, весло','Инструктаж','Чай','Сопровождение гида'],
    route:'Тирасполь → пляж → Молдованка → Карагаш → Слободзея'
  }]; }
}
