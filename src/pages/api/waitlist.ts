import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
}

const supabase = createClient(supabaseUrl || '', supabaseKey || '');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
    return;
  }

  try {
    const { email } = req.body;

    // Validate email presence
    if (!email) {
      res.status(400).json({ 
        success: false,
        message: 'Email is required' 
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ 
        success: false,
        message: 'Invalid email format' 
      });
      return;
    }

    // Check Supabase credentials
    if (!supabaseUrl || !supabaseKey) {
      res.status(500).json({ 
        success: false,
        message: 'Server configuration error' 
      });
      return;
    }

    // Insert into Supabase
    const { error: supabaseError } = await supabase
      .from('waitlist')
      .insert([{ 
        email,
        created_at: new Date().toISOString(),
        status: 'pending'
      }]);

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);

      // Handle duplicate email error
      if (supabaseError.code === '23505') {
        res.status(409).json({ 
          success: false,
          message: 'This email is already on the waitlist' 
        });
        return;
      }

      res.status(500).json({ 
        success: false,
        message: 'Failed to add to waitlist' 
      });
      return;
    }

    // Success response
    res.status(200).json({ 
      success: true,
      message: 'Successfully joined the waitlist' 
    });

  } catch (error) {
    console.error('Waitlist error:', error);
    
    res.status(500).json({ 
      success: false,
      message: 'Internal server error' 
    });
  }
} 