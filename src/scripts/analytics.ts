import { inject } from '@vercel/analytics'

inject({ mode: import.meta.env.MODE as 'development' | 'production' })
