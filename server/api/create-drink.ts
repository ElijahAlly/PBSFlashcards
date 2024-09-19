// eslint-disable-next-line import/no-unresolved
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { table, columns, values } = getQuery(event);

    try {
        if (!columns || !Array.isArray(columns) || !values || !Array.isArray(values)) throw ('Must Provide Columns and Values')
        const { data, error } = await client.from(table).insert([
            Object.fromEntries(columns.map((col: any, i: number) => [col, values[i]]))
        ]).select();
        if (error) throw error;
        return { data };
    } catch (error) {
        return { error };
    }
});