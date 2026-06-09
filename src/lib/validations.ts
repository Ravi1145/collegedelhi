import { z } from 'zod'

const phoneRegex = /^[6-9]\d{9}$/

export const leadSchema = z.object({
  // name is optional — some widgets (LeadBar, NewsAlert, ScholarshipSubscribe) capture phone only
  name: z.string().min(2, 'Name must be at least 2 characters').max(50).optional(),
  phone: z.string().regex(phoneRegex, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  stream: z.string().optional(),
  budget: z.string().optional(),
  exam_type: z.string().optional(),
  exam_score: z.string().optional(),
  career_goal: z.string().max(200).optional(),
  college_interest: z.string().optional(),
  college_slug: z.string().optional(),
  course_interest: z.string().optional(),
  preferred_contact: z.enum(['whatsapp', 'call', 'email']).optional(),
  preferred_time: z.enum(['morning', 'afternoon', 'evening']).optional(),
  message: z.string().max(500).optional(),
  source: z.enum([
    'enquiry_form', 'college_page', 'exit_popup', 'ai_gate',
    'predictor', 'shortlist', 'counselling', 'lead_magnet', 'inline_form',
    'counselling_page', 'whatsapp_widget', 'floating_button', 'college_card',
    'popup_form', 'homepage_banner', 'search_results', 'compare_page',
    'admission_predictor', 'cutoff_page', 'blog_page', 'exam_page',
    'city_page', 'stream_page', 'recommended_colleges', 'ai_chatbot',
    'footer_form', 'email_marketing', 'social_media', 'referral', 'external_link',
    'lead_bar', 'news_alert', 'scholarship_subscribe', 'counselling_popup',
  ]),
  page_url: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
})

export const enquirySchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string().regex(phoneRegex, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().email().optional().or(z.literal('')),
  college_name: z.string().min(2),
  college_slug: z.string().optional(),
  course: z.string().optional(),
  message: z.string().max(500).optional(),
  preferred_contact: z.enum(['whatsapp', 'call', 'email']).default('whatsapp'),
  preferred_time: z.enum(['morning', 'afternoon', 'evening']).optional(),
})

export const counsellingSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string().regex(phoneRegex, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().email().optional().or(z.literal('')),
  stream: z.string().optional(),
  preferred_date: z.string().optional(),
  preferred_time: z.enum(['morning', 'afternoon', 'evening']).optional(),
  exam_score: z.string().optional(),
})

export type LeadInput = z.infer<typeof leadSchema>
export type EnquiryInput = z.infer<typeof enquirySchema>
export type CounsellingInput = z.infer<typeof counsellingSchema>
