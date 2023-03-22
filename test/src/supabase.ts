import { createClient } from '@supabase/supabase-js';

export interface IProjects {
  name: string;
  subtitle: string;
  short_description: string;
  long_description: string;
  client: string;
  date: Date;
  project_type: string;
  tech_stack: string[];
  methodology: string;
  agreement: string;
  contender: string;
}

export interface IProject {
  id: number;
  name: string;
  associate: string;
  description: string;
}

export interface IDescriptions {
  id: number;
  created_at: string;
  work_id: number;
  language: 'es' | 'en';
  content: string;
}

export interface IProjectDescription {
  id: number;
  created_at: string;
  project_id: number;
  language: 'es' | 'en';
  content: string;
}

export interface IAboutDescriptions {
  id: number;
  language: 'es' | 'en';
  content: string;
  as: string;
}

export interface IWorks {
  id: string;
  client: string;
  date: string;
  project_type: string;
  description: string[];
  tech_stack: string[];
}

export interface ICertRef {
  id: string;
  name: string;
  date: string;
  subtitle: string;
  description: string[];
}

export interface ITech_Stack {
  id: string;
  greeting_id: string;
  created_at: string;
  css: boolean;
  html: boolean;
  js: boolean;
  react: boolean;
  redux: boolean;
  typescript: boolean;
  node: boolean;
  express: boolean;
  mongodb: boolean;
  postgresql: boolean;
  git: boolean;
  github: boolean;
  gitlab: boolean;
  docker: boolean;
  aws: boolean;
  heroku: boolean;
  netlify: boolean;
  vercel: boolean;
  firebase: boolean;
  jest: boolean;
  cypress: boolean;
  react_testing_library: boolean;
  enzyme: boolean;
  styled_components: boolean;
  material_ui: boolean;
  bootstrap: boolean;
  tailwind: boolean;
  less: boolean;
  css_modules: boolean;
  css_in_js: boolean;
  next: boolean;
  gatsby: boolean;
  graphql: boolean;
  apollo: boolean;
  prisma: boolean;
  sequelize: boolean;
  sass: boolean;
  svelte: boolean;
}

export interface ILog {
  greeting_id?: number;
  name: string;
  surname: string;
  email: string;
  company_name: string;
  position: string;
  additional_information: string;
  salary_range: string;
  available: Date;
}

export interface IBaseData {
  name: string;
  image: string;
  position: string;
  experience: string;
  skills: string;
  strengths: string;
  id: number;
  work_v2: IWorks[];
  projects_v2: IProjects[];
  cert_ref: ICertRef[];
  booking: Object[];
  tech_stack: ITech_Stack[];
}

interface Database {
  public: {
    Tables: {
      greeting: {
        Row: { id: string }; // The data expected to be returned from a "select" statement.
        Insert: {}; // The data expected passed to an "insert" statement.
        Update: {}; // The data expected passed to an "update" statement.
      };
    };
  };
}

export const supabase = createClient<Database>(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_KEY
);
