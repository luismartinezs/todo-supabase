import { useSupabaseClient, Session } from "@supabase/auth-helpers-react";
import { Database } from "@/lib/database.types";

export default function Account({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>();

  return (
    <div className="form-widget">
      <div>{session.user.email}</div>

      <div>
        <button
          className="button block"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
