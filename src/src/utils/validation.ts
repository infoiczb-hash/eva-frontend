import { FormData, FormErrors } from '../types';

export class ValidationUtils {
  static validateRegistrationForm(form:FormData,max:number):FormErrors{
    const errors:FormErrors={};
    if(!form.name.trim()) errors.name='Укажите ваше имя';
    else if(form.name.trim().length<2) errors.name='Имя слишком короткое';
    if(!form.phone.trim()) errors.phone='Укажите телефон';
    else if(!this.isValidPhone(form.phone)) errors.phone='Некорректный формат телефона';
    if(form.email && !this.isValidEmail(form.email)) errors.email='Некорректный email';
    if(form.tickets<1 || form.tickets>max) errors.tickets=`Доступно от 1 до ${max} мест`;
    return errors;
  }
  static isValidEmail(email:string){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);}
  static isValidPhone(phone:string){return /^\+?[\d\s\-()]{7,}$/.test(phone);}
}
