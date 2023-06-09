import Link from 'next/link'

export default function Error() {
  return <>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
        Return to Home
    </Link>
  </>
}