// eslint-disable-next-line import/no-unresolved
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { table, select } = getQuery(event);

    try {
        const { data, error } = await client.from(table).select(select);
        if (error) throw error;
        return { data };
    } catch (error) {
        return { error };
    }
});