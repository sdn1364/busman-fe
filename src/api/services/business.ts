import { supabase } from "../supabase";

export const getBusinesses = async (user_id: number) => {
  const { data, error } = await supabase
    .from("business")
    .select(`*, business_location(*)`)
    .eq("user_id", user_id);

  if (error) throw error;
  return data;
};
