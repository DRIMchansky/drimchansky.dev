import { defineCollection, z } from 'astro:content'

const resumeCollection = defineCollection({
  schema: z.object({
    company: z.string(),
    companyLink: z.string(),
    dateEnd: z.date().optional(),
    dateStart: z.date(),
    position: z.string()
  })
})

export const collections = {
  resume: resumeCollection
}
