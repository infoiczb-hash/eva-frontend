import { useState, useEffect, useCallback } from 'react';
import { Event } from '../types';
import { EventsAPI } from '../api/events.api';

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { loadEvents(); }, []);

  const loadEvents = async () => {
    try { setLoading(true); setError(null); setEvents(await EventsAPI.getEvents()); }
    catch { setError('Не удалось загрузить мероприятия'); }
    finally { setLoading(false); }
  };

  const updateEventSpots = useCallback((eventId:number, tickets:number)=>{
    setEvents(prev => prev.map(e=>e.id===eventId?{...e,spotsLeft:e.spotsLeft-tickets}:e));
  }, []);

  return { events, loading, error, updateEventSpots, refetch: loadEvents };
};
