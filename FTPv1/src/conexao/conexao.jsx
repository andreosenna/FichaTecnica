import { createClient } from '@supabase/supabase-js'
const supabaseURL = "https://stfnoisqnmnktvavnzaz.supabase.co"
                            
const supabaseKey = "sb_publishable_xEnSrxhA8rD47sslTeQn1A_fPIqcScO"

const supabase = createClient(supabaseURL, supabaseKey)

export default supabase
