import { useEffect } from 'react'

import { useRedirectUrl } from '@/hooks/redirectUrl'

const Home = () => {
  const { redirectUrl } = useRedirectUrl()

  useEffect(() => {
    // If u want to transition directly to the locale URL on the first access, leave it as is
    redirectUrl()
  }, [])

  return <></>
}

export default Home
