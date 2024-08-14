import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';

export const getComponent = (type) => {
  switch (type) {
    case 'text':
      return InputText;
    case 'number':
      return InputNumber;
    case 'password':
      return Password;
    case 'textarea':
      return Textarea;
    case 'select':
      return Dropdown;
    case 'date':
      return Calendar;
    default:
      return InputText; // Default fallback
  }
};