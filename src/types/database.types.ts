export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      business: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          industry: string | null;
          name: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: number;
          industry?: string | null;
          name?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: number;
          industry?: string | null;
          name?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "business_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      business_hours: {
        Row: {
          break_from: string | null;
          break_to: string | null;
          business_location_id: number | null;
          created_at: string;
          day: string | null;
          from: string | null;
          id: number;
          to: string | null;
        };
        Insert: {
          break_from?: string | null;
          break_to?: string | null;
          business_location_id?: number | null;
          created_at?: string;
          day?: string | null;
          from?: string | null;
          id?: number;
          to?: string | null;
        };
        Update: {
          break_from?: string | null;
          break_to?: string | null;
          business_location_id?: number | null;
          created_at?: string;
          day?: string | null;
          from?: string | null;
          id?: number;
          to?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "business_hours_business_location_id_fkey";
            columns: ["business_location_id"];
            isOneToOne: false;
            referencedRelation: "business_location";
            referencedColumns: ["id"];
          },
        ];
      };
      business_location: {
        Row: {
          address: string | null;
          business_id: number | null;
          coordinates: string | null;
          created_at: string;
          id: number;
          is_primary: boolean | null;
          postcode: string | null;
          unit: string | null;
        };
        Insert: {
          address?: string | null;
          business_id?: number | null;
          coordinates?: string | null;
          created_at?: string;
          id?: number;
          is_primary?: boolean | null;
          postcode?: string | null;
          unit?: string | null;
        };
        Update: {
          address?: string | null;
          business_id?: number | null;
          coordinates?: string | null;
          created_at?: string;
          id?: number;
          is_primary?: boolean | null;
          postcode?: string | null;
          unit?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "business_location_business_id_fkey";
            columns: ["business_id"];
            isOneToOne: false;
            referencedRelation: "business";
            referencedColumns: ["id"];
          },
        ];
      };
      business_setting: {
        Row: {
          business_location_id: number | null;
          created_at: string;
          id: number;
          key: string | null;
          options: string | null;
          type: string | null;
          value: string | null;
        };
        Insert: {
          business_location_id?: number | null;
          created_at?: string;
          id?: number;
          key?: string | null;
          options?: string | null;
          type?: string | null;
          value?: string | null;
        };
        Update: {
          business_location_id?: number | null;
          created_at?: string;
          id?: number;
          key?: string | null;
          options?: string | null;
          type?: string | null;
          value?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "business_setting_business_location_id_fkey";
            columns: ["business_location_id"];
            isOneToOne: false;
            referencedRelation: "business_location";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
