// import { supabase } from 'src/config/supabase-client';
import { configAxios } from "src/config/configAxios";
// import { useAuth } from 'src/hooks/Auth';

type SelectedDate = {
  prefessional_id: number;
  patient_id: String;
  slot: String;
  appointment_type: String;
  appointment_date: Date;
  result: String | null;
  status: String;
};

export async function setAppointments(
  selectedDate: SelectedDate | null,
  AuthToken: string
) {
  try {
    if (selectedDate) {
      const data = await configAxios.post(
        `/appointments`,
        {
          professional_id: selectedDate.prefessional_id,
          patient_id: selectedDate.patient_id,
          slot: selectedDate.slot,
          appointment_type: selectedDate.appointment_type,
          appointment_date: new Date(
            selectedDate.appointment_date.getTime() + 12 * 60 * 60 * 1000
          ),
          result: selectedDate.result,
          statut: selectedDate.status,
        },
        {
          headers: {
            Authorization: "Bearer " + AuthToken,
          },
        }
      );
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
