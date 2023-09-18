import { supabase } from '../supabase';

export const { data: baseData } = await supabase
  .from('greeting')
  .select(
    `
      *,
      work_v2 (
        id,
        client,
        date,
        project_type,
        description,
        tech_stack
      ),
      projects_v2 (
        id
      ),
      cert_ref (
        id,
        name,
        type,
        date,
        subtitle,
        description
      ),
      booking (
        id
      ),
      tech_stack (
        *
      )
    `,
  )
  .order('id', { foreignTable: 'work_v2', ascending: true })
  .single();
